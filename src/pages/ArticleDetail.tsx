
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

// Sample articles data - in a real app, this would come from an API
const articles = {
  "from-beans-to-cup": {
    slug: "from-beans-to-cup",
    title: "From Beans to Cup: The Journey of Our Coffee",
    date: "May 15, 2023",
    author: "Maria Johnson",
    category: "Coffee Culture",
    featuredImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Coffee is more than just a beverage – it's an experience that begins thousands of miles away from your cup. The journey of StarBrew coffee starts in regions known as the Bean Belt, areas around the world within 25 degrees north and south of the equator where coffee trees flourish under ideal growing conditions."
      },
      {
        type: "heading",
        text: "The Growing Process"
      },
      {
        type: "paragraph",
        text: "Coffee cherries, the fruit that contains coffee beans, take nearly a year to mature after the trees flower. Each tree produces about 1-2 pounds of coffee per year – that's roughly 2,000 coffee cherries, or 4,000 beans."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1611080626919-7cf5a9999e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Coffee cherries ripening on the branch"
      },
      {
        type: "paragraph",
        text: "Our farmers carefully select only the ripest cherries for harvest. This detail-oriented approach ensures that we start with the highest quality beans possible."
      },
      {
        type: "heading",
        text: "Processing Methods"
      },
      {
        type: "paragraph",
        text: "Once cherries are harvested, they undergo processing to extract the beans. The two primary methods are:"
      },
      {
        type: "list",
        items: [
          "Washed Processing: Removes the cherry completely before drying, resulting in cleaner, brighter flavors.",
          "Natural Processing: Dries the whole cherry with the bean inside, creating fruitier, more complex profiles."
        ]
      },
      {
        type: "paragraph",
        text: "At StarBrew, we work with farmers who employ both methods, selecting the approach that best highlights each region's unique characteristics."
      },
      {
        type: "quote",
        text: "The processing method is like choosing a lens through which to view the coffee's inherent qualities. It doesn't create flavor – it reveals it.",
        author: "Carmen Rodriguez, StarBrew Coffee Sourcer"
      },
      {
        type: "heading",
        text: "The Art of Roasting"
      },
      {
        type: "paragraph",
        text: "After processing and shipping, the green coffee beans arrive at our roasting facilities. Roasting is where science and art converge to transform the beans from their raw state into the aromatic brown beans we recognize."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "The roasting process brings out coffee's complex flavors"
      },
      {
        type: "paragraph",
        text: "Our master roasters develop specific profiles for each coffee origin, carefully monitoring time and temperature to bring out the best flavors. Light roasts preserve more of the bean's original character, while darker roasts develop caramelized sugars and bolder body."
      },
      {
        type: "heading",
        text: "The Final Mile"
      },
      {
        type: "paragraph",
        text: "Once roasted, our coffee is quickly packaged to preserve freshness and delivered to StarBrew locations within days. Our baristas are trained to honor the entire journey with their precise brewing techniques, ensuring that every cup tells the story of its origin."
      },
      {
        type: "paragraph",
        text: "From the farmers who nurture the plants to the baristas who craft your drink, dozens of hands contribute to the perfect cup of StarBrew coffee. It's this dedication to quality at every step that makes each sip an experience worth savoring."
      },
      {
        type: "callout",
        text: "Visit any StarBrew location to learn more about our coffee origins and the special roasts available this season."
      }
    ],
    relatedArticles: [
      {
        title: "Meet Maria: The Master Roaster Behind Our Signature Blend",
        slug: "meet-maria-master-roaster",
        image: "https://images.unsplash.com/photo-1559305616-3f9f5a13f211?q=80&w=640&auto=format&fit=crop",
        category: "People"
      },
      {
        title: "The Science of the Perfect Espresso",
        slug: "science-of-perfect-espresso",
        image: "https://images.unsplash.com/photo-1572286258217-215b98b0d184?q=80&w=640&auto=format&fit=crop",
        category: "Coffee Education"
      }
    ]
  },
  "meet-maria-master-roaster": {
    slug: "meet-maria-master-roaster",
    title: "Meet Maria: The Master Roaster Behind Our Signature Blend",
    date: "April 23, 2023",
    author: "James Wilson",
    category: "People",
    featuredImage: "https://images.unsplash.com/photo-1559305616-3f9f5a13f211?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Behind every exceptional cup of StarBrew coffee is a team of dedicated professionals who pour their expertise and passion into creating the perfect blend. Among these artisans is Maria Gonzalez, our master roaster whose discerning palate and technical precision have helped define our signature flavor profiles for over 15 years."
      },
      {
        type: "paragraph",
        text: "This is her story."
      }
    ],
    relatedArticles: []
  }
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles[slug as keyof typeof articles];
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">We couldn't find the article you're looking for.</p>
          <Button asChild>
            <Link to="/stories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Stories
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/stories" className="text-gray-500 hover:text-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Stories
            </Link>
          </Button>
        </div>
        
        <div className="mb-8">
          <span className="inline-block bg-starbucks-green/10 text-starbucks-green px-3 py-1 rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-500 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{article.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <User className="h-4 w-4 mr-2" />
              <span className="text-sm">{article.author}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <img 
            src={article.featuredImage} 
            alt={article.title}
            className="w-full h-auto rounded-lg object-cover mb-4"
            style={{ maxHeight: "500px" }}
          />
        </div>
        
        <div className="prose max-w-none mb-12">
          {article.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index} className="mb-6">{block.text}</p>;
              case "heading":
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{block.text}</h2>;
              case "image":
                return (
                  <figure key={index} className="my-8">
                    <img 
                      src={block.url} 
                      alt={block.caption || ''} 
                      className="w-full h-auto rounded-md"
                    />
                    {block.caption && (
                      <figcaption className="text-center text-sm text-gray-500 mt-2">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              case "quote":
                return (
                  <blockquote key={index} className="border-l-4 border-starbucks-green pl-4 italic my-6">
                    <p className="mb-2">{block.text}</p>
                    {block.author && <cite className="text-sm">— {block.author}</cite>}
                  </blockquote>
                );
              case "callout":
                return (
                  <div key={index} className="bg-starbucks-cream p-6 rounded-md my-8">
                    <p className="text-starbucks-brown font-medium">{block.text}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        
        <div className="border-t border-b py-6 mb-12">
          <div className="flex justify-between items-center">
            <span className="font-medium">Share this article:</span>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share via link</span>
              </Button>
            </div>
          </div>
        </div>
        
        {article.relatedArticles.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.relatedArticles.map((relatedArticle, index) => (
                <Card key={index} className="overflow-hidden">
                  <Link to={`/article/${relatedArticle.slug}`} className="block h-full">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-starbucks-green font-medium block mb-2">
                        {relatedArticle.category}
                      </span>
                      <h3 className="font-semibold line-clamp-2">{relatedArticle.title}</h3>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
