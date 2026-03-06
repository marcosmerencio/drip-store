import { useState } from 'react';
import { useCart } from '../contexts/cartContext';
import { FaStar } from 'react-icons/fa';

const ProductInfo = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const isProductInCart = isInCart(product.id);

  const formatPrice = (value) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const handleToggleCart = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      const itemToAdd = { ...product, size: selectedSize, color: selectedColor };
      addToCart(itemToAdd);
      alert(`${product.name} foi adicionado ao carrinho!`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* 
        TODA A PARTE SUPERIOR DO SEU COMPONENTE ESTÁ INTACTA, 
        COM OS SEUS AJUSTES DE ESTILO.
      */}
      <h1 className="text-xl lg:text-2xl font-bold text-gray-800">{product.name}</h1>
      <span className="text-sm text-gray-400 mt-2">Casual | {product.brand} | {product.reference}</span>
      <div className="flex items-center gap-3 my-3">
        <div className="flex items-center gap-1">
          <span className="text-gray-700 text-sm font-semibold">{product.stars.toFixed(1)}</span>
          <div className="flex text-yellow-300">
            {[...Array(5)].map((_, i) => <FaStar key={i} color={i < Math.round(product.stars) ? 'inherit' : '#e0e0e0'} />)}
          </div>
        </div>
        <span className="text-sm text-gray-500">({product.rating} avaliações)</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-pink-600">{formatPrice(product.priceDiscount)}</span>
        {product.priceDiscount < product.price && (
          <del className="text-lg text-gray-400">{formatPrice(product.price)}</del>
        )}
      </div>
      <p className="text-gray-600 leading-relaxed my-4">{product.description}</p>
      {product.sizes && product.sizes[0] !== "Único" && product.sizes[0] !== "N/A" && (
        <div className="mt-3">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Tamanho</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map(size => (
              <button key={size} onClick={() => setSelectedSize(size)}
                className={`w-11 h-11 flex items-center justify-center border rounded-md transition-all text-sm ${
                  selectedSize === size ? 'bg-pink-600 text-white border-pink-600 font-bold' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                }`}>
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
      {product.colors && (
        <div className="mt-3">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Cor</h3>
          <div className="flex flex-wrap gap-2">
            {product.colors.map(color => (
              <button key={color} onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-transform duration-150 transform ${
                  selectedColor === color ? 'border-pink-600 scale-110' : 'border-gray-400'
                }`}
                style={{ backgroundColor: color }} aria-label={`Cor ${color}`}
              />
            ))}
          </div>
        </div>
      )}

      <button 
        onClick={handleToggleCart}
        className={`w-72 font-bold py-2 rounded-lg mt-6 transition-colors shadow-md ${
          isProductInCart
            ? 'bg-yellow-600 text-white' // Se ESTÁ no carrinho: cor escura, sem efeito hover
            : 'bg-yellow-500 text-black hover:bg-yellow-600' // Se NÃO ESTÁ: cor clara COM o efeito hover
        }`}
      >
        {isProductInCart ? 'ADICIONADO AO CARRINHO' : 'ADICIONAR AO CARRINHO'}
      </button>

    </div>
  );
};

export default ProductInfo;