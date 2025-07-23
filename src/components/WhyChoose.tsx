import React from 'react';
import { Star, Award, Users, Heart, Globe, Zap } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "30+ Years Experience",
      description: "Three decades of excellence in oncology and cancer treatment"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Training",
      description: "Trained in USA, UK, Europe, and Australia with global expertise"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Excellence",
      description: "Director at Apollo Cancer Hospital and President AROI (AP Chapter)"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Advanced Therapies",
      description: "Expertise in Proton Therapy, Immunotherapy, and cutting-edge treatments"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "Compassionate approach with focus on patient comfort and recovery"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Active involvement in cancer research and innovative treatment methods"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Why Choose <span className="text-[#41729F]">Dr Vijay Anand</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Decades of leadership, innovation in Oncology, and commitment to excellence in cancer care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#41729F] mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#41729F] text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Global Recognition</h3>
          <p className="text-lg mb-6">
            Testimonials from patients and global doctors worldwide recognize Dr. Vijay Anand's 
            exceptional expertise and compassionate care in oncology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">ESMO Member</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">ASCO Member</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">ASTRO Member</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">AROI President</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;