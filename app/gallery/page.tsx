import { createClient } from '@/lib/supabase/server'
import Navigation from '../components/Navigation'
import GalleryClient from './gallery-client'

export default async function GalleryPage() {
  const supabase = await createClient()

  // Fetch all photos from Supabase
  const { data: photos, error } = await supabase
    .from('photos')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-gray-600 text-lg">
            View our collection of precious moments at Little Stars Playschool
          </p>
        </div>

        <GalleryClient photos={photos || []} />
      </main>
    </div>
  )
}
