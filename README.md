# 👟 Drip Store

<img width="1382" height="auto" alt="Drip Store Topo" src="topo-site-drip-store.png" />

## 📝 Descrição
Drip Store é um e-commerce de streetwear construído com React 19, Vite e Tailwind CSS, como trabalho de conclusão do curso de Desenvolvimento Fullstack da Geração Tech 3.0. Ele combina uma landing page promocional, catálogo filtrável, páginas de produto detalhadas, carrinho persistente e fluxo de autenticação, tudo amarrado por um layout composto por Header, Footer, CartDropdown e pelo CartContext, que concentra o estado de checkout.

## 🔗 Repositório e demonstração
- **GitHub:** https://github.com/marcosmerencio/drip-store

- **Deploy (Vercel):** https://drip-store-xi.vercel.app/


## 🚀 Funcionalidades principais
- **Home:** Com hero, coleções e categorias que exibem produtos filtrados via useMemo e renderizados pelos componentes ProductListing e ProductCard.

- **Catálogo:** Em /produtos com filtros por marca, categoria, gênero e condição, ordenação por preço e visualização em grade.

- **Páginas de produto:** (/produto/:id) com breadcrumbs, galeria (ImageGallery), ficha técnica (ProductInfo) e sugestões.

- **Carrinho e pedidos:** Com total descontado em 30%, resumo instantâneo no dropdown, modais de pagamento simulados e persistência via CartContext.

- **Autenticação simulada:** Nas rotas de login e registro, utilizando Axios para envio de headers de autorização.

- **Navegação:** Coordenada por React Router 7 com layouts aninhados e hooks para performance e responsividade.


## 🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando tecnologias modernas para garantir performance e escalabilidade:

- **React 19 + React Router 7:** Camada de componentes, estados e navegação com rotas aninhadas, incluindo o provedor CartContext.

- **Vite:** Bundler e servidor de desenvolvimento com HMR (Hot Module Replacement) para builds otimizados.

- **Tailwind CSS 4.2:** Framework utilitário utilizado com @tailwindcss/vite para estilização responsiva e design system.

- **Axios:** Cliente HTTP centralizado em src/services/api.js para comunicação com serviços e gerenciamento de tokens.

- **Lucide React + React Icons:** Biblioteca de ícones reutilizáveis para interfaces de filtros e menus.

- **LocalStorage:** Utilizado para a persistência de dados do carrinho (cartItems) e tokens de autenticação (authToken).

- **ESLint:** Regras e plugins para manter a padronização e segurança durante o desenvolvimento.


## 📂 Estrutura de Arquivos
A organização do projeto segue uma estrutura modular para facilitar a manutenção:

drip-store
├── public/             # Ativos estáticos (banners, slides, fotos, logotipos)
├── src/                # Código-fonte principal
│   ├── assets/         # Imagens de marcas e elementos visuais de UI
│   ├── components/     # Blocos reutilizáveis (carrinho, filtros, galerias, cards)
│   ├── contexts/       # Gerenciamento de estado global (cartContext.jsx)
│   ├── data/           # Mock de catálogo de produtos (products.js)
│   ├── pages/          # Páginas da aplicação e layouts compartilhados
│   └── services/       # Instância Axios e helper de autenticação (api.js)
├── index.html          # Ponto de entrada da aplicação
└── package.json        # Manifesto do projeto e dependências principais


## ⚙️ Como rodar localmente
- **Pré-requisitos:** Node.js 18+ e npm.

- **Clone o repositório:**

Bash
git clone https://github.com/marcosmerencio/drip-store.git
cd drip-store
- **Instale as dependências:**

Bash
npm install
- **Inicie o desenvolvimento:**

Bash
npm run dev


## 📈 Próximos passos sugeridos
- Conectar src/services/api.js a uma API real para produtos e autenticação.

- Adicionar testes automatizados para componentes críticos.

- Elevar acessibilidade (navegação por teclado, foco, aria-*).

- Otimizar performance visual com lazy loading e prefetch de imagens.


## 🙏 Agradecimentos
- A **Deus** pela oportunidade de participar do curso de Desenvolvimento Fullstack da Geração Tech 3.0.

Ao professor **Luan Oliveira** pela excelente didática e acompanhamento constante durante todo o curso.

À monitora **Nazaré Almeida** pela sua atenção, disponibilidade, orientação e incentivo durante o curso e no desenvolvimento desse projeto.


## ✒️ Autor
**Marcos Merencio** — Desenvolvedor Fullstack em formação.


## 📄 Licença
O uso, cópia e distribuição desse projeto são permitidos livremente para fins de estudo e aprendizagem.