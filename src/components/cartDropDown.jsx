import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/cartContext';

const CartDropdown = ({ isOpen, onClose }) => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalValue = cartItems.reduce((acc, item) => (acc + (item.priceDiscount || item.price)), 0);
  const formatPrice = (value) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

  const handleGoToCart = () => {
    navigate('/pedidos');
    onClose();
  }

  return (
    <div ref={dropdownRef} className="absolute top-full right-4 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4">Meu Carrinho</h3>
        {cartItems.length > 0 ? (
          <>
            <div className="max-h-60 overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center p-1">
                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold leading-tight">{item.name}</p>
                    <div className="flex items-baseline gap-2 text-sm">
                      <strong>{formatPrice(item.priceDiscount || item.price)}</strong>
                      {item.priceDiscount && <del className="text-gray-400">{formatPrice(item.price)}</del>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Valor total:</span>
                <span className="font-bold text-pink-600">{formatPrice(totalValue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <button onClick={clearCart} className="text-sm text-gray-500 hover:underline">Esvaziar</button>
                <button onClick={handleGoToCart} className="bg-pink-600 text-white font-semibold text-sm px-6 py-2 rounded-md hover:bg-pink-700">Ver Carrinho</button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center py-8">Seu carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
