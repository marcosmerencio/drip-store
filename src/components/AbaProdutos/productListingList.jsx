import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/cartContext';

const ProductListingList = ({ products }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const formatPrice = (value) => {
    if (typeof value !== "number") return "R$ 0,00";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const hasDiscount = typeof product.priceDiscount === 'number' && product.priceDiscount < product.price;
        let discountPercentage = 0;
        if (hasDiscount) {
          discountPercentage = Math.round(((product.price - product.priceDiscount) / product.price) * 100);
        }

        const isInCart = cartItems.some((item) => item.id === product.id);

        const handleToggleCart = () => {
          if (isInCart) {
            removeFromCart(product.id);
          } else {
            addToCart(product);
          }
        };

        return (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between transition-shadow hover:shadow-xl"
          >
            <Link to={`/produto/${product.id}`} className="block relative">
              {hasDiscount && (
                <div className="absolute top-3 left-3 bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-md z-10">
                  {discountPercentage}% OFF
                </div>
              )}
              <div className="h-56 w-full flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </Link>
            
            <div className="p-2 flex flex-col flex-grow">
              <span className="text-xs text-gray-500">{product.category}</span>
              <h3 className="text-base font-semibold text-gray-800 mt-1 mb-1 flex-grow">{product.name}</h3>
              
              <div className="mb-2">
                {hasDiscount ? (
                  <div className="flex items-baseline gap-2">
                    <del className="text-sm text-gray-400">{formatPrice(product.price)}</del>
                    <strong className="text-lg font-bold text-gray-900">{formatPrice(product.priceDiscount)}</strong> 
                  </div>
                ) : (
                  <strong className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</strong>
                )}
              </div>
            </div>
            
            <div className="px-2 pb-2">
              {/* BOTÃO COM ALTURA REDUZIDA */}
              <button 
                onClick={handleToggleCart}
                className={`w-full font-semibold py-1.5 text-sm rounded-lg transition mb-2 ${ // MUDANÇA AQUI: py-2 para py-1.5
                  isInCart
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-pink-600 text-white hover:bg-pink-700'
                }`}
              >
                {isInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
              </button>
              {/* SEGUNDO BOTÃO COM ALTURA REDUZIDA */}
              <Link
                to={`/produto/${product.id}`}
                className="w-full block text-center bg-gray-200 text-gray-700 font-semibold py-1.5 text-sm rounded-lg hover:bg-gray-300 transition" // MUDANÇA AQUI: py-2 para py-1.5
              >
                Ver mais
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListingList;
