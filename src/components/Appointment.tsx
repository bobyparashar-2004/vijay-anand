import React, { useState } from 'react';
import { Calendar, Clock, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Make an <span className="text-[#41729F]">Appointment</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Schedule your consultation with Dr. Vijay Anand Reddy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Appointment Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book Your Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41729F] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41729F] focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41729F] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41729F] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#41729F] focus:border-transparent"
                  placeholder="Please describe your concern or any specific requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#41729F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#41729F]/90 transition-colors duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#41729F] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Call Now</p>
                    <a href="tel:+919676720002" className="text-[#41729F] hover:underline">
                      +91-9676720002
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-[#41729F] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a href="https://wa.me/919676720002" className="text-[#41729F] hover:underline">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#41729F] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:contact@drvijayanandreddy.com" className="text-[#41729F] hover:underline">
                      contact@drvijayanandreddy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-[#41729F] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Clinic Timings</p>
                    <p className="text-gray-600">Mon–Sat: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#41729F] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Apollo Cancer Hospital, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Hotline</h4>
              <p className="text-red-700 mb-3">Available 24×7 for urgent medical assistance</p>
              <a
                href="tel:+919676720002"
                className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;