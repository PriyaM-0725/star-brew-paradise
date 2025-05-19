
import { fetchData, withAuth } from "./api";

export type Article = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  relatedArticles?: {
    id: string;
    slug: string;
    title: string;
    image: string;
  }[];
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  return await fetchData<Article>(`/articles/${slug}`);
};

export const getFeaturedArticles = async (): Promise<Article[]> => {
  return await fetchData<Article[]>("/articles/featured");
};

export const getRecentArticles = async (limit: number = 6): Promise<Article[]> => {
  return await fetchData<Article[]>(`/articles/recent?limit=${limit}`);
};

export const getArticlesByCategory = async (
  category: string,
  page: number = 1,
  limit: number = 9
): Promise<{
  articles: Article[];
  totalArticles: number;
  totalPages: number;
}> => {
  return await fetchData<{
    articles: Article[];
    totalArticles: number;
    totalPages: number;
  }>(
    `/articles/category/${category}?page=${page}&limit=${limit}`
  );
};

export const saveArticle = async (articleId: string): Promise<void> => {
  await fetchData("/user/saved-articles", {
    method: "POST",
    body: JSON.stringify({ articleId }),
    ...withAuth(),
  });
};

export const getSavedArticles = async (): Promise<Article[]> => {
  return await fetchData<Article[]>("/user/saved-articles", withAuth());
};
