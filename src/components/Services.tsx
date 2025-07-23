import React from 'react';
import { Zap, Heart, Users, Microscope, BookOpen, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Radiation Therapy",
      description: "Advanced radiation oncology treatments including IMRT, IGRT, and stereotactic radiosurgery for precise cancer targeting.",
      features: ["IMRT & IGRT", "Stereotactic Radiosurgery", "Brachytherapy", "Proton Therapy"],
      color: "blue"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical Oncology",
      description: "Comprehensive medical oncology services including chemotherapy, immunotherapy, and targeted therapy treatments.",
      features: ["Chemotherapy", "Immunotherapy", "Targeted Therapy", "Hormonal Therapy"],
      color: "pink"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Awareness Talks & Conferences",
      description: "Educational programs and conferences to spread cancer awareness and promote early detection in communities.",
      features: ["Community Outreach", "Medical Conferences", "Educational Seminars", "Prevention Programs"],
      color: "green"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Cancer Survivorship Programs",
      description: "Comprehensive support programs for cancer survivors focusing on rehabilitation and quality of life improvement.",
      features: ["Rehabilitation Support", "Nutritional Guidance", "Psychological Support", "Follow-up Care"],
      color: "purple"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Cutting-edge research in oncology and participation in clinical trials for advanced cancer treatments.",
      features: ["Clinical Trials", "Research Studies", "Innovation Projects", "Academic Publications"],
      color: "indigo"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Work",
      description: "Dedicated community service through free screenings, awareness campaigns, and charitable healthcare initiatives.",
      features: ["Free Screenings", "Charity Programs", "Health Camps", "Community Support"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-[#41729F]/10",
        icon: "text-[#41729F]",
        button: "bg-[#41729F] hover:bg-[#2d5a7a]",
        border: "border-[#41729F]/30"
      },
      pink: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]", 
        button: "bg-[#E15192] hover:bg-[#c13d7a]",
        border: "border-[#E15192]/30"
      },
      green: {
        bg: "bg-[#41729F]/10",
        icon: "text-[#41729F]",
        button: "bg-[#41729F] hover:bg-[#2d5a7a]", 
        border: "border-[#41729F]/30"
      },
      purple: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]",
        button: "bg-[#E15192] hover:bg-[#c13d7a]",
        border: "border-[#E15192]/30"
      },
      indigo: {
        bg: "bg-[#41729F]/10",
        icon: "text-[#41729F]",
        button: "bg-[#41729F] hover:bg-[#2d5a7a]",
        border: "border-[#41729F]/30"
      },
      red: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]",
        button: "bg-[#E15192] hover:bg-[#c13d7a]",
        border: "border-[#E15192]/30"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">


           <div className="bg-[#41729F] rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="section-title md:text-4xl mb-4">Our Impact</h3>
            <p className="text-white/80 text-above-paragraph">Making a difference in communities across India</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="section-title md:text-5xl mb-2">15,000+</div>
              <div className="text-white/80 paragraph-text">Free Screenings</div>
            </div>
            <div className="text-center">
              <div className="section-title md:text-5xl mb-2">500+</div>
              <div className="text-white/80 paragraph-text">Villages Reached</div>
            </div>
            <div className="text-center">
              <div className="section-title md:text-5xl mb-2">50+</div>
              <div className="text-white/80 paragraph-text">Health Camps</div>
            </div>
            <div className="text-center">
              <div className="section-title md:text-5xl mb-2">1,000+</div>
              <div className="text-white/80 paragraph-text">Lives Saved</div>
            </div>
          </div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Expertise & <span className="text-[#41729F]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Comprehensive cancer care with cutting-edge treatments and compassionate support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${colorClasses.border} overflow-hidden`}
              >
                <div className={`${colorClasses.bg} p-6`}>
                  <div className={`${colorClasses.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-above-paragraph text-gray-900 mb-3">{service.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="paragraph-text text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${colorClasses.icon.replace('text-', 'bg-')}`}></div>
                        <span className="paragraph-text text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`flex-1 ${colorClasses.button} text-white px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Schedule Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;