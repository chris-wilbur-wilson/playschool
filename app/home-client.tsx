'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

export default function HomeClient({ user }: { user: User }) {
  const [message, setMessage] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleHelloClick = () => {
    setMessage(`Hello, ${user.email}! Welcome to the Playschool App!`)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Playschool App
          </h1>
          <p className="text-gray-600">
            Logged in as: <span className="font-medium">{user.email}</span>
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleHelloClick}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Say Hello!
          </button>

          {message && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-4 rounded-lg animate-fade-in">
              <p className="text-gray-800 font-medium text-center">
                {message}
              </p>
            </div>
          )}

          <button
            onClick={handleSignOut}
            className="w-full bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
