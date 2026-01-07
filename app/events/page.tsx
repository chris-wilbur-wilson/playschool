import Navigation from '../components/Navigation'

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Spring Festival',
      date: 'March 15, 2025',
      time: '10:00 AM - 2:00 PM',
      description: 'Join us for our annual Spring Festival with games, face painting, and fun activities for all!',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meetings',
      date: 'March 22, 2025',
      time: '3:00 PM - 6:00 PM',
      description: 'Individual meetings to discuss your child\'s progress and development.',
    },
    {
      id: 3,
      title: 'Easter Egg Hunt',
      date: 'April 5, 2025',
      time: '11:00 AM - 1:00 PM',
      description: 'An exciting Easter egg hunt in our playground! Don\'t forget your baskets!',
    },
    {
      id: 4,
      title: 'End of Term Performance',
      date: 'April 12, 2025',
      time: '2:00 PM - 4:00 PM',
      description: 'Watch your little stars shine as they perform songs and dances they\'ve been practicing!',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
          <p className="text-gray-600 text-lg">
            Stay updated with all the exciting events happening at Little Stars Playschool!
          </p>
        </div>

        <div className="grid gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-purple-600 mb-2 md:mb-0">
                  {event.title}
                </h2>
                <div className="text-gray-600">
                  <div className="font-semibold">{event.date}</div>
                  <div className="text-sm">{event.time}</div>
                </div>
              </div>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 rounded-lg p-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Updates</h2>
          <p className="text-gray-700">
            Events are subject to change. We will notify parents via email of any updates or changes
            to scheduled events. For more information about any event, please contact us through our{' '}
            <a href="/contact" className="text-purple-600 hover:underline font-medium">
              contact page
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
