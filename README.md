# Wingate Childcare Website

A modern, responsive React website for Wingate Childcare, built with **Vite + React**

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/originality2/wingate-website.git
cd wingate-website
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## 📦 Available Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the Vite development server        |
| `npm run build`      | Build for production (output to `dist/`) |
| `npm run preview`    | Preview the production build locally     |
| `npm run lint`       | Run ESLint                               |
| `npm run typecheck`  | Run TypeScript compile checks            |
| `npm test`           | Run the test suite once                  |
| `npm run test:watch` | Run tests in watch mode                  |

---

## 🧪 Testing

```bash
npm test
```

---

## 🛠️ Tech Stack

| Tool                                            | Purpose                     |
| ----------------------------------------------- | --------------------------- |
| [Vite](https://vite.dev/)                       | Build tool & dev server     |
| [React 19](https://react.dev/)                  | UI framework                |
| [React Router 7](https://reactrouter.com/)      | Client-side routing         |
| [Vitest](https://vitest.dev/)                   | Unit testing                |
| [Testing Library](https://testing-library.com/) | Component testing utilities |

---

## 📝 Deployment

The site builds to a static `dist/` folder and can be deployed to any static hosting provider:

- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop the `dist/` folder, or connect your GitHub repo
- **GitHub Pages**: use the `gh-pages` package or GitHub Actions

Remember to set your `VITE_CONTENTFUL_SPACE_ID` and `VITE_CONTENTFUL_ACCESS_TOKEN` environment variables in your hosting provider's dashboard.

---

## 📄 License

[MIT](LICENSE)
