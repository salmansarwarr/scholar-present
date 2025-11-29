import { TrendingUp, MessageSquare, Heart, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Features from './components/Features';
import BetterWay from './components/BetterWay';

export default function SchoolManagementLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Better Way Section */}
      <BetterWay />

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How One Platform Solves Your Biggest Challenges
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Messaging</h3>
              <p className="text-gray-600 text-sm">
                Communicate effortlessly across your entire school community
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Records</h3>
              <p className="text-gray-600 text-sm">
                Streamline student and staff records for quick access to information
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Attendance</h3>
              <p className="text-gray-600 text-sm">
                Monitor attendance data in a single dashboard
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Collections</h3>
              <p className="text-gray-600 text-sm">
                Digitize all fee payment records and manage invoices seamlessly
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Getting Started is Simple
              </h2>
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 mb-8">
                Get Started
              </button>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Sign Up for Demo</h3>
                    <p className="text-gray-600 text-sm">
                      Take the first initial important step for your school's digital transformation
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Choose the Modules You Need</h3>
                    <p className="text-gray-600 text-sm">
                      Select what works for your specific school's needs and start small if desired
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Launch & Thrive</h3>
                    <p className="text-gray-600 text-sm">
                      Welcome our team straight to work with you and focus on what matters most
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=600&fit=crop" 
                alt="Teacher with books" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Imagine Finally Having
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
              alt="Collaborative learning" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=400&fit=crop" 
                alt="Student presenting" 
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=400&fit=crop" 
                alt="Students working together" 
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Parents always connected</h3>
            <p className="text-gray-600">Keep your team in sync without having to hop in calls.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Reclaim Your Time?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of schools making the switch. See the difference streamlinehq can make for your educational institution.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 font-semibold">
            Book Your Free Demo Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Where Schools and Communities Grow Together</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400">📘</a>
                <a href="#" className="hover:text-green-400">🐦</a>
                <a href="#" className="hover:text-green-400">📷</a>
                <a href="#" className="hover:text-green-400">🎵</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">LINKS</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Solutions</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">New School Sign-up</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">CONTACT</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@streamline.com</li>
                <li>+123456789</li>
                <li>+234567890</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © 2025 Streamlinehq LTD. | All Rights Reserved. | Terms Of Service
          </div>
        </div>
      </footer>
    </div>
  );
}