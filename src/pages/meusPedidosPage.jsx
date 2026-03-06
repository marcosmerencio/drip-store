import { useCart } from '../contexts/cartContext';
import { useState } from 'react';
import { FaQrcode, FaMoneyBillAlt, FaCreditCard } from 'react-icons/fa';

const MeusPedidosPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); 

  const handleDelete = () => {
    const productId = cartItems[itemToDelete]?.id;
    if (productId !== undefined) {
      removeFromCart(productId);
    }
    setItemToDelete(null);
  };

  const handleOverlayClick = (e, closeFunc) => {
    if (e.target === e.currentTarget) {
      closeFunc();
    }
  };

  const handleSimulatePayment = () => {
    setShowPaymentOptions(false);
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  const total = cartItems.reduce((sum, item) => {
    if (!item || typeof item.price !== 'number') return sum;
    return sum + item.price * 0.7; // com desconto de 30%
  }, 0);

  return (
    <div className="px-10 py-6 relative">

      {showSuccessAlert && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 animate-fade-in-out">
          ✅ Pedido realizado com sucesso!
        </div>
      )}

      <h1 className="text-2xl font-bold text-primary mb-4">Meus Pedidos</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={item?.id ?? index} className="border p-4 rounded shadow-sm bg-white flex justify-between items-center">
                <div>
                  <p className="font-medium">{item?.title || "Produto sem título"}</p>
                  <p className="text-sm text-gray-500">{item?.category || "Categoria desconhecida"}</p>
                  <span className="font-bold text-primary">
                    R${item?.price ? (item.price * 0.7).toFixed(2) : "0.00"}
                  </span>
                </div>
                <button
                  onClick={() => setItemToDelete(index)}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right text-lg font-semibold text-primary">
            Total: R$ {total.toFixed(2)}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setShowPaymentOptions(true)}
              className="px-6 py-3 bg-pink-700 text-white rounded hover:bg-pink-900"
            >
              Finalizar Pedido
            </button>
          </div>

          {itemToDelete !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={(e) => handleOverlayClick(e, () => setItemToDelete(null))}
            >
              <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center relative">
                <button
                  onClick={() => setItemToDelete(null)}
                  className="absolute top-2 right-3 text-gray-400 text-lg hover:text-gray-600"
                >
                  ×
                </button>
                <p className="mb-4 text-lg">Tem certeza que deseja excluir este item?</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => setItemToDelete(null)}
                    className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-200"
                  >
                    Não
                  </button>
                </div>
              </div>
            </div>
          )}

          {showPaymentOptions && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={(e) => handleOverlayClick(e, () => setShowPaymentOptions(false))}
            >
              <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center relative">
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className="absolute top-2 right-3 text-gray-400 text-lg hover:text-gray-600"
                >
                  ×
                </button>
                <h2 className="text-xl font-semibold mb-4">Escolha o método de pagamento:</h2>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleSimulatePayment}
                    className="flex items-center justify-center gap-2 bg-cyan-900 text-white px-4 py-2 rounded hover:bg-cyan-950"
                  >
                    <FaQrcode /> Pix
                  </button>
                  <button
                    onClick={handleSimulatePayment}
                    className="flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                  >
                    <FaCreditCard /> Cartão de Crédito
                  </button>
                  <button
                    onClick={handleSimulatePayment}
                    className="flex items-center justify-center gap-2 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-950"
                  >
                    <FaMoneyBillAlt /> Dinheiro
                  </button>
                </div>
                <button
                  onClick={() => setShowPaymentOptions(false)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MeusPedidosPage;