# Modern SaaS Platform

A modern, full-stack SaaS platform built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Project Structure

This is a monorepo containing two main applications:

- `apps/web` - The main web application (dashboard)
- `apps/marketing` - The marketing website and landing pages
- `packages/ui` - Shared UI components library

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations

### Backend & Database
- Supabase (PostgreSQL)
- Supabase Auth
- tRPC for type-safe API calls

### Development Tools
- Turborepo for monorepo management
- ESLint for code linting
- Prettier for code formatting

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm 10.x or later
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd modern-saas
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create `.env.local` files in both `apps/web` and `apps/marketing` directories:

```env
# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development servers:
```bash
npm run dev
```

This will start both applications:
- Marketing site: [http://localhost:3001](http://localhost:3001)
- Web app: [http://localhost:3000](http://localhost:3000)

## Development Workflow

### Working on the Marketing Site
```bash
cd apps/marketing
npm run dev
```

### Working on the Web App
```bash
cd apps/web
npm run dev
```

### Working on Shared UI Components
```bash
cd packages/ui
npm run dev
```

## Building for Production

To build all applications:
```bash
npm run build
```

To build a specific application:
```bash
cd apps/web
npm run build
```

## Deployment

The project is configured for deployment on Vercel:

- Marketing site and web app can be deployed independently
- Each app has its own deployment configuration
- Automatic deployments are triggered on push to main branch

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.