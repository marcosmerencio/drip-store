import { useState } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import AuthLinks from './authLinks';
import MainNav from './mainNave';
import CartIcon from './cartIcon';
import CartDropdown from './cartDropDown';
import { Menu, Search, X } from 'lucide-react';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleCart = () => setIsCartOpen(prev => !prev);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleToggleMobileSearch = () => setIsMobileSearchOpen(prev => !prev);
  const handleToggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative w-full border-b border-gray-200 bg-white px-4 md:px-6 py-4 flex flex-col gap-4">
      
      {/* --- LINHA PRINCIPAL --- */}
      <div className="flex items-center justify-between w-full">
        
        {/* ESQUERDA: Menu (Mobile) / Logo (Desktop) */}
        <div className="flex items-center flex-shrink-0">
          <button 
            className="md:hidden p-1 text-gray-700"
            onClick={handleToggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>

        {/* CENTRO: Logo (Mobile) / SearchBar (Desktop) */}
        <div className="flex-grow flex justify-center items-center">
          {/* Logo centralizada no mobile */}
          <div className="md:hidden scale-90">
            <Logo />
          </div>

          {/* SearchBar Desktop */}
          <div className="hidden md:block w-full mx-4 lg:mx-8">
            <SearchBar />
          </div>
        </div>

        {/* DIREITA: Actions (Auth, Lupa Mobile e Carrinho) */}
        <div className="flex items-center justify-end gap-2 md:gap-4 lg:gap-6 flex-shrink-0">
          {/* Busca Mobile - Lupa muda de cor quando ativa */}
          <button 
            className={`md:hidden p-1 transition group relative ${isMobileSearchOpen ? 'text-primary' : 'text-gray-700'}`}
            onClick={handleToggleMobileSearch}
            title="Pesquisar"
          >
            <Search size={22} />
            {/* Tooltip Desktop (não aparece em mobile) */}
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
              Pesquisar
            </span>
          </button>

          <div className="hidden md:block whitespace-nowrap">
            <AuthLinks />
          </div>

          <CartIcon onToggle={handleToggleCart} />
        </div>
      </div>
      
      {/* CAMPO DE BUSCA MOBILE */}
      <div className={`${isMobileSearchOpen ? 'block' : 'hidden'} md:hidden w-full transition-all`}>
        <SearchBar />
      </div>

      {/* --- LINHA DA NAVEGAÇÃO: APENAS DESKTOP --- */}
      <nav className="hidden md:flex justify-start w-full">
        <MainNav isMobile={false} />
      </nav>

      {/* SIDEBAR MOBILE */}
      <>
        {/* OVERLAY/BACKDROP */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black z-40 md:hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            onClick={handleCloseMobileMenu}
          />
        )}
        
        {/* SIDEBAR */}
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* HEADER DO SIDEBAR */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="scale-85">
              <Logo />
            </div>
            <button 
              onClick={handleCloseMobileMenu}
              className="p-1 text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* NAVIGAÇÃO MÓVEL */}
          <nav className="flex flex-col px-4 pt-3">
            <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Páginas</h3>
            <MainNav isMobile={true} onNavigate={handleCloseMobileMenu} />
          </nav>

          {/* DIVIDER */}
          <div className="border-t border-gray-200 my-3 mx-4"></div>

          {/* AUTH LINKS NO MOBILE */}
          <div className="px-4 py-3">
            <AuthLinks isMobile={true} onNavigate={handleCloseMobileMenu} />
          </div>
        </div>
      </>

      <CartDropdown isOpen={isCartOpen} onClose={handleCloseCart} />
    </header>
  );
};

export default Header;