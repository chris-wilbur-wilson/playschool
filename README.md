# Playschool App

A simple Next.js application with Supabase authentication for a playschool.

## Features

- Email/password authentication with Supabase
- Protected routes with middleware
- Simple hello world interface
- Clean, modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### Setup

1. Clone this repository

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   - Create a new project or select an existing one
   - Go to Settings > API
   - Copy your project URL and anon/public key
   - Update `.env.local` with your values:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-project-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### First Time Usage

1. You'll be redirected to the login page
2. Click "Sign Up" to create a new account
3. Enter your email and password
4. Check your email for a confirmation link (if email confirmation is enabled in Supabase)
5. Sign in with your credentials
6. Click the "Say Hello!" button to see your personalized message

## Deployment

### Deploy to Vercel

The easiest way to deploy this app is using Vercel:

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel project settings
4. Deploy!

## Tech Stack

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript

## Project Structure

```
├── app/
│   ├── login/          # Login page
│   ├── page.tsx        # Home page (protected)
│   ├── home-client.tsx # Client component for home
│   └── layout.tsx      # Root layout
├── lib/
│   └── supabase/       # Supabase client utilities
│       ├── client.ts   # Browser client
│       ├── server.ts   # Server client
│       └── middleware.ts # Auth middleware
└── middleware.ts       # Next.js middleware for route protection
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
