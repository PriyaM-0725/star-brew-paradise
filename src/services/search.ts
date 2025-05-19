
import { fetchData, withAuth } from "./api";

export type SearchParams = {
  query: string;
  category?: string;
  page?: number;
  limit?: number;
};

export type SearchResult = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
};

export type SearchResponse = {
  results: SearchResult[];
  totalResults: number;
  page: number;
  totalPages: number;
};

export const searchStories = async (
  params: SearchParams
): Promise<SearchResponse> => {
  const queryParams = new URLSearchParams();
  queryParams.append("query", params.query);
  
  if (params.category) {
    queryParams.append("category", params.category);
  }
  
  if (params.page) {
    queryParams.append("page", params.page.toString());
  }
  
  if (params.limit) {
    queryParams.append("limit", params.limit.toString());
  }
  
  return await fetchData<SearchResponse>(
    `/stories/search?${queryParams.toString()}`
  );
};
