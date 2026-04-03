# Fix & Frei Umzüge und Entrümpelung Website

Professional moving services website built with Nuxt 3.

## 🚀 Features

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ SEO Optimized with meta tags
- ✅ Automatic Sitemap generation
- ✅ Robots.txt configuration
- ✅ TailwindCSS for styling
- ✅ TypeScript support
- ✅ Responsive design

## 📦 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

## 🏗️ Build for Production

### Static Site Generation (Recommended for best SEO)

```bash
# Generate static site
npm run generate
```

This will create a `.output/public` directory with all static files that can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

### Server-Side Rendering

```bash
# Build for SSR
npm run build

# Preview production build
npm run preview
```

## 📝 SEO Features

### Meta Tags
Every page includes:
- Title tags
- Meta descriptions
- Open Graph tags (for social media)
- Twitter Card tags
- Canonical URLs
- Language tags (German)

### Sitemap
Automatically generated at `/sitemap.xml` including:
- All main pages
- All service sections with anchors
- Weekly update frequency
- Priority settings

### Robots.txt
Configured to:
- Allow all search engines
- Point to sitemap location
- No restricted areas

## 📄 Pages

- `/` - Homepage
- `/leistungen` - Services page
  - `#entruempelung` - Clearance services
  - `#firmenumzug` - Business moves
  - `#haushaltsaufloesung` - Household dissolution
  - `#wohnungsaufloesung` - Apartment clearance
  - `#entsorgung` - Disposal services
  - `#transport` - Transport services
  - `#renovierung` - Renovation services
- `/ueber-uns` - About us
- `/referenzen` - References & testimonials
- `/kontakt` - Contact page

## 🎨 Tech Stack

- **Framework:** Nuxt 3
- **Styling:** TailwindCSS
- **Icons:** Lucide Vue Next
- **SEO:** @nuxtjs/sitemap, @nuxtjs/robots
- **Language:** TypeScript

## 📱 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Run `npm run generate`
2. Deploy the `.output/public` directory

### Node.js Server

1. Run `npm run build`
2. Deploy the `.output` directory
3. Start with `node .output/server/index.mjs`

## 🔧 Configuration

Edit `nuxt.config.ts` to update:
- Site URL
- Sitemap settings
- SEO defaults
- Meta information

## 📞 Support

For issues or questions, please contact the development team.
