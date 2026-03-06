import { useState } from 'react';
import Layout from './layout';
import Section from '../components/section';
import ProductListingList from '../components/AbaProdutos/productListingList';

const allProducts = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
    image: '/product-thumb-1.png',
    price: 200,
    priceDiscount: 149.9,
    category: 'cat1',
  },
  {
    id: 2,
    name: 'Tênis Urban',
    image: '/product-thumb-2.png',
    price: 99.9,
    category: 'cat2',
  },
  {
    id: 3,
    name: 'Tênis Branco',
    image: '/product-thumb-3.png',
    price: 150,
    category: 'cat1',
  },
];

const ProductListingPage = () => {
  const [order, setOrder] = useState('menor-preco');
  const [filters, setFilters] = useState([]);

  const categoryOptions = [
    { text: 'Categoria 1', value: 'cat1' },
    { text: 'Categoria 2', value: 'cat2' },
  ];

  const handleFilterChange = (value) => {
    if (filters.includes(value)) {
      setFilters(filters.filter(f => f !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  const filteredProducts = allProducts.filter(product => {
    if (filters.length === 0) return true;
    return filters.includes(product.category);
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (order === 'menor-preco') return a.price - b.price;
    if (order === 'maior-preco') return b.price - a.price;
    return 0;
  });

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-8 py-6 w-full">

        <aside className="w-full lg:w-[308px] flex-shrink-0">
          <label htmlFor="order-select" className="block mb-2 text-gray-700 text-sm">
            Ordenar por
          </label>
          <select
            id="order-select"
            className="w-full h-[48px] border border-gray-300 rounded px-3 text-gray-700"
            value={order}
            onChange={e => setOrder(e.target.value)}
          >
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>

          <div className="bg-white mt-6 p-4 border border-gray-200 rounded">
            <h3 className="text-gray-700 text-base font-medium mb-3 border-b pb-2">Filtrar por</h3>
            {categoryOptions.map(({ text, value }) => (
              <div key={value} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={value}
                  checked={filters.includes(value)}
                  onChange={() => handleFilterChange(value)}
                  className="w-5 h-5 accent-pink-600 mr-2"
                />
                <label htmlFor={value} className="text-gray-700 text-sm">{text}</label>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 w-full">
          <Section 
            title={`Total de produtos encontrados: ${sortedProducts.length}`} 
            titleAlign="left"
          >
            <ProductListingList products={sortedProducts} />
          </Section>
        </main>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
