import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Dr. Vijay Anand Reddy saved my life. His expertise in radiation therapy and compassionate care gave me hope during the darkest period of my life. Today, I am cancer-free and grateful for his dedication.",
      author: "Priya Sharma",
      location: "Hyderabad",
      language: "English",
      rating: 5,
      treatment: "Radiation Therapy"
    },
    {
      text: "डॉ. विजय आनंद रेड्डी जी ने मेरी जिंदगी बचाई है। उनका इलाज और देखभाल अद्भुत है। आज मैं पूरी तरह स्वस्थ हूं।",
      author: "राजेश कुमार",
      location: "दिल्ली",
      language: "Hindi",
      rating: 5,
      treatment: "Medical Oncology"
    },
    {
      text: "Dr. Reddy's innovative approach to immunotherapy gave me a second chance at life. His team's support throughout my treatment journey was exceptional. Highly recommended!",
      author: "Sarah Johnson",
      location: "Bangalore",
      language: "English",
      rating: 5,
      treatment: "Immunotherapy"
    },
    {
      text: "డాక్టర్ విజయ్ ఆనంద్ రెడ్డి గారి చికిత్స వల్ల నేను కేన్సర్ నుండి కోలుకున్నాను. వారి సేవ అద్భుతమైనది.",
      author: "వెంకట రావు",
      location: "విజయవాడ",
      language: "Telugu",
      rating: 5,
      treatment: "Proton Therapy"
    },
    {
      text: "Working with Dr. Reddy has been an honor. His dedication to advancing cancer treatment and patient care is unmatched. A true pioneer in oncology.",
      author: "Dr. Michael Chen",
      location: "Johns Hopkins, USA",
      language: "English",
      rating: 5,
      treatment: "Professional Colleague"
    },
    {
      text: "ڈاکٹر وجے آنند ریڈی صاحب کا علاج بہترین ہے۔ ان کی محنت اور دیکھ بھال سے میں صحت یاب ہو گیا ہوں۔",
      author: "محمد علی",
      location: "حیدرآباد",
      language: "Urdu",
      rating: 5,
      treatment: "Chemotherapy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Patient <span className="text-[#41729F]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Real stories from patients whose lives have been transformed through expert cancer care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-[#41729F]/20">
            <div className="absolute top-6 left-6">
              <Quote className="w-12 h-12 text-[#41729F]/30" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-above-paragraph md:text-2xl text-gray-700 mb-8 text-center">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <div className="inline-block bg-[#41729F]/20 rounded-2xl p-6">
                  <h4 className="text-above-paragraph text-gray-900 mb-1">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="paragraph-text text-gray-600 mb-2">{testimonials[currentIndex].location}</p>
                  <div className="flex items-center justify-center space-x-4 paragraph-text text-sm">
                    <span className="bg-[#41729F] text-white px-3 py-1 rounded-full">
                      {testimonials[currentIndex].language}
                    </span>
                    <span className="bg-[#41729F] text-white px-3 py-1 rounded-full">
                      {testimonials[currentIndex].treatment}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-[#41729F] hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-[#41729F] hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#41729F] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Statistics */}
       
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-above-paragraph text-gray-600 mb-6">
            Join thousands of patients who have found hope and healing
          </p>
          <button 
            onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Healing Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;