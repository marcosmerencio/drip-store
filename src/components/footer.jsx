import LogoFooter from '../assets/logo-footer.svg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <img src={LogoFooter} alt="Drip Store Logo" className="h-8 mb-4" />
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="text-white hover:text-pink-600 cursor-pointer" />
            <FaInstagram className="text-white hover:text-pink-600 cursor-pointer" />
            <FaTwitter className="text-white hover:text-pink-600 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Sobre Drip Store</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Meus Pedidos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Camisetas</a></li>
            <li><a href="#">Calças</a></li>
            <li><a href="#">Bonés</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Tênis</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-sm text-gray-400 mt-2">(85) 3051-3411</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2022 Digital College
      </div>
    </footer>
  );
};

export default Footer;
