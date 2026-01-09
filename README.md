# Maxdevops Website

A modern, professional, and responsive company website for Maxdevops - a leading software development company. Built with Next.js 16, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI with purple and light blue gradient theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO-Friendly**: Optimized metadata and semantic HTML structure
- **Fast Performance**: Built with Next.js App Router and Turbopack
- **Accessible**: WCAG compliant components

## 📋 Pages

1. **Home** - Hero section, services overview, why choose us, technologies, and CTA
2. **About** - Company overview, mission & vision, team members
3. **Services** - Detailed service offerings and development process
4. **Projects** - Portfolio showcase with filtering capabilities
5. **Contact** - Contact form and business information

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
maxdevops-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects/Portfolio page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and theme
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── SectionTitle.tsx
│   └── ServiceCard.tsx
├── constants/             # App constants and data
│   └── index.ts           # Company info, services, projects
└── public/                # Static assets
```

## 🎨 Color Theme

- **Primary**: Purple (`#9333ea`)
- **Secondary**: Light Blue (`#60a5fa`)
- **Background**: White (`#ffffff`)
- **Text**: Gray shades

## 📝 Customization

### Update Company Information

Edit `constants/index.ts` to update:
- Company name, tagline, and description
- Contact information
- Services offered
- Project portfolio
- Team members

### Modify Theme Colors

Update colors in `app/globals.css`:
```css
:root {
  --primary: #9333ea;
  --secondary: #60a5fa;
}
```

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Contact

**Maxdevops**
- Email: contact@maxdevops.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Maxdevops Team

