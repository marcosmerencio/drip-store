import { useNavigate } from 'react-router-dom';

const categorias = [
  {
    nome: 'Camisetas',
    imagem: '/camisa_categoria.jpg',
  },
  {
    nome: 'Calças',
    imagem: '/calca_categoria.jpg',
  },
  {
    nome: 'Bonés',
    imagem: '/bone_categoria.jpg',
  },
  {
    nome: 'Tênis',
    imagem: '/tenis_categoria.jpg',
  },
  {
    nome: 'Headphones',
    imagem: '/headphone_categoria.jpg',
  },
];

const CategoriasPage = () => {
  const navigate = useNavigate();

  const handleClick = (categoria) => {
    navigate(`/produtos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <div className="min-h-screen bg-purple-100 py-16 px-4 sm:px-6 md:px-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-600 mb-2 tracking-wide">
        Categorias:
      </h1>
      <div className="h-1 w-24 bg-pink-600 mx-auto rounded-full mb-12"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {categorias.map((cat) => (
          <div
            key={cat.nome}
            onClick={() => handleClick(cat.nome)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col"
          >
            <img
              src={cat.imagem}
              alt={cat.nome}
              className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-t-2xl"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                {cat.nome}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriasPage;
