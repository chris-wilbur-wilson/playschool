import Navigation from './components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-xl p-12 mb-12 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Little Stars Playschool</h1>
          <p className="text-xl">Where every child shines bright!</p>
        </div>

        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Little Stars Playschool is a nurturing and stimulating environment where children aged 2-5 years
            can learn, play, and grow. Our experienced staff are dedicated to providing the highest quality
            early childhood education in a safe, caring, and fun atmosphere.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in learning through play, fostering creativity, building confidence, and developing
            social skills that will serve children throughout their lives. Our curriculum is designed to
            prepare children for their next educational journey while ensuring they enjoy every moment of
            their time with us.
          </p>
        </section>

        {/* Opening Hours */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Opening Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Term Time</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600 mb-3">Session Times</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span className="font-medium">Morning Session:</span>
                  <span>8:00 AM - 12:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Afternoon Session:</span>
                  <span>1:00 PM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Full Day:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p>123 Sunshine Lane</p>
              <p>Happy Town, HT1 2AB</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Get in Touch</h3>
              <p>Phone: (01234) 567890</p>
              <p>Email: info@littlestars-playschool.co.uk</p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send us a message
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
