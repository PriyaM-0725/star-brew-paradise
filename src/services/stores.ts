
import { fetchData } from "./api";

export type Store = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
  features: string[];
  latitude: number;
  longitude: number;
  image: string;
};

export type StoreSearchParams = {
  query?: string;
  latitude?: number;
  longitude?: number;
  radius?: number; // in miles
  features?: string[];
  page?: number;
  limit?: number;
};

export const searchStores = async (
  params: StoreSearchParams
): Promise<{
  stores: Store[];
  totalStores: number;
  totalPages: number;
}> => {
  const queryParams = new URLSearchParams();
  
  if (params.query) {
    queryParams.append("query", params.query);
  }
  
  if (params.latitude && params.longitude) {
    queryParams.append("latitude", params.latitude.toString());
    queryParams.append("longitude", params.longitude.toString());
  }
  
  if (params.radius) {
    queryParams.append("radius", params.radius.toString());
  }
  
  if (params.features?.length) {
    params.features.forEach((feature) => {
      queryParams.append("features[]", feature);
    });
  }
  
  if (params.page) {
    queryParams.append("page", params.page.toString());
  }
  
  if (params.limit) {
    queryParams.append("limit", params.limit.toString());
  }
  
  return await fetchData<{
    stores: Store[];
    totalStores: number;
    totalPages: number;
  }>(`/stores/search?${queryParams.toString()}`);
};

export const getStoreById = async (storeId: string): Promise<Store> => {
  return await fetchData<Store>(`/stores/${storeId}`);
};

export const getNearbyStores = async (
  latitude: number,
  longitude: number,
  radius: number = 10
): Promise<Store[]> => {
  return await fetchData<Store[]>(
    `/stores/nearby?latitude=${latitude}&longitude=${longitude}&radius=${radius}`
  );
};
