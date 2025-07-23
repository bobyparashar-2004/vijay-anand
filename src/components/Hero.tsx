import React from 'react';
import { Calendar, BookOpen, Heart } from 'lucide-react';

const Hero = () => {
  const CancerRibbonIcon = () => (
    <svg className="w-8 h-8 text-[#E15192]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-[#41729F] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#41729F] text-above-paragraph">Fighting Cancer Together</span>
            </div>
            
            <h1 className="section-title md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Best <span className="text-[#41729F]">Oncologist</span> in{' '}
              <span className="text-[#41729F]">Hyderabad</span>
            </h1>
            
            <h2 className="text-above-paragraph md:text-2xl text-gray-700">
              Dr. Vijay Anand Reddy
            </h2>
            
            <p className="paragraph-text text-gray-600">
              Director & Senior Consultant – Apollo Cancer Hospital
              <br />
              <span className="text-[#41729F] text-above-paragraph">30+ years of excellence in cancer care</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-[#41729F] hover:bg-[#2d5a7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
              </button>
              
              <button 
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-[#41729F] text-[#41729F] hover:bg-[#41729F] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Know Cancer</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Trusted by 10,000+ patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/dr-vijay.jpg"
                alt="Dr. Vijay Anand Reddy - Best Oncologist in Hyderabad"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#41729F]/20 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-8 h-8 text-[#41729F]" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#41729F]/20 rounded-full flex items-center justify-center animate-bounce">
              <Heart className="w-8 h-8 text-[#41729F]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;