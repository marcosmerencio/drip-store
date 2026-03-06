import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleProximaEtapa = (e) => {
    e.preventDefault(); 
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    navigate('/completar-cadastro', { 
      state: { 
        nome: nome, 
        email: email 
      } 
    });
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Já possui uma conta?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-pink-500">
              Faça o login
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleProximaEtapa}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">Nome Completo</label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">E-mail</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Senha</label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Crie uma senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                aria-label="Mostrar ou ocultar senha"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
