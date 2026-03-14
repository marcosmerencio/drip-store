import { Link } from 'react-router-dom';

const AuthLinks = ({ isMobile = false, onNavigate }) => {
  const handleLinkClick = () => {
    if (onNavigate && isMobile) {
      onNavigate();
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-row gap-3 w-full items-center justify-center">
        <Link
          to="/login"
          onClick={handleLinkClick}
          className="bg-primary flex-shrink-0 px-6 h-[40px] rounded-[4px] text-white font-bold text-[14px] 
          flex items-center justify-center hover:bg-pink-700 transition-colors"
        >
          Entrar
        </Link>
        <Link to="/register" onClick={handleLinkClick} className="text-[14px] text-primary hover:text-primary underline flex-shrink-0">
          Cadastre-se
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link to="/register" className="text-[14px] text-dark-gray-2 hover:text-primary underline">
        Cadastre-se
      </Link>
      <Link
        to="/login"
        className="bg-primary w-[114px] h-[40px] rounded-[4px] text-white font-bold text-[14px] 
        flex items-center justify-center hover:bg-pink-700 transition-colors"
      >
        Entrar
      </Link>
    </div>
  );
};

export default AuthLinks;
