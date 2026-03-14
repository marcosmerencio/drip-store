# ⚡ Drip Store

![Status](https://img.shields.io/badge/status-complete-success) ![Stack](https://img.shields.io/badge/stack-React%2FVite-orange) ![Deploy](https://img.shields.io/badge/deploy-Vercel-blue)

c:\Users\HP\Pictures\topo-site-drip-store.png

## 🔖 Visão geral
Drip Store é um e-commerce de streetwear construído com **React 19**, **Vite** e **Tailwind CSS**. O projeto une landing page promocional, catálogo premium, visualização detalhada, carrinho persistente e um fluxo completo de login/cadastro em um layout com `Header`, `Footer`, `CartDropdown` e estado centralizado em `CartContext`.

## 🗺️ Links importantes
- 🌐 GitHub: `https://github.com/marcosmerencio/drip-store`
- 🚀 Deploy (Vercel): `https://drip-store-xi.vercel.app/`

## ✨ Funcionalidades principais
- 🏡 **Home (Hero + Coleções)**: hero com CTA, coleções com selo “30% OFF”, categorias com ícones e grade de produtos filtráveis (`useMemo`) renderizados via `ProductListing` + `ProductCard`.
- 🧭 **Catálogo `/produtos`**: filtros por marca, categoria, gênero e estado, ordenação por preço e listagem responsiva com `ProductListingList`.
- 📦 **Produto `/produto/:id`**: breadcrumbs, galeria (`ImageGallery`), ficha (`ProductInfo`), opções (`ProductOptions`) e sugestões (`RelatedProducts`).
- 🛒 **Carrinho / Pedidos**: `CartContext` sincroniza `cartItems` com `localStorage`, dropdown resume o carrinho e `/pedidos` exibe itens, total com 30% de desconto e modais de pagamento (Pix/cartão/dinheiro).
- 👤 **Autenticação simulada**: telas `/login`, `/register`, `/completar-cadastro` utilizam `axios` (`services/api.js`) para obter token e manter cabeçalho `Authorization`.
- 🔄 **Roteamento & estado**: React Router define Layouts e rotas aninhadas; hooks (`useState`, `useMemo`, `useNavigate`) garantem responsividade e performance.

## 🧰 Stack técnico
- ⚛️ React 19 + React Router 7 com rotas aninhadas e layout em `App.jsx` / `pages/layout.jsx`.
- ⚡ Vite como bundler, dev server e preview.
- 🎨 Tailwind CSS 4.2 (plugin oficial) com tokens `primary` e `dark-gray-2` e fonte `Inter`.
- 🛰️ Axios central (`src/services/api.js`) com helper `setAuthToken` para anexar token JWT.
- 🪄 React Icons em categorias, botões e inputs visuais.
- 📦 ESLint (`@eslint/js`, plugins de hooks e react-refresh) e scripts `dev`, `build`, `preview`, `lint`.
- 💾 `localStorage` persiste `cartItems` e `authToken` entre sessões.

## 🏗️ Estrutura de pastas (conteúdo real e função)

### 📁 `public/`
- `collection-1.png` / `collection-2.png` / `collection-3.png`: banners usados na sessão de coleções da home.
- `home-slide-1.jpeg` até `home-slide-8.jpeg`: imagens do carrossel promocional da home.
- `produc-image-1.jpeg` ... `produc-image-5.jpeg` e `product-thumb-*.jpeg`: fotos de produtos para cards e vistas rápidas.
- `icon-logo.svg`, `vite.svg`, `tenis-login-2.PNG`, `reebook.PNG`: ícones fixos, logotipo e ilustrações que complementam o layout.

### 📁 `src/assets/`
- Imagens de marcas (`adidas.png`, `jordan.png`, `puma.png`), sneakers (`White-Sneakers-PNG.png`), e elementos visuais (`dots.png`, `fire.png`).
- SVGs de redes sociais (`facebook.svg`, `instagram.svg`, `twitter.svg`), setas (`arrow-left.svg`, `arrow-right.svg`), mini-cart (`mini-cart.svg`) e logos (`logo-header.svg`, `logo-footer.svg`). Usadas ao longo de header, footer, hero e seções promocionais.

### 📁 `src/components/`
- Componentes de layout e navegação: `Header.jsx`, `Footer.jsx`, `Logo.jsx`, `MainNave.jsx`, `SearchBar.jsx`, `authLinks.jsx`, `FilterGroup.jsx`.
- Carrinho e CTAs: `CartIcon.jsx`, `CartDropdown.jsx`, `BuyBox.jsx`, `ProductInfo.jsx`, `ProductOptions.jsx`, `RelatedProducts.jsx`, `Section.jsx` e `Hero.jsx`.
- Galerias e listagens: `Gallery.jsx`, `imageGallery.jsx`, `productListing.jsx`, `productCard.jsx` (HomePage) e `productListingList.jsx`, `productCardList.jsx` (AbaProdutos). Esses componentes recebem dados de `products.js` para montar grids e cards interativos.

### 📁 `src/contexts/`
- `cartContext.jsx`: provedor que expõe `cartItems`, `addToCart`, `removeFromCart`, `toggleCartItem`, `clearCart` e sincroniza automaticamente com `localStorage` para manter o estado do checkout.

### 📁 `src/data/`
- `products.js`: catálogo mock com 12 itens (nome, imagens, cores, tamanhos, marca, categoria, preços e produtos relacionados). Alimenta páginas de listagem e detalhe.

### 📁 `src/pages/`
- `homePage.jsx`: combina hero, coleções, filtros de categorias com ícones e listagem filtrada por `ProductListing`.
- `productPage.jsx`: exibe filtros por marca, categoria, gênero e condição, além de ordenação e botões CTA para o carrinho.
- `productViewPage.jsx`: mostra breadcrumbs, galeria `ImageGallery`, `ProductInfo`, `ProductOptions`, `RelatedProducts` e botão “Adicionar ao carrinho”.
- `productListingPage.jsx`: alternativa para renderizar a lista completa (usado como referência futura).
- `categoriasPage.jsx`: página dedicada a categorias (estrutura pronta para mapas e filtros visuais).
- `meusPedidosPage.jsx`: lista o carrinho, calcula total com 30% OFF, permite exclusão com modal e simula pagamentos (Pix, cartão, dinheiro).
- `login.jsx`, `cadastro.jsx`, `completarCadastro.jsx`: formulários de autenticação com toggles de visualização de senha e navegação entre etapas.
- `layout.jsx`: container comum com `Header`, `Footer` e `<Outlet />`.

### 📁 `src/services/`
- `api.js`: cria instância `axios` com `baseURL` (`http://localhost:3001/v1`), define `setAuthToken` para atualizar cabeçalhos e lê `authToken` do `localStorage` ao carregar.

### 📁 `src/`
- `App.jsx`: registra rotas (`/`, `/produtos`, `/produto/:id`, `/categorias`, `/pedidos`, `/login`, `/register`, `/completar-cadastro`) e envolve tudo com `Layout`.
- `main.jsx`: monta a aplicação com `ReactDOM`, `BrowserRouter`, `CartProvider` e aplica `index.css`.
- `App.css`, `index.css`: estilos globais e normalize (importados em `main.jsx`).

### 🖼️ Estrutura visual (baseada na imagem fornecida)
```
.
├── index.html
├── README.md
├── public/
│   ├── collection-1.png
│   ├── collection-2.png
│   ├── collection-3.png
│   ├── home-slide-1.jpeg
│   ├── home-slide-2.jpeg
│   ├── home-slide-3.jpeg
│   ├── home-slide-4.jpeg
│   ├── home-slide-5.jpeg
│   ├── home-slide-6.jpeg
│   ├── home-slide-7.jpeg
│   ├── home-slide-8.jpeg
│   ├── produc-image-1.jpeg
│   ├── produc-image-2.jpeg
│   ├── produc-image-3.jpeg
│   ├── produc-image-4.jpeg
│   ├── produc-image-5.jpeg
│   ├── product-thumb-1.jpeg
│   ├── product-thumb-2.jpeg
│   ├── product-thumb-3.jpeg
│   ├── product-thumb-4.jpeg
│   ├── product-thumb-5.jpeg
│   ├── icon-logo.svg
│   ├── vite.svg
│   ├── tenis-login-2.PNG
│   ├── reebook.PNG
│   └── collection assets (various icons)
└── src/
    ├── assets/
    ├── components/
    │   ├── AbaProdutos/
    │   │   ├── productCardList.jsx
    │   │   └── productListingList.jsx
    │   ├── HomePage/
    │   │   ├── productCard.jsx
    │   │   └── productListing.jsx
    │   ├── authLinks.jsx
    │   ├── buyBox.jsx
    │   ├── cartDropDown.jsx
    │   ├── cartIcon.jsx
    │   ├── filterGroup.jsx
    │   ├── footer.jsx
    │   ├── gallery.jsx
    │   ├── header.jsx
    │   ├── hero.jsx
    │   ├── imageGallery.jsx
    │   ├── logo.jsx
    │   ├── mainNave.jsx
    │   ├── productInfo.jsx
    │   ├── productOptions.jsx
    │   ├── relatedProducts.jsx
    │   ├── section.jsx
    │   └── searchBar.jsx
    ├── contexts/
    │   └── cartContext.jsx
    ├── data/
    │   └── products.js
    ├── pages/
    │   ├── homePage.jsx
    │   ├── productPage.jsx
    │   ├── productViewPage.jsx
    │   ├── productListingPage.jsx
    │   ├── categoriasPage.jsx
    │   ├── meusPedidosPage.jsx
    │   ├── cadastro.jsx
    │   ├── completarCadastro.jsx
    │   ├── login.jsx
    │   └── layout.jsx
    ├── services/
    │   └── api.js
    ├── App.jsx
    ├── main.jsx
    ├── App.css
    └── index.css
```

### 📁 raíz
- `package.json`: scripts (`dev`, `build`, `preview`, `lint`) e dependências (`react`, `react-router-dom`, `tailwindcss`, `axios`, `react-icons`).
- `tailwind.config.js`, `postcss.config.js`, `vite.config.js`: configuração do Tailwind, PostCSS e Vite (plugins e paths).
- `eslint.config.js`: regras baseadas em `@eslint/js` com plugins para hooks e refresh.

## ⚙️ Como rodar localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/marcosmerencio/drip-store.git
   cd drip-store
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:5173` (adicione `-- --host` caso precise expor na rede).
4. Build e preview:
   ```bash
   npm run build
   npm run preview
   ```

## 📦 Scripts úteis
- `npm run dev` – servidor Vite com HMR.
- `npm run build` – empacota para produção.
- `npm run preview` – serve o build construído.
- `npm run lint` – valida o código com ESLint.

## 🌍 Deploy
- Produção: `https://drip-store-xi.vercel.app/`.
- Base pronta para Netlify, Railway, Firebase Hosting ou GitHub Pages (mesmos scripts de build).

## 🚀 Melhorias futuras
1. API real para produtos e autenticação (substituir `products.js` e conectar `services/api.js`).
2. Testes automatizados (componentes de carrinho, formulários e listagens).
3. Acessibilidade: foco, teclado, `aria-*` e `prefers-reduced-motion`.
4. Performance visual: lazy loading, placeholders e prefetch de imagens.
5. Tracking/analytics do fluxo de carrinho antes da integração financeira.

## 🙏 Agradecimentos
- A **Deus** que me deu a oportunidade de fazer esse curso de Desenvolvimento Fullstack, através da Geração Tech.
- Ao Prof. **Luan Oliveira** pelo acompanhamento contínuo durante todo o curso. Por sempre procurar nos ensinar de uma forma que pudéssemos realmente entender, usando uma didática leve, descontraída e super eficiente. 
- A monitora **Nazaré Almeida** pelas dúvidas respondidas, pelo sua disponibilidade e empenho em nos ajudar e incentivar a todo tempo, e pela sua orientação e acompanhemento no desenvolvimento desse projeto.

## 👤 Autor/Desenvolvedor do Projeto
- **Marcos Merencio** - Desenvolvedor Fullstatck (em formação)

## 🟢 Licença
- Licença livre (MIT/BSD like) – uso, cópia e distribuição permitidos, para estudos.

---
Leia `src/components/HomePage`, `src/data/products.js` e `src/contexts/cartContext.jsx` antes de contribuir para entender os motores principais da experiência.
