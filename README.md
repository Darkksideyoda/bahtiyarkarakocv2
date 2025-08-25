This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
src/
  app/                    # Next.js App Router pages
  components/
    common/              # Reusable UI components (Tag, Logo, etc.)
    sections/            # Page sections (HeroSection, ExperiencePath, etc.)
    layout/              # Layout components (SiteBackground, FloatingNav)
    motion/              # Motion primitives and providers
    ui/                  # Design system primitives
  data/                  # Static data (blog posts, projects, experience)
  hooks/                 # Custom React hooks
  lib/                   # Utilities and configuration
    analytics/           # Web vitals and analytics helpers
  types/                 # TypeScript type definitions
```

## Development Guidelines

### File Naming
- **kebab-case** for files: `hero-section.tsx`, `motion-tokens.ts`
- **PascalCase** for React components: `HeroSection`, `MotionDiv`
- Use named exports for components (avoid default exports except for pages)

### Motion & Animations
- All motion configuration is centralized in `lib/motion-tokens.ts`
- Use `MotionPrimitives` from `components/motion/` instead of inline Framer Motion
- Respect `useReducedMotion` hook for accessibility

### TypeScript
- Strict mode enabled with additional checks
- Use `import type` for type-only imports
- All content types defined in `types/content.ts`

### Styling
- Tailwind CSS with design tokens
- Use `cn()` utility for conditional classes
- Consistent spacing and color systems

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
npm run analyze      # Analyze bundle size
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
