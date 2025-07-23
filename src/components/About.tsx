import React from 'react';
import { Award, Globe, Users, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            About <span className="text-[#41729F]">Dr Vijay Anand</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Dr Vijay Anand Reddy is one of India's most renowned cancer specialists with 30+ years of experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Background</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#41729F] mt-1 mr-3 flex-shrink-0" />
                  Director at Apollo Cancer Hospital, Hyderabad
                </li>
                <li className="flex items-start">
                  <Globe className="w-5 h-5 text-[#41729F] mt-1 mr-3 flex-shrink-0" />
                  Trained in USA, UK, Europe, Australia
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-[#41729F] mt-1 mr-3 flex-shrink-0" />
                  Member: ESMO, ASCO, ASTRO; President AROI (AP Chapter)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Areas</h3>
              <p className="text-gray-700">
                States covered: Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Maharashtra
              </p>
            </div>

            <div className="bg-[#41729F] text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href="tel:+919676720002" className="hover:underline">+91-9676720002</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:contact@drvijayanandreddy.com" className="hover:underline">
                    contact@drvijayanandreddy.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:text-center">
            <img
              src="/dr-vijay.jpg"
              alt="Dr. Vijay Anand Reddy"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;