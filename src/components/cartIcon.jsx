import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/cartContext';

const CartIcon = ({ onToggle }) => {
  const { cartItems } = useCart();

  const handleClick = (event) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <button className={`relative group transition ${cartItems.length > 0 ? 'text-primary' : 'text-gray-700'}`} onClick={handleClick} title="Meu carrinho">
      <FiShoppingCart className="text-2xl hover:text-pink-600 transition-colors" />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
      {/* Tooltip Desktop */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
        Meu carrinho
      </span>
    </button>
  );
};

export default CartIcon;