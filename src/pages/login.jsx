import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaMicrosoft } from 'react-icons/fa';
import { api, setAuthToken } from '../services/api'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/usuario/token', {
        email,
        password 
      });

      const token = response.data.token;

      // 1. Salva o token no localStorage para persistir a sessão
      localStorage.setItem('authToken', token);

      // 2. Configura o token na instância do Axios para as próximas requisições
      setAuthToken(token);

      alert("Login realizado com sucesso!");
      navigate('/'); // Redireciona para a página inicial após o login

    } catch (error) {
      console.error("Erro no login:", error);

      // Pega a mensagem de erro específica do backend, se existir
      const errorMessage = error.response?.data?.error || "Email ou senha incorretos. Tente novamente.";
      alert(errorMessage);
    }
  };

  return (
    <div className="bg-violet-50 w-full flex items-center justify-center min-h-[calc(100vh-150px)] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Acesse sua conta
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Novo cliente? Então registre-se{' '}
                <Link to="/register" className="font-semibold text-pink-600 hover:underline">
                  aqui
                </Link>
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Login *
                </label>
                <input
                  id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-2.5 bg-gray-100 border-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm"
                  placeholder="Insira seu login ou email"
                />
              </div>

              <div className="relative">
                <label htmlFor="password"  className="block text-sm font-medium text-gray-700 mb-1">
                  Senha *
                </label>
                <input
                  id="password" type={showPassword ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} // ALTERADO: usa o estado 'password'
                  className="block w-full px-3 py-2.5 bg-gray-100 border-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm"
                  placeholder="Insira sua senha"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-gray-500 hover:text-gray-700">
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <div className="text-right text-sm">
                <a href="#" className="font-medium text-pink-600 hover:underline">
                  Esqueci minha senha
                </a>
              </div>

              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  Acessar Conta
                </button>
              </div>

              <div className="relative pt-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
                <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-gray-500">Ou faça login com</span></div>
              </div>
              
              <div className="flex justify-center gap-4">
                <button type="button" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"><FcGoogle size={20} /></button>
                <button type="button" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"><FaFacebook size={20} className="text-blue-600" /></button>
                <button type="button" className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"><FaMicrosoft size={20} className="text-sky-500" /></button>
              </div>
            </form>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <img 
              src="/tenis-login-2.PNG"  
              alt="Tênis decorativo" 
              className="max-w-lg w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
