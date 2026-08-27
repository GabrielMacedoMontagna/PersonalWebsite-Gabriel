# Personal Website

Site pessoal e portfólio profissional moderno e performático, desenvolvido com **SvelteKit**, **TypeScript**, **Vite** e **adapter-static**.

## 🚀 Como Rodar Localmente

Certifique-se de ter o **Node.js (v20+)** instalado.

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:5173`

3. **Verificar tipagem do TypeScript / Svelte**:
   ```bash
   npm run check
   ```

4. **Gerar build estático para produção**:
   ```bash
   npm run build
   ```
   Os arquivos finais prontos para deploy serão gerados na pasta `build/`.

---

## ✏️ Como Personalizar Seus Dados (Placeholders)

Toda a lógica e os componentes estão 100% desacoplados do conteúdo textual. Para personalizar o site com suas informações reais, basta editar:

* 🇧🇷 **Português:** [`src/lib/data/pt.ts`](./src/lib/data/pt.ts)
* 🇺🇸 **Inglês:** [`src/lib/data/en.ts`](./src/lib/data/en.ts)

### O que você pode alterar:
* **`profile`**: Seu nome, cargo, e-mail de contato, cidade/país, resumo e links para redes sociais (LinkedIn, GitHub, Twitter).
* **`hero`**: Chamadas principais, status profissional e resumo de tecnologias.
* **`about`**: Parágrafos de biografia, cards de destaques e categorias de tecnologias/habilidades.
* **`experience`**: Histórico de empresas, cargos, períodos, descrições e tags de tecnologias utilizadas.
* **`projects`**: Título dos projetos, descrições, tags de stack e links externos (repositório / demonstração ao vivo).
* **`contact`**: Textos de encorajamento e e-mail para contato.
* **`seo`**: Título da aba do navegador, descrição e tags para redes sociais (OpenGraph/Twitter).

---

## 🖼️ Imagens e Mídias

Para adicionar suas próprias imagens:
* Coloque seus arquivos dentro da pasta `static/images/`.
* Exemplo: substitua `static/images/hero-placeholder.svg` pela sua foto e atualize o caminho em `src/lib/data/pt.ts` e `src/lib/data/en.ts`.

---

## 🌐 Deploy Estático

O projeto utiliza `@sveltejs/adapter-static`, gerando HTML/CSS/JS puros e ultrarrápidos. Você pode hospedar gratuitamente ou com baixíssimo custo em:
* **AWS S3 + CloudFront**
* **Cloudflare Pages**
* **GitHub Pages**
* **Vercel / Netlify**
