import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Função para lidar com a mudança no input
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Se o campo estiver vazio, volta para a home
    if (value.trim() === '') {
      navigate('/');
    }
  };

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 border-transparent"
        placeholder="Buscar produtos..."
        value={search}
        onChange={handleChange} // Chamada para atualizar o estado a cada mudança
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600 transition group"
        aria-label="Buscar produtos"
        title="Pesquisar produtos"
      >
        <FiSearch className="text-lg" />
        {/* Tooltip Desktop */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
          Pesquisar produtos
        </span>
      </button>
    </div>
  );
};

export default SearchBar;