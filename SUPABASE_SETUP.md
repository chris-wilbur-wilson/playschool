# Supabase Setup Guide

This guide will help you set up the required Supabase database tables and storage buckets for the Little Stars Playschool app.

## Prerequisites

- A Supabase account and project
- Access to your Supabase dashboard

## Step 1: Create the Photos Table

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project
3. Click on **SQL Editor** in the left sidebar
4. Click **New Query**
5. Paste the following SQL and click **Run**:

```sql
-- Create photos table
CREATE TABLE photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  month TEXT NOT NULL,
  year INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_photos_year_month ON photos(year, month);
CREATE INDEX idx_photos_created_at ON photos(created_at DESC);

-- Enable Row Level Security
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Allow public read access to photos
CREATE POLICY "Public photos are viewable by everyone"
  ON photos FOR SELECT
  USING (true);

-- Allow authenticated users to insert photos
CREATE POLICY "Authenticated users can insert photos"
  ON photos FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to delete photos
CREATE POLICY "Authenticated users can delete photos"
  ON photos FOR DELETE
  USING (auth.role() = 'authenticated');
```

## Step 2: Create the Photos Storage Bucket

1. In your Supabase dashboard, click on **Storage** in the left sidebar
2. Click **Create a new bucket**
3. Set the following:
   - **Name**: `photos`
   - **Public bucket**: Toggle ON (enable public access)
4. Click **Create bucket**

## Step 3: Set Storage Policies

1. Click on the `photos` bucket you just created
2. Click on **Policies** tab
3. Add the following policies:

### Policy 1: Public Read Access
- Click **New Policy**
- Select **For full customization** → **Create policy**
- Set:
  - **Policy name**: `Public photos are viewable by everyone`
  - **Allowed operation**: SELECT
  - **Target roles**: public
  - **Policy definition**: `true`
- Click **Review** → **Save policy**

### Policy 2: Authenticated Upload Access
- Click **New Policy**
- Select **For full customization** → **Create policy**
- Set:
  - **Policy name**: `Authenticated users can upload photos`
  - **Allowed operation**: INSERT
  - **Target roles**: authenticated
  - **Policy definition**: `true`
- Click **Review** → **Save policy**

### Policy 3: Authenticated Delete Access
- Click **New Policy**
- Select **For full customization** → **Create policy**
- Set:
  - **Policy name**: `Authenticated users can delete photos`
  - **Allowed operation**: DELETE
  - **Target roles**: authenticated
  - **Policy definition**: `true`
- Click **Review** → **Save policy**

## Step 4: Create an Admin User

1. Go to **Authentication** → **Users** in your Supabase dashboard
2. Click **Add user** → **Create new user**
3. Enter your admin email and password
4. Click **Create user**
5. Check your email and confirm your account (if email confirmation is enabled)

## Step 5: Test Your Setup

1. Deploy your app to Vercel (or run locally)
2. Navigate to `/admin/login`
3. Sign in with your admin credentials
4. Try uploading a photo
5. Check the public gallery page to verify the photo appears

## Troubleshooting

### Photos not showing in gallery
- Check that the `photos` table has data
- Verify storage bucket is set to public
- Check browser console for errors

### Cannot upload photos
- Verify you're logged in as an authenticated user
- Check storage policies allow INSERT for authenticated users
- Check file size (max 5MB) and format (images only)

### Cannot delete photos
- Verify storage policies allow DELETE for authenticated users
- Check browser console for errors

## Optional: Disable Email Confirmation (Development)

For easier testing during development:

1. Go to **Authentication** → **Providers**
2. Click on **Email**
3. Scroll down and toggle OFF **Confirm email**
4. Click **Save**

Now when you create users, they won't need to confirm their email before logging in.
