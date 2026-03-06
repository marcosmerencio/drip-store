import { useContext } from "react";
import { useCart } from "../contexts/cartContext";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  product, 
  children,
}) => {
  const { addToCart } = useContext(useCart);

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{name}</h1>
      <p className="text-sm text-gray-400">{reference}</p>
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 font-medium">{stars} ★</span>
        <span className="text-sm text-gray-400">({rating} avaliações)</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-gray-800">
          R${priceDiscount ? priceDiscount.toFixed(2) : price.toFixed(2)}
        </span>
        {priceDiscount && (
          <span className="text-sm line-through text-gray-400">R${price.toFixed(2)}</span>
        )}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      {children}

      <button
        onClick={handleAddToCart}
        className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 mt-4 rounded-xl text-base font-medium transition"
      >
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;
