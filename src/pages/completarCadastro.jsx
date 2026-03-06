import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InputField = ({ label, id, type = 'text', value, onChange, placeholder, required = true, disabled = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} {required && '*'}
    </label>
    <input
      type={type} id={id} name={id} value={value} onChange={onChange} placeholder={placeholder}
      required={required} disabled={disabled}
      className={`mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
    />
  </div>
);

const CompletarCadastro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state || {};

  const [formData, setFormData] = useState({
    nome: initialData.nome || '',
    email: initialData.email || '',
    cpf: '',
    celular: '',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    complemento: '',
    password: '', 
    receberEmails: true,
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados completos para envio:', formData);
    alert('Cadastro concluído com sucesso!');
    navigate('/');
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Criar Conta</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Informações Pessoais</h2>
            <InputField label="Nome Completo" id="nome" value={formData.nome} onChange={handleChange} disabled />
            {/* MUDANÇA 4: CPF agora é opcional (required={false}) */}
            <InputField label="CPF" id="cpf" value={formData.cpf} onChange={handleChange} placeholder="Insira seu CPF (opcional)" required={false} />
            <InputField label="E-mail" id="email" type="email" value={formData.email} onChange={handleChange} disabled />
            <InputField label="Celular" id="celular" type="tel" value={formData.celular} onChange={handleChange} placeholder="Insira seu celular" />
          </div>

          {/* MUDANÇA 5: Adicionada seção de senha para conferência/edição */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Segurança</h2>
            <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha *</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password" name="password" value={formData.password} onChange={handleChange}
                    placeholder="Confirme ou altere sua senha" required
                    className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
                <button
                    type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label="Mostrar ou ocultar senha">
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">Informações de Entrega</h2>
            <InputField label="Endereço" id="endereco" value={formData.endereco} onChange={handleChange} placeholder="Insira seu endereço" />
            <InputField label="Bairro" id="bairro" value={formData.bairro} onChange={handleChange} placeholder="Insira seu bairro" />
            <InputField label="Cidade" id="cidade" value={formData.cidade} onChange={handleChange} placeholder="Insira sua cidade" />
            <InputField label="CEP" id="cep" value={formData.cep} onChange={handleChange} placeholder="Insira seu CEP" />
            <InputField label="Complemento" id="complemento" value={formData.complemento} onChange={handleChange} placeholder="Apto, bloco, etc." required={false} />
          </div>

          <div className="pt-4">
            <label className="flex items-center">
              <input type="checkbox" name="receberEmails" checked={formData.receberEmails} onChange={handleChange} className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500" />
              <span className="ml-2 text-sm text-gray-600">Quero receber por email ofertas e novidades das lojas da Digital Store.</span>
            </label>
          </div>

          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-md transition-colors">
            Finalizar Cadastro
          </button>

        </form>
      </div>
    </div>
  );
};

export default CompletarCadastro;
