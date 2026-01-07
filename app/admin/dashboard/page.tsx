import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardClient from './dashboard-client'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Fetch all photos for management
  const { data: photos } = await supabase
    .from('photos')
    .select('*')
    .order('created_at', { ascending: false })

  return <DashboardClient user={user} photos={photos || []} />
}
