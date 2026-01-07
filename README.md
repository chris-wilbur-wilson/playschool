# Little Stars Playschool Website

A modern, full-featured playschool website built with Next.js and Supabase. Features a public-facing website with photo gallery and an admin dashboard for managing content.

## Features

### Public Website
- **Home Page**: Playschool information, about section, contact details, and opening hours
- **Events Page**: Display upcoming playschool events
- **Photo Gallery**: Browse photos organized by month and year
- **Contact Form**: Send messages to the playschool (emails sent to wilbur1979@googlemail.com)
- Fully responsive design with Tailwind CSS

### Admin Dashboard
- **Secure Authentication**: Admin-only access with Supabase Auth
- **Photo Management**: Upload and delete photos with automatic organization by month/year
- **Storage**: Integrated with Supabase Storage for reliable photo hosting
- Protected routes with middleware

## Tech Stack

- **Frontend**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Storage**: Supabase Storage
- **Deployment**: Vercel (optimized)

## Getting Started

### Prerequisites

- Node.js 18 or later
- A Supabase account and project
- A Vercel account (for deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/chris-wilbur-wilson/playschool.git
   cd playschool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

   Update `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Set up Supabase**

   Follow the instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to:
   - Create the photos table
   - Set up storage buckets
   - Configure security policies
   - Create your admin user

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `playschool` repository

3. **Configure Environment Variables**

   Add the following environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon/public key

4. **Deploy**

   Click "Deploy" and wait for the build to complete

5. **Update Supabase Settings**

   In your Supabase dashboard:
   - Go to Authentication → URL Configuration
   - Update Site URL to your Vercel URL
   - Add your Vercel URL to Redirect URLs

## Usage

### Public Access
- Visit the homepage to view playschool information
- Navigate to `/events` to see upcoming events
- Browse `/gallery` to view photos organized by month
- Use `/contact` to send a message

### Admin Access
- Navigate to `/admin/login`
- Sign in with your admin credentials
- Upload photos organized by month and year
- Delete photos as needed
- View all uploaded photos in the dashboard

## Project Structure

```
playschool/
├── app/
│   ├── components/         # Reusable components
│   │   └── Navigation.tsx  # Site navigation
│   ├── admin/              # Admin area
│   │   ├── login/          # Admin login page
│   │   └── dashboard/      # Admin dashboard
│   ├── contact/            # Contact page
│   ├── events/             # Events page
│   ├── gallery/            # Photo gallery
│   ├── api/                # API routes
│   │   └── contact/        # Contact form handler
│   ├── page.tsx            # Home page
│   └── layout.tsx          # Root layout
├── lib/
│   └── supabase/           # Supabase utilities
│       ├── client.ts       # Browser client
│       ├── server.ts       # Server client
│       └── middleware.ts   # Auth middleware
├── middleware.ts           # Route protection
├── SUPABASE_SETUP.md      # Database setup guide
└── README.md              # This file
```

## Configuration

### Contact Form
The contact form currently logs submissions to the console. To enable email sending:

1. Choose an email service (Resend, SendGrid, etc.)
2. Update `/app/api/contact/route.ts`
3. Add necessary API keys to environment variables

### Customization
- Update playschool name in `/app/components/Navigation.tsx`
- Modify placeholder content in pages
- Adjust colors in Tailwind classes (currently purple/pink theme)

## Security

- Admin routes are protected by middleware
- Row Level Security (RLS) enabled on database
- Storage buckets use policy-based access control
- Environment variables keep credentials secure

## Support

For issues or questions:
- Check [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) for setup help
- Review Supabase dashboard for errors
- Check browser console for client-side issues
- Verify environment variables are set correctly

## License

This project is private and proprietary.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
