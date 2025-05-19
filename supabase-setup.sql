
-- Enable RLS
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- Create tables
CREATE TABLE IF NOT EXISTS stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'USA',
  phone TEXT,
  latitude FLOAT,
  longitude FLOAT,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS store_hours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  day TEXT NOT NULL,
  open_time TEXT NOT NULL,
  close_time TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS store_features (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  feature TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  reward_points INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price FLOAT NOT NULL,
  image TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  store_id UUID REFERENCES stores(id),
  status TEXT NOT NULL DEFAULT 'pending',
  total FLOAT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, store_id)
);

-- Create policies
-- Stores: everyone can view, only admins can edit
CREATE POLICY "Allow public read access to stores" ON stores
  FOR SELECT USING (true);

-- Store hours: everyone can view, only admins can edit
CREATE POLICY "Allow public read access to store hours" ON store_hours
  FOR SELECT USING (true);

-- Store features: everyone can view, only admins can edit
CREATE POLICY "Allow public read access to store features" ON store_features
  FOR SELECT USING (true);

-- Users: users can view and edit their own data
CREATE POLICY "Allow users to view their own data" ON users
  FOR SELECT USING (auth.uid() = id);
  
CREATE POLICY "Allow users to update their own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Products: everyone can view, only admins can edit
CREATE POLICY "Allow public read access to products" ON products
  FOR SELECT USING (true);

-- Orders: users can view and create their own orders
CREATE POLICY "Allow users to view their own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
  
CREATE POLICY "Allow users to create their own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Order items: users can view their own order items
CREATE POLICY "Allow users to view their own order items" ON order_items
  FOR SELECT USING (
    order_id IN (
      SELECT id FROM orders WHERE user_id = auth.uid()
    )
  );
  
CREATE POLICY "Allow users to create their own order items" ON order_items
  FOR INSERT WITH CHECK (
    order_id IN (
      SELECT id FROM orders WHERE user_id = auth.uid()
    )
  );

-- User favorites: users can view and manage their own favorites
CREATE POLICY "Allow users to view their own favorites" ON user_favorites
  FOR SELECT USING (auth.uid() = user_id);
  
CREATE POLICY "Allow users to create their own favorites" ON user_favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);
  
CREATE POLICY "Allow users to delete their own favorites" ON user_favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Insert sample data
INSERT INTO stores (name, address, city, state, zip_code, country, phone, latitude, longitude, image)
VALUES 
  ('StarBrew - Downtown', '123 Main St', 'Seattle', 'WA', '98101', 'USA', '(206) 555-1234', 47.6062, -122.3321, 'https://images.unsplash.com/photo-1500353391678-d7b57979d6d2'),
  ('StarBrew - University', '456 University Way', 'Seattle', 'WA', '98105', 'USA', '(206) 555-5678', 47.6553, -122.3035, 'https://images.unsplash.com/photo-1453614512568-c4024d13c247'),
  ('StarBrew - West Side', '789 Market St', 'Seattle', 'WA', '98107', 'USA', '(206) 555-9012', 47.6615, -122.3722, 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8');

-- Add store hours
INSERT INTO store_hours (store_id, day, open_time, close_time)
SELECT 
  id,
  day,
  CASE 
    WHEN day IN ('Saturday', 'Sunday') THEN '08:00'
    ELSE '06:00'
  END as open_time,
  CASE 
    WHEN day IN ('Friday', 'Saturday') THEN '23:00'
    ELSE '21:00'
  END as close_time
FROM 
  stores,
  unnest(ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']) as day;

-- Add store features
INSERT INTO store_features (store_id, feature)
SELECT
  id,
  feature
FROM
  stores,
  unnest(ARRAY['WiFi', 'Drive-Thru', 'Mobile Order', 'Rewards', 'Parking']) as feature;

-- Add some products
INSERT INTO products (name, description, price, category, image)
VALUES
  ('Caffè Latte', 'Rich espresso with steamed milk', 4.25, 'hot-coffees', 'https://images.unsplash.com/photo-1541167760496-1628856ab772'),
  ('Caffè Americano', 'Espresso shots topped with hot water', 3.75, 'hot-coffees', 'https://images.unsplash.com/photo-1580661869408-55ab7f1c949d'),
  ('Cappuccino', 'Espresso with steamed milk topped with foam', 4.75, 'hot-coffees', 'https://images.unsplash.com/photo-1572442388796-11668a67e53d'),
  ('Iced Coffee', 'Fresh brewed coffee served chilled', 3.95, 'cold-coffees', 'https://images.unsplash.com/photo-1517701604599-bb29b565090c'),
  ('Cold Brew', 'Slow-steeped, smooth and sweet', 4.45, 'cold-coffees', 'https://images.unsplash.com/photo-1542293787-a67e8ed28fb4'),
  ('Chocolate Croissant', 'Flaky croissant filled with chocolate', 3.75, 'bakery', 'https://images.unsplash.com/photo-1623334044303-241021148842');
