import { Link } from "react-router-dom";
// MUDANÇA 1: Precisamos de mais funções do nosso contexto
import { useCart } from "../../contexts/cartContext";

const ProductCardList = ({ id, image, name, category, price, priceDiscount, fullProduct }) => {
  // MUDANÇA 2: Pegamos as funções 'addToCart', 'removeFromCart' e 'isInCart'
  const { addToCart, removeFromCart, isInCart } = useCart();

  // MUDANÇA 3: Verificamos se ESTE card de produto específico já está no carrinho
  const isProductInCart = isInCart(id);

  // A lógica de desconto e formatação de preço continua a mesma
  const hasDiscount = typeof priceDiscount === 'number' && priceDiscount < price;
  let discountPercentage = 0;
  if (hasDiscount) {
    discountPercentage = Math.round(((price - priceDiscount) / price) * 100);
  }

  // MUDANÇA 4: A função de clique agora decide se deve ADICIONAR ou REMOVER
  const handleToggleCart = () => {
    if (isProductInCart) {
      // Se já estiver no carrinho, remove
      removeFromCart(id);
    } else {
      // Se não estiver, adiciona
      addToCart(fullProduct);
    }
  };

  const formatPrice = (value) => {
    if (typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    // A estrutura principal do card permanece a mesma
    <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between transition-shadow hover:shadow-xl">
      <Link to={`/produto/${id}`} className="block relative">
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-md z-10">
            {discountPercentage}% OFF
          </div>
        )}
        <div className="h-56 w-full flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={`Imagem do produto ${name}`} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 mb-1">{category}</span>
        <h3 className="text-md font-semibold text-gray-800 mb-2 flex-grow">{name}</h3>

        <div className="mb-4">
          {hasDiscount ? (
            <div className="flex items-baseline gap-2">
              <del className="text-sm text-gray-400">{formatPrice(price)}</del>
              <strong className="text-lg font-bold text-pink-600">{formatPrice(priceDiscount)}</strong>
            </div>
          ) : (
            <strong className="text-lg font-bold text-gray-900">{formatPrice(price)}</strong>
          )}
        </div>
      </div>
      
      {/* MUDANÇA 5: O BOTÃO AGORA É DINÂMICO */}
      <div className="p-4 pt-0">
        <button 
          onClick={handleToggleCart} // Usa a nova função
          // As classes de estilo mudam com base no estado do carrinho
          className={`w-full text-white font-bold py-2 rounded-lg transition mb-2 ${
            isProductInCart
              ? 'bg-green-600 hover:bg-green-700' // Estilo VERDE quando está no carrinho
              : 'bg-pink-600 hover:bg-pink-700'   // Estilo ROSA quando não está
          }`}
        >
          {/* O texto do botão também muda */}
          {isProductInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
        </button>
        <Link
          to={`/produto/${id}`}
          className="w-full block text-center bg-gray-200 text-gray-800 font-bold py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProductCardList;