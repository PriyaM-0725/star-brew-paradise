
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product, useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/format";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <Card className="menu-card overflow-hidden h-full flex flex-col hover-lift animate-scale-up">
      <div className="relative overflow-hidden">
        <AspectRatio ratio={1 / 1} className="bg-gray-50">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-10 h-10 border-4 border-starbucks-green border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
        </AspectRatio>
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-semibold text-lg">{product.name}</h3>
          <span className="font-medium text-starbucks-green">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="text-sm text-gray-500 font-body">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full bg-starbucks-green hover:bg-starbucks-darkGreen btn-hover-expand"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
