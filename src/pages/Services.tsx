import React from 'react';
import { Zap, Heart, Users, Microscope, BookOpen, ArrowRight, Phone, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Radiation Therapy",
      description: "Advanced radiation oncology treatments including IMRT, IGRT, and stereotactic radiosurgery for precise cancer targeting.",
      features: ["IMRT & IGRT", "Stereotactic Radiosurgery", "Brachytherapy", "Proton Therapy"],
      color: "pink"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical Oncology",
      description: "Comprehensive medical oncology services including chemotherapy, immunotherapy, and targeted therapy treatments.",
      features: ["Chemotherapy", "Immunotherapy", "Targeted Therapy", "Hormonal Therapy"],
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Awareness Talks & Conferences",
      description: "Educational programs and conferences to spread cancer awareness and promote early detection in communities.",
      features: ["Community Outreach", "Medical Conferences", "Educational Seminars", "Prevention Programs"],
      color: "pink"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Cancer Survivorship Programs",
      description: "Comprehensive support programs for cancer survivors focusing on rehabilitation and quality of life improvement.",
      features: ["Rehabilitation Support", "Nutritional Guidance", "Psychological Support", "Follow-up Care"],
      color: "blue"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Research & Innovation",
      description: "Cutting-edge research in oncology and participation in clinical trials for advanced cancer treatments.",
      features: ["Clinical Trials", "Research Studies", "Innovation Projects", "Academic Publications"],
      color: "pink"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Work",
      description: "Dedicated community service through free screenings, awareness campaigns, and charitable healthcare initiatives.",
      features: ["Free Screenings", "Charity Programs", "Health Camps", "Community Support"],
      color: "blue"
    }
  ];

  const specialties = [
    {
      title: "Proton Therapy",
      description: "State-of-the-art proton beam therapy for precise tumor targeting with minimal side effects",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Immunotherapy",
      description: "Revolutionary cancer treatment that harnesses the body's immune system to fight cancer",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Precision Medicine",
      description: "Personalized treatment plans based on genetic profiling and molecular diagnostics",
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: "Multidisciplinary Care",
      description: "Collaborative approach involving oncologists, surgeons, radiologists, and support staff",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]",
        button: "bg-[#E15192] hover:bg-[#c13d7a]",
        border: "border-[#E15192]/30"
      },
      blue: {
        bg: "bg-[#41729F]/10",
        icon: "text-[#41729F]",
        button: "bg-[#41729F] hover:bg-[#2d5a7a]",
        border: "border-[#41729F]/30"
      }
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E15192]/5 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#E15192] to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="section-title md:text-6xl mb-6 animate-fade-in">
              Our <span className="text-pink-200">Services</span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-above-paragraph text-pink-100 max-w-3xl mx-auto">
              Comprehensive cancer care with cutting-edge treatments and compassionate support
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${colorClasses.border} overflow-hidden`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`${colorClasses.bg} p-8`}>
                    <div className={`${colorClasses.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-above-paragraph text-gray-900 mb-3">{service.title}</h3>
                  </div>
                  
                  <div className="p-8">
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
                      <button className={`flex-1 ${colorClasses.button} text-white px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title md:text-5xl text-gray-900 mb-6">
              Our <span className="text-[#E15192]">Specialties</span>
            </h2>
            <div className="w-24 h-1 bg-[#E15192] mx-auto mb-8"></div>
            <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
              Advanced treatment modalities and specialized care programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-[#E15192]/10 to-pink-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-[#E15192]/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E15192] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-above-paragraph text-gray-900 mb-3 group-hover:text-[#E15192] transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="paragraph-text text-gray-600">{specialty.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-[#E15192] to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="section-title md:text-4xl mb-4">Our Impact</h3>
            <p className="text-pink-100 text-above-paragraph">Excellence in cancer care delivery</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="section-title md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">10,000+</div>
              <div className="text-pink-100 paragraph-text">Patients Treated</div>
            </div>
            <div className="text-center group">
              <div className="section-title md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-pink-100 paragraph-text">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="section-title md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">30+</div>
              <div className="text-pink-100 paragraph-text">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="section-title md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-pink-100 paragraph-text">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-[#E15192]/10 to-pink-50 p-8 md:p-12 rounded-3xl shadow-lg border border-[#E15192]/20">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calendar className="w-8 h-8 text-[#E15192]" />
              <h3 className="text-above-paragraph md:text-3xl text-gray-900">Ready to Start Your Healing Journey?</h3>
            </div>
            
            <p className="paragraph-text text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Vijay Anand Reddy and take the first step towards comprehensive cancer care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#E15192] hover:bg-[#c13d7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:+919676720002"
                className="border-2 border-[#E15192] text-[#E15192] hover:bg-[#E15192] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;