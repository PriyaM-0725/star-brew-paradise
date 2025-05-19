
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Tables = {
  stores: {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
    phone: string;
    latitude: number;
    longitude: number;
    image: string;
    created_at: string;
  };
  store_hours: {
    id: string;
    store_id: string;
    day: string;
    open_time: string;
    close_time: string;
  };
  store_features: {
    id: string;
    store_id: string;
    feature: string;
  };
  users: {
    id: string;
    email: string;
    name: string;
    avatar_url: string | null;
    reward_points: number;
    created_at: string;
  };
  orders: {
    id: string;
    user_id: string;
    store_id: string;
    status: string;
    total: number;
    created_at: string;
  };
  order_items: {
    id: string;
    order_id: string;
    product_id: string;
    quantity: number;
    price: number;
  };
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    created_at: string;
  };
  user_favorites: {
    id: string;
    user_id: string;
    store_id: string;
    created_at: string;
  };
};
