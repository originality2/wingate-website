# Wingate Childcare Website

A modern, responsive React website for Wingate Childcare, built with **Vite + React** and powered by **Contentful** as the headless CMS.

---

## ✨ Features

- **5 pages**: Home, About, Programs, Gallery, and Contact
- **Headless CMS integration** via [Contentful](https://www.contentful.com/) — edit all text and images without touching code
- **Graceful fallback**: works out-of-the-box with built-in mock data if Contentful is not yet configured
- **Accessible**: semantic HTML, ARIA labels, keyboard-navigable navigation
- **Responsive**: mobile-first design with a hamburger menu on small screens
- **Contact form** with validation and a success state
- **Vite** for fast development and optimised production builds
- **19 unit tests** with Vitest and Testing Library

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/originality2/wingate-website.git
cd wingate-website
npm install
```

### 2. Configure Contentful (optional)

Copy the example environment file and fill in your Contentful credentials:

```bash
cp .env.example .env
```

Edit `.env`:

```
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

> **Don't have a Contentful account?**  
> Sign up for free at <https://www.contentful.com>. The free plan includes 1 space with all the features you need.

If you skip this step, the site will use built-in mock data and work perfectly for local development.

### 3. Run the development server

```bash
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Header/          # Sticky navigation header with mobile burger menu
│   ├── Footer/          # Site footer with links and contact info
│   ├── Hero/            # Home page hero section
│   ├── Programs/        # Program card component
│   ├── Testimonials/    # Parent testimonials section
│   ├── Gallery/         # Photo gallery grid
│   └── Contact/         # Contact enquiry form
├── hooks/
│   └── useContentful.js # Custom hook for Contentful data fetching
├── lib/
│   ├── contentful.js    # Contentful client and fetch helpers
│   └── mockData.js      # Fallback content used when CMS is not configured
├── pages/
│   ├── Home.jsx         # Home page
│   ├── About.jsx        # About page
│   ├── Programs.jsx     # Programs page
│   ├── GalleryPage.jsx  # Gallery page
│   └── Contact.jsx      # Contact page
├── styles/
│   └── global.css       # Design tokens and global styles
└── test/                # Vitest unit tests
```

---

## 🗝️ Contentful Content Types

To use real CMS content, create the following content types in your Contentful space:

### `program`
| Field | Type | Description |
|---|---|---|
| `title` | Short text | Program name (e.g. "Toddler Program") |
| `ageRange` | Short text | Age range (e.g. "1 – 3 years") |
| `description` | Long text | Program description |
| `icon` | Short text | Emoji icon |
| `color` | Short text | CSS hex colour for the card background |

### `testimonial`
| Field | Type | Description |
|---|---|---|
| `quote` | Long text | Parent quote |
| `authorName` | Short text | Parent name |
| `authorTitle` | Short text | e.g. "Parent of a 2-year-old" |

### `galleryImage`
| Field | Type | Description |
|---|---|---|
| `title` | Short text | Image title |
| `description` | Short text | Alt text / caption |
| `imageUrl` | Short text | URL of the image (or use a Contentful Media Asset field) |

---

## 🧪 Testing

```bash
npm test
```

The test suite covers:

- `Header` – renders logo, all nav links, and the CTA button
- `Hero` – renders headline, subheading, and CTA links
- `ProgramCard` – renders title, age range, description, and featured state
- `Testimonials` – renders quotes and handles empty state
- `ContactForm` – renders fields, submit button, and shows success message after submission
- `contentful lib` – returns `null` / empty array when env vars are not set

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vite.dev/) | Build tool & dev server |
| [React 19](https://react.dev/) | UI framework |
| [React Router 7](https://reactrouter.com/) | Client-side routing |
| [Contentful JS SDK](https://www.contentful.com/developers/docs/javascript/) | Headless CMS client |
| [Vitest](https://vitest.dev/) | Unit testing |
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
