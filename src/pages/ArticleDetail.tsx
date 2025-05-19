
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bookmark, Share } from "lucide-react";
import { Article, getArticleBySlug } from "@/services/articles";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        if (slug) {
          const data = await getArticleBySlug(slug);
          setArticle(data);
          setError(null);
        }
      } catch (err: any) {
        setError(err.message || "Failed to load article");
        console.error("Error fetching article:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticle();
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [slug]);
  
  const handleSaveArticle = () => {
    if (!user) {
      toast("Please login to save articles", {
        action: {
          label: "Login",
          onClick: () => window.location.href = "/login",
        },
      });
      return;
    }
    
    toast("Article saved to your bookmarks!");
  };
  
  const handleShareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title || "StarBrew Article",
        text: article?.excerpt || "Check out this article from StarBrew",
        url: window.location.href,
      }).then(() => {
        console.log("Article shared successfully");
      }).catch((error) => {
        console.error("Error sharing article:", error);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast("Link copied to clipboard");
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-starbucks-green border-solid"></div>
        </div>
      </div>
    );
  }
  
  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-8">{error || "The article you're looking for doesn't exist or has been removed."}</p>
          <Link to="/stories">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-starbucks-green text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/stories" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Link>
            
            <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 border-2 border-white/30">
                  {article.author.avatar ? (
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  ) : (
                    <AvatarFallback>{article.author.name[0].toUpperCase()}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-white/70">
                    {article.date} • {article.readTime}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full text-white hover:bg-white/20"
                  onClick={handleSaveArticle}
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full text-white hover:bg-white/20"
                  onClick={handleShareArticle}
                >
                  <Share className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Image */}
      <div className="w-full h-[30vh] md:h-[50vh] overflow-hidden bg-gray-200">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-xl font-medium text-gray-700 mb-8">
            {article.excerpt}
          </p>
          
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </article>
      
      {/* Author Bio */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Separator className="mb-8" />
          
          <div className="flex items-start md:items-center">
            <Avatar className="h-16 w-16 mr-4">
              {article.author.avatar ? (
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
              ) : (
                <AvatarFallback className="text-lg">{article.author.name[0].toUpperCase()}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="text-sm text-gray-500">WRITTEN BY</p>
              <h3 className="text-xl font-bold mb-2">{article.author.name}</h3>
              <p className="text-gray-600">{article.author.bio}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {article.relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id} 
                    to={`/article/${relatedArticle.slug}`}
                    className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 hover:text-starbucks-green transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
