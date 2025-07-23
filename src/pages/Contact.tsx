import React, { useState } from 'react';
import { Calendar, Clock, Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-[#E15192]/5 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#E15192] to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4">
          <div className="relative z-10">
          <div className="text-center mb-16">
            <h1 className="section-title md:text-6xl mb-6 animate-fade-in text-white">
                Contact <span className="text-pink-200">Us</span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-above-paragraph text-pink-100 max-w-3xl mx-auto">
              Get in touch with Dr. Vijay Anand Reddy for expert oncology consultation and personalized cancer care.
            </p>
          </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-[#E15192]/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <Send className="w-8 h-8 text-[#E15192]" />
                <h3 className="section-title text-gray-900">Send us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-above-paragraph text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#E15192] focus:border-[#E15192] transition-all duration-300 paragraph-text hover:border-[#E15192]/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-above-paragraph text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#E15192] focus:border-[#E15192] transition-all duration-300 paragraph-text hover:border-[#E15192]/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-above-paragraph text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#E15192] focus:border-[#E15192] transition-all duration-300 paragraph-text hover:border-[#E15192]/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-above-paragraph text-gray-700 mb-3">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#E15192] focus:border-[#E15192] transition-all duration-300 paragraph-text hover:border-[#E15192]/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-above-paragraph text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#E15192] focus:border-[#E15192] transition-all duration-300 paragraph-text resize-none hover:border-[#E15192]/50"
                    placeholder="Please describe your concern or any specific requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E15192] hover:bg-[#c13d7a] text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-r from-[#E15192]/10 to-pink-50 p-8 md:p-12 rounded-3xl border border-[#E15192]/20 hover:shadow-xl transition-all duration-500">
                <h3 className="section-title text-gray-900 mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E15192] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-above-paragraph text-gray-900 mb-1">Call Now</p>
                      <a href="tel:+919676720002" className="text-[#E15192] hover:text-[#c13d7a] transition-colors text-above-paragraph hover:underline">
                        +91-9676720002
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#41729F] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-above-paragraph text-gray-900 mb-1">WhatsApp</p>
                      <a href="https://wa.me/919676720002" className="text-[#41729F] hover:text-[#2d5a7a] transition-colors text-above-paragraph hover:underline">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E15192] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-above-paragraph text-gray-900 mb-1">Email</p>
                      <a href="mailto:contact@drvijayanandreddy.com" className="text-[#E15192] hover:text-[#c13d7a] transition-colors paragraph-text hover:underline">
                        contact@drvijayanandreddy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#41729F] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-above-paragraph text-gray-900 mb-1">Clinic Timings</p>
                      <p className="paragraph-text text-gray-600">Mon–Sat: 9:00 AM – 5:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#E15192] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-above-paragraph text-gray-900 mb-1">Location</p>
                      <p className="paragraph-text text-gray-600">Apollo Cancer Hospital<br />Hyderabad, Telangana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 p-8 rounded-3xl hover:shadow-xl transition-all duration-500">
                <h4 className="text-above-paragraph text-red-800 mb-4 flex items-center space-x-2">
                  <Phone className="w-6 h-6" />
                  <span>Emergency Hotline</span>
                </h4>
                <p className="paragraph-text text-red-700 mb-6">Available 24×7 for urgent medical assistance</p>
                <a
                  href="tel:+919676720002"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Emergency</span>
                </a>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500">
                <h4 className="text-above-paragraph text-gray-900 mb-6">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:+919676720002"
                    className="bg-[#E15192]/10 hover:bg-[#E15192]/20 text-[#E15192] p-4 rounded-2xl text-center transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6 mx-auto mb-2" />
                    <span className="paragraph-text font-semibold">Call</span>
                  </a>
                  <a
                    href="https://wa.me/919676720002"
                    className="bg-[#41729F]/10 hover:bg-[#41729F]/20 text-[#41729F] p-4 rounded-2xl text-center transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 mx-auto mb-2" />
                    <span className="paragraph-text font-semibold">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title md:text-4xl text-gray-900 mb-6">
              Find <span className="text-[#E15192]">Us</span>
            </h2>
            <div className="w-24 h-1 bg-[#E15192] mx-auto mb-8"></div>
            <p className="text-above-paragraph text-gray-600">
              Located at Apollo Cancer Hospital, Hyderabad
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#E15192] mx-auto mb-4 animate-bounce" />
                <h3 className="text-above-paragraph text-gray-700 mb-2">Apollo Cancer Hospital</h3>
                <p className="paragraph-text text-gray-600">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;