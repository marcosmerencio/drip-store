import { NavLink } from 'react-router-dom';

const MainNav = () => {
  const navLinkClass = ({ isActive }) =>
    `text-base px-3 pb-2 font-medium transition-colors duration-200 flex-shrink-0 ${ 
      isActive
        ? 'border-b-2 border-primary text-primary'
        : 'text-dark-gray-2 hover:text-primary'
    }`;

  return (
    <nav className="flex gap-4 overflow-x-auto flex-nowrap md:justify-center">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/categorias" className={navLinkClass}>Categorias</NavLink>
      <NavLink to="/produtos" className={navLinkClass}>Produtos</NavLink>
      <NavLink to="/pedidos" className={navLinkClass}>Meus Pedidos</NavLink>
    </nav>
  );
};

export default MainNav;