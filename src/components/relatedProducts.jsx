import { Link } from 'react-router-dom';
import ProductCard from './AbaProdutos/productCardList'; 

const RelatedProducts = ({ currentProduct, allProducts }) => {
  const related = allProducts.filter(p => 
    p.category === currentProduct.category && p.id !== currentProduct.id
  ).slice(0, 4); 

  if (related.length === 0) return null;

  return (
    <section className="mt-16 lg:mt-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Produtos Relacionados</h2>
        <Link to={`/produtos?categoria=${currentProduct.category}`} className="text-pink-600 font-semibold hover:underline">
          Ver todos →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map(product => (
          <ProductCard 
            key={product.id} 
            id={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            priceDiscount={product.priceDiscount}
            fullProduct={product} 
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
