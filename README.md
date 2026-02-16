# Rajowalia Automation Studio - React Website

A premium, modern React website for Rajowalia Automation Studio, showcasing YouTube automation services, video editing, and 3D animation capabilities.

## Features

- **Dark AI SaaS Design**: Modern premium aesthetic with glassmorphism effects
- **Fully Responsive**: Mobile-first design for all screen sizes
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Clean semantic HTML and metadata
- **High Performance**: Fast loading with optimized components
- **Complete Pages**:
  - Home (Hero, Features, Services, Process, CTA)
  - Services (Detailed service breakdowns with tools)
  - Portfolio (Project showcase with before/after)
  - Pricing (Monthly packages and single video pricing)
  - About (Company story and values)
  - Contact (Form with contact info and FAQ)

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Lucide React**: Icon library
- **Vite**: Build tool for fast development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation with hamburger menu
│   └── Footer.tsx        # Footer with links and contact info
├── pages/
│   ├── Home.tsx          # Home page with hero and features
│   ├── Services.tsx      # Detailed services breakdown
│   ├── Portfolio.tsx     # Project showcase
│   ├── Pricing.tsx       # Pricing tiers
│   ├── About.tsx         # Company information
│   └── Contact.tsx       # Contact form and info
├── App.tsx               # Main app with routing
├── main.tsx              # Entry point
└── index.css             # Global styles and customizations
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- Primary colors: `primary-900`, `primary-800`, `primary-700`
- Accent colors: `accent-blue`, `accent-orange`

### Branding

- Update logo text in `Navbar.tsx`
- Modify company name throughout pages
- Update email, phone, and social links in `Footer.tsx` and `Contact.tsx`

### Content

All page content is easily customizable by editing the respective page files in `src/pages/`

## Performance Optimizations

- Lazy loading with React Router
- Optimized images and animations
- Tailwind CSS purging unused styles
- Code splitting for faster loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2026 Rajowalia Automation Studio

## Contact

For inquiries about services or website customization, visit the contact page or email contact@rajowalia.com
