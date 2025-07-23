import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart, Stethoscope } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Author', href: '/#author' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const services = [
    'Radiation Therapy',
    'Medical Oncology', 
    'Immunotherapy',
    'Proton Therapy',
    'Cancer Screening',
    'Survivorship Programs'
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // Handle hash navigation for home page sections
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/vijay-logo.png" 
                  alt="Dr. Vijay Anand Reddy Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              
              <p className="text-gray-300 paragraph-text mb-6">
                Leading oncologist with 30+ years of experience, dedicated to providing 
                world-class cancer care and spreading hope through advanced treatments.
              </p>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#41729F] hover:bg-[#2d5a7a] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#E15192] hover:bg-[#c13d7a] rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-above-paragraph mb-6 text-[#41729F]">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/#') ? (
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left paragraph-text"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 paragraph-text"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-above-paragraph mb-6 text-[#41729F]">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Stethoscope className="w-4 h-4 text-[#41729F]" />
                    <span className="text-gray-300 paragraph-text">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-above-paragraph mb-6 text-[#41729F]">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#41729F] mt-1" />
                  <div>
                    <p className="text-gray-300 paragraph-text">Call Us</p>
                    <a 
                      href="tel:+919676720002" 
                      className="text-white hover:text-[#41729F] transition-colors text-above-paragraph"
                    >
                      +91-9676720002
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#41729F] mt-1" />
                  <div>
                    <p className="text-gray-300 paragraph-text">Email</p>
                    <a 
                      href="mailto:contact@drvijayanandreddy.com" 
                      className="text-white hover:text-[#41729F] transition-colors"
                    >
                      contact@drvijayanandreddy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#41729F] mt-1" />
                  <div>
                    <p className="text-gray-300 paragraph-text">Location</p>
                    <p className="text-white paragraph-text">
                      Apollo Cancer Hospital<br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h4 className="text-above-paragraph mb-4">Stay Updated</h4>
            <p className="text-gray-300 paragraph-text mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on cancer care, 
              health tips, and upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 paragraph-text">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with care for cancer patients worldwide</span>
            </div>
            
            <div className="text-gray-300 paragraph-text text-sm">
              © 2025 Dr. Vijay Anand Reddy. All rights reserved.
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-600 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-5 h-5" />
            <span className="text-above-paragraph">24/7 Emergency Hotline: +91-9676720002</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;