import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/cartContext';

const CartIcon = ({ onToggle }) => {
  const { cartItems } = useCart();

  const handleClick = (event) => {
    event.stopPropagation();
    onToggle();
  };

  return (
    <button className="relative" onClick={handleClick}>
      <FiShoppingCart className="text-2xl text-gray-700 hover:text-pink-600 transition-colors" />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </button>
  );
};

export default CartIcon;