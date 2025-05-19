
# StarBrew Coffee App

A coffee shop application built with React, TypeScript, and Supabase.

## Features
- Store locator with interactive map
- User authentication
- Favorite stores
- Product catalog
- Order history
- Gift cards

## Setup

### Frontend
1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the following variables:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
4. Run the development server with `npm run dev`

### Backend (Supabase)
1. Create a new Supabase project at https://supabase.com
2. Go to the SQL editor in your Supabase dashboard
3. Copy and paste the contents of `supabase-setup.sql` and run it
4. This will create all necessary tables and some sample data
5. Set up authentication in the Supabase dashboard under Authentication > Settings
   - Enable Email/Password sign-in
   - Configure any other auth providers you want to use

## Environment Variables
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Database Structure
The application uses the following tables in Supabase:
- `stores`: Store locations and basic information
- `store_hours`: Operating hours for each store
- `store_features`: Features available at each store (WiFi, parking, etc.)
- `users`: User profiles and reward points
- `products`: Product catalog
- `orders`: Order information
- `order_items`: Items in each order
- `user_favorites`: User's favorite stores

## Row Level Security
All tables have Row Level Security (RLS) policies configured to ensure data security:
- Public data (stores, products) can be read by anyone
- User data can only be accessed by the user who owns it

## Development
This project uses:
- React 18
- TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- Supabase for backend services

## Deployment
1. Build the production bundle with `npm run build`
2. Deploy using your preferred hosting service
3. Make sure to set the environment variables in your hosting platform
