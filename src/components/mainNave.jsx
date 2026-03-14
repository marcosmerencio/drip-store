import { NavLink } from 'react-router-dom';

const MainNav = ({ isMobile = false, onNavigate }) => {
  const getNavLinkClass = ({ isActive }) => {
    const baseClass = 'font-medium transition-colors duration-200';
    
    if (isMobile) {
      return `${baseClass} ${
        isActive
          ? 'text-primary border-l-4 border-primary pl-3'
          : 'text-dark-gray-2 hover:text-primary pl-3'
      } py-2 block w-full text-left text-base`;
    }
    
    return `${baseClass} text-base px-3 pb-2 flex-shrink-0 ${
      isActive
        ? 'border-b-2 border-primary text-primary'
        : 'text-dark-gray-2 hover:text-primary'
    }`;
  };

  const handleNavClick = () => {
    if (onNavigate && isMobile) {
      onNavigate();
    }
  };

  return (
    <nav className={isMobile ? 'flex flex-col' : 'flex gap-4 overflow-x-auto flex-nowrap md:justify-center'}>
      <NavLink to="/" className={getNavLinkClass} onClick={handleNavClick}>Home</NavLink>
      <NavLink to="/categorias" className={getNavLinkClass} onClick={handleNavClick}>Categorias</NavLink>
      <NavLink to="/produtos" className={getNavLinkClass} onClick={handleNavClick}>Produtos</NavLink>
      <NavLink to="/pedidos" className={getNavLinkClass} onClick={handleNavClick}>Meus Pedidos</NavLink>
    </nav>
  );
};

export default MainNav;