
import { supabase } from "@/lib/supabase";

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
  try {
    let query = supabase.from('stores').select('*');
    
    // Apply filters
    if (params.query) {
      query = query.or(`name.ilike.%${params.query}%,address.ilike.%${params.query}%,city.ilike.%${params.query}%`);
    }
    
    // Apply pagination
    const page = params.page || 1;
    const limit = params.limit || 10;
    const start = (page - 1) * limit;
    const end = start + limit - 1;
    
    query = query.range(start, end);
    
    // Execute query
    const { data: stores, error, count } = await query;
    
    if (error) throw error;
    
    // Get hours and features for each store
    const storesWithDetails = await Promise.all(
      stores.map(async (store) => {
        const { data: hours } = await supabase
          .from('store_hours')
          .select('*')
          .eq('store_id', store.id);
          
        const { data: features } = await supabase
          .from('store_features')
          .select('feature')
          .eq('store_id', store.id);
          
        return {
          id: store.id,
          name: store.name,
          address: store.address,
          city: store.city,
          state: store.state,
          zipCode: store.zip_code,
          country: store.country,
          phone: store.phone,
          hours: hours?.map(h => ({
            day: h.day,
            open: h.open_time,
            close: h.close_time
          })) || [],
          features: features?.map(f => f.feature) || [],
          latitude: store.latitude,
          longitude: store.longitude,
          image: store.image
        };
      })
    );
    
    return {
      stores: storesWithDetails,
      totalStores: count || storesWithDetails.length,
      totalPages: Math.ceil((count || storesWithDetails.length) / limit)
    };
  } catch (error) {
    console.error("Error searching stores:", error);
    throw error;
  }
};

export const getStoreById = async (storeId: string): Promise<Store> => {
  try {
    const { data: store, error } = await supabase
      .from('stores')
      .select('*')
      .eq('id', storeId)
      .single();
      
    if (error) throw error;
    if (!store) throw new Error("Store not found");
    
    // Get hours
    const { data: hours } = await supabase
      .from('store_hours')
      .select('*')
      .eq('store_id', storeId);
      
    // Get features
    const { data: features } = await supabase
      .from('store_features')
      .select('feature')
      .eq('store_id', storeId);
      
    return {
      id: store.id,
      name: store.name,
      address: store.address,
      city: store.city,
      state: store.state,
      zipCode: store.zip_code,
      country: store.country,
      phone: store.phone,
      hours: hours?.map(h => ({
        day: h.day,
        open: h.open_time,
        close: h.close_time
      })) || [],
      features: features?.map(f => f.feature) || [],
      latitude: store.latitude,
      longitude: store.longitude,
      image: store.image
    };
  } catch (error) {
    console.error("Error getting store by ID:", error);
    throw error;
  }
};

export const getNearbyStores = async (
  latitude: number,
  longitude: number,
  radius: number = 10
): Promise<Store[]> => {
  try {
    // This is a simplified version since Supabase doesn't have native geospatial queries
    // In a real app, you might use PostGIS extensions or other solutions
    const { data: stores, error } = await supabase
      .from('stores')
      .select('*');
      
    if (error) throw error;
    
    // Calculate distance (simple approximation)
    const storesWithDistance = stores.map(store => {
      const distance = Math.sqrt(
        Math.pow((store.latitude - latitude) * 69.1, 2) + 
        Math.pow((store.longitude - longitude) * 69.1 * Math.cos(latitude / 57.3), 2)
      );
      return { ...store, distance };
    });
    
    // Filter by radius and sort by distance
    const nearbyStores = storesWithDistance
      .filter(store => store.distance <= radius)
      .sort((a, b) => a.distance - b.distance);
      
    // Get details for each store
    const storesWithDetails = await Promise.all(
      nearbyStores.map(async (store) => {
        const { data: hours } = await supabase
          .from('store_hours')
          .select('*')
          .eq('store_id', store.id);
          
        const { data: features } = await supabase
          .from('store_features')
          .select('feature')
          .eq('store_id', store.id);
          
        return {
          id: store.id,
          name: store.name,
          address: store.address,
          city: store.city,
          state: store.state,
          zipCode: store.zip_code,
          country: store.country,
          phone: store.phone,
          hours: hours?.map(h => ({
            day: h.day,
            open: h.open_time,
            close: h.close_time
          })) || [],
          features: features?.map(f => f.feature) || [],
          latitude: store.latitude,
          longitude: store.longitude,
          image: store.image
        };
      })
    );
    
    return storesWithDetails;
  } catch (error) {
    console.error("Error getting nearby stores:", error);
    throw error;
  }
};

// Add favorite store
export const addFavoriteStore = async (storeId: string): Promise<void> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");
    
    const { error } = await supabase
      .from('user_favorites')
      .insert([{ user_id: user.id, store_id: storeId }]);
      
    if (error) throw error;
  } catch (error) {
    console.error("Error adding favorite store:", error);
    throw error;
  }
};

// Remove favorite store
export const removeFavoriteStore = async (storeId: string): Promise<void> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");
    
    const { error } = await supabase
      .from('user_favorites')
      .delete()
      .eq('user_id', user.id)
      .eq('store_id', storeId);
      
    if (error) throw error;
  } catch (error) {
    console.error("Error removing favorite store:", error);
    throw error;
  }
};

// Get user's favorite stores
export const getFavoriteStores = async (): Promise<string[]> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];
    
    const { data, error } = await supabase
      .from('user_favorites')
      .select('store_id')
      .eq('user_id', user.id);
      
    if (error) throw error;
    
    return data.map(item => item.store_id);
  } catch (error) {
    console.error("Error getting favorite stores:", error);
    return [];
  }
};
