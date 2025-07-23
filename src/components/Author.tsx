import React from 'react';
import { BookOpen, Users, Award, Heart, ArrowRight } from 'lucide-react';

const Author = () => {
  const bookHighlights = [
    "Inspiring stories of cancer survivors",
    "Practical guidance for patients and families", 
    "Medical insights from 30+ years of experience",
    "Hope and healing through real experiences"
  ];

  const launchEventGuests = [
    {
      title: "Hon'ble Governor",
      description: "Chief Guest at the book launch ceremony"
    },
    {
      title: "Hon'ble Chief Justice",
      description: "Special guest and speaker"
    },
    {
      title: "Shri Rana Daggubati",
      description: "Renowned actor and supporter"
    }
  ];

  return (
    <section id="author" className="py-20 bg-gray-50">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Donning the Hat of an <span className="text-[#41729F]">Author</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Sharing hope, wisdom, and healing through the written word
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Book Information */}
          <div className="space-y-8">
            <div className="bg-[#41729F]/10 p-8 rounded-3xl border border-[#41729F]/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#41729F]/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-[#41729F]" />
                </div>
                <div>
                  <h3 className="text-above-paragraph text-gray-900">I Am a Survivor</h3>
                  <p className="text-[#41729F] text-above-paragraph">By Dr. Vijay Anand Reddy</p>
                </div>
              </div>

              <p className="paragraph-text text-gray-700 mb-6">
                A powerful collection of stories that illuminate the journey of cancer survivors, 
                offering hope, practical guidance, and medical insights from three decades of 
                oncology practice.
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-above-paragraph text-gray-900">Book Highlights:</h4>
                {bookHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#41729F] rounded-full"></div>
                    <span className="paragraph-text text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Read More</span>
                </button>
                <button className="border-2 border-[#41729F] text-[#41729F] hover:bg-[#41729F] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2">
                  <span>Buy Book</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Launch Event */}
            <div className="bg-[#41729F] p-8 rounded-3xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8" />
                <h3 className="text-above-paragraph">Launch Event</h3>
              </div>
              
              <p className="text-white/80 paragraph-text mb-6">
                The book was launched in a prestigious ceremony attended by distinguished guests
              </p>

              <div className="grid gap-4">
                {launchEventGuests.map((guest, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="text-above-paragraph text-white mb-1">{guest.title}</h4>
                    <p className="text-white/80 paragraph-text text-sm">{guest.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="space-y-8">
            <div className="bg-[#41729F]/10 p-8 md:p-12 rounded-3xl border-l-4 border-[#41729F] shadow-xl">
              <div className="text-6xl text-[#41729F]/30 mb-4">"</div>
              <blockquote className="text-above-paragraph md:text-2xl text-gray-800 mb-6">
                What Cancer Cannot Do – Cancer is so limited... It cannot cripple love, 
                it cannot shatter hope, it cannot corrode faith, it cannot destroy peace, 
                it cannot kill friendship, it cannot suppress memories, it cannot silence courage, 
                it cannot invade the soul, it cannot steal eternal life, it cannot conquer the spirit.
              </blockquote>
              <cite className="text-[#41729F] text-above-paragraph">
                — From "I Am a Survivor"
              </cite>
            </div>

            {/* Book Impact */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-8 h-8 text-[#41729F] mx-auto mb-3" />
                <div className="text-above-paragraph text-gray-900 mb-1">5,000+</div>
                <div className="text-gray-600 paragraph-text text-sm">Copies Sold</div>
              </div>
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="w-8 h-8 text-[#41729F] mx-auto mb-3" />
                <div className="text-above-paragraph text-gray-900 mb-1">1,000+</div>
                <div className="text-gray-600 paragraph-text text-sm">Lives Inspired</div>
              </div>
            </div>

            {/* Author's Message */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h4 className="text-above-paragraph text-gray-900 mb-4">Author's Message</h4>
              <p className="paragraph-text text-gray-700">
                "Through this book, I wanted to share not just medical knowledge, but the incredible 
                strength and resilience I've witnessed in my patients. Every story is a testament to 
                the human spirit's ability to overcome the greatest challenges."
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-[#41729F] text-above-paragraph">Dr. Vijay Anand Reddy</p>
                <p className="text-gray-500 paragraph-text text-sm">Author & Oncologist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#41729F]/10 p-8 md:p-12 rounded-3xl border border-[#41729F]/30">
          <h3 className="text-above-paragraph md:text-3xl text-gray-900 mb-4">
            Get Your Copy Today
          </h3>
          <p className="paragraph-text text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have found hope, inspiration, and practical guidance 
            in "I Am a Survivor". Available in multiple formats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Order Online
            </button>
            <button className="border-2 border-[#41729F] text-[#41729F] hover:bg-[#41729F] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Read Sample Chapter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;