import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FiChevronRight } from 'react-icons/fi';

import ImageGallery from '../components/imageGallery';
import ProductInfo from '../components/productInfo';
import RelatedProducts from '../components/relatedProducts';

const Breadcrumbs = ({ product }) => (
  <nav className="flex items-center text-sm text-gray-500 mb-4">
    <Link to="/" className="hover:text-pink-600">Home</Link>
    <FiChevronRight className="mx-2" />
    <Link to={`/produtos?categoria=${product.category}`} className="hover:text-pink-600">
      {product.category} {/* Exibe a categoria real do produto */}
    </Link>
    <FiChevronRight className="mx-2" />
    <span className="font-semibold text-gray-700">{product.name}</span>
  </nav>
);

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-20 font-bold text-xl">Produto não encontrado.</div>;
  }

  const imageUrls = product.images ? product.images.map(img => img.src) : [product.image];

  // A estrutura principal da página permanece a mesma
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <Breadcrumbs product={product} />

        <main className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mt-6">
          <ImageGallery images={imageUrls} />
          <ProductInfo product={product} />
        </main>

        <RelatedProducts currentProduct={product} allProducts={products} />
      </div>
    </div>
  );
};

export default ProductViewPage;