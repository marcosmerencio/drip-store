import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
