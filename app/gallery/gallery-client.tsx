'use client'

import { useState } from 'react'
import Image from 'next/image'

type Photo = {
  id: string
  url: string
  month: string
  year: number
  created_at: string
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const currentYear = new Date().getFullYear()
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  // Group photos by year and month
  const photosByYear = photos.reduce((acc, photo) => {
    if (!acc[photo.year]) {
      acc[photo.year] = {}
    }
    if (!acc[photo.year][photo.month]) {
      acc[photo.year][photo.month] = []
    }
    acc[photo.year][photo.month].push(photo)
    return acc
  }, {} as Record<number, Record<string, Photo[]>>)

  const years = Object.keys(photosByYear).map(Number).sort((a, b) => b - a)
  const monthsInYear = photosByYear[selectedYear] || {}
  const availableMonths = Object.keys(monthsInYear)

  const displayPhotos = selectedMonth
    ? monthsInYear[selectedMonth] || []
    : Object.values(monthsInYear).flat()

  return (
    <div>
      {/* Year and Month Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Year Selection */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(Number(e.target.value))
                setSelectedMonth(null)
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {years.length > 0 ? (
                years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))
              ) : (
                <option value={currentYear}>{currentYear}</option>
              )}
            </select>
          </div>

          {/* Month Selection */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Month
            </label>
            <select
              value={selectedMonth || ''}
              onChange={(e) => setSelectedMonth(e.target.value || null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="">All Months</option>
              {MONTHS.map((month) => (
                <option
                  key={month}
                  value={month}
                  disabled={!availableMonths.includes(month)}
                >
                  {month}
                  {availableMonths.includes(month) &&
                    ` (${monthsInYear[month]?.length || 0})`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      {displayPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <Image
                src={photo.url}
                alt={`${photo.month} ${photo.year}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-24 w-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Photos Yet
          </h3>
          <p className="text-gray-500">
            {selectedMonth
              ? `No photos available for ${selectedMonth} ${selectedYear}`
              : `No photos available for ${selectedYear}`}
          </p>
        </div>
      )}
    </div>
  )
}
