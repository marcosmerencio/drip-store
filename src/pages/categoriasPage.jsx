import { useNavigate } from 'react-router-dom';

const categorias = [
  {
    nome: 'Camisetas',
    imagem: 'https://images.mont.ink/mockups/51173/Marrom_3697018.png',
  },
  {
    nome: 'Calças',
    imagem: 'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-calca-cargo-jeans-fire-apparel-design-azul-2350.jpg',
  },
  {
    nome: 'Bonés',
    imagem: 'https://images.tcdn.com.br/img/img_prod/1150285/bone_mst_281_1_b909645315b840b62fd488ca0dbafe07.jpg',
  },
  {
    nome: 'Tênis',
    imagem: 'https://images.tcdn.com.br/img/img_prod/1188746/tenis_converse_all_star_amarelo_13_2_2258f75d65c88dfdde8ca197da06720d.jpg',
  },
  {
    nome: 'Headphones',
    imagem: 'https://fastshopbr.vtexassets.com/arquivos/ids/498166/0-JBLLIVE770PTO-PRD-1500-1.jpg?v=638702103996270000',
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
