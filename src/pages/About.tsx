import React from 'react';
import { Award, Globe, Users, Phone, Mail, Heart, Stethoscope, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "30+ Years Experience",
      description: "Three decades of excellence in oncology and cancer treatment",
      color: "blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Training",
      description: "Trained in USA, UK, Europe, and Australia with global expertise",
      color: "pink"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Excellence",
      description: "Director at Apollo Cancer Hospital and President AROI (AP Chapter)",
      color: "blue"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Advanced Therapies",
      description: "Expertise in Proton Therapy, Immunotherapy, and cutting-edge treatments",
      color: "pink"
    }
  ];

  const qualifications = [
    "MBBS - Osmania Medical College",
    "MD (Radiotherapy) - NIMS, Hyderabad", 
    "Fellowship in Radiation Oncology - USA",
    "Advanced Training in Proton Therapy - Europe",
    "Immunotherapy Certification - Australia"
  ];

  const memberships = [
    "European Society for Medical Oncology (ESMO)",
    "American Society of Clinical Oncology (ASCO)",
    "American Society for Radiation Oncology (ASTRO)",
    "Association of Radiation Oncologists of India (AROI) - President (AP Chapter)",
    "Indian Society of Oncology (ISO)"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-[#41729F]/10",
        icon: "text-[#41729F]",
        border: "border-[#41729F]/30"
      },
      pink: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]",
        border: "border-[#E15192]/30"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="section-title md:text-5xl text-gray-900 mb-6">
              About <span className="text-[#41729F]">Dr Vijay Anand Reddy</span>
            </h1>
            <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
            <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
              Leading oncologist with 30+ years of experience, dedicated to providing world-class cancer care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-[#41729F]/10 p-8 rounded-3xl border border-[#41729F]/20">
                <h3 className="text-above-paragraph text-gray-900 mb-6">Professional Journey</h3>
                <p className="paragraph-text text-gray-700 mb-6">
                  Dr. Vijay Anand Reddy stands as one of India's most distinguished oncologists, 
                  bringing over three decades of unparalleled expertise in cancer treatment and care. 
                  His journey began with a vision to make advanced cancer treatment accessible to all.
                </p>
                <p className="paragraph-text text-gray-700">
                  As Director at Apollo Cancer Hospital, Hyderabad, he has pioneered numerous 
                  innovative treatment protocols and has been instrumental in introducing 
                  cutting-edge technologies like Proton Therapy to India.
                </p>
              </div>

              <div className="bg-[#E15192]/10 p-8 rounded-3xl border border-[#E15192]/20">
                <h3 className="text-above-paragraph text-gray-900 mb-6">Mission & Vision</h3>
                <p className="paragraph-text text-gray-700 mb-4">
                  <strong>Mission:</strong> To provide world-class, compassionate cancer care 
                  while advancing the field through research and innovation.
                </p>
                <p className="paragraph-text text-gray-700">
                  <strong>Vision:</strong> A world where cancer is no longer a life-threatening 
                  disease, achieved through early detection, advanced treatment, and comprehensive care.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/dr-vijay.jpg"
                alt="Dr. Vijay Anand Reddy"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#41729F]/20 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-8 h-8 text-[#41729F]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title md:text-4xl text-gray-900 mb-6">
              Key <span className="text-[#41729F]">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const colorClasses = getColorClasses(achievement.color);
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${colorClasses.border} overflow-hidden`}
                >
                  <div className={`${colorClasses.bg} p-8`}>
                    <div className={`${colorClasses.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <h3 className="text-above-paragraph text-gray-900 mb-3">{achievement.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="paragraph-text text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualifications & Memberships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Qualifications */}
            <div className="bg-[#41729F]/10 p-8 md:p-12 rounded-3xl border border-[#41729F]/20">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-8 h-8 text-[#41729F]" />
                <h3 className="section-title text-gray-900">Qualifications</h3>
              </div>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#41729F] rounded-full mt-3"></div>
                    <p className="paragraph-text text-gray-700">{qualification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-[#E15192]/10 p-8 md:p-12 rounded-3xl border border-[#E15192]/20">
              <div className="flex items-center space-x-3 mb-8">
                <Users className="w-8 h-8 text-[#E15192]" />
                <h3 className="section-title text-gray-900">Professional Memberships</h3>
              </div>
              <div className="space-y-4">
                {memberships.map((membership, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#E15192] rounded-full mt-3"></div>
                    <p className="paragraph-text text-gray-700">{membership}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#41729F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="section-title md:text-4xl text-white mb-4">Our Impact</h3>
            <p className="text-white/80 text-above-paragraph">Making a difference in cancer care across India</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="section-title md:text-5xl text-white mb-2">10,000+</div>
              <div className="text-white/80 paragraph-text">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="section-title md:text-5xl text-white mb-2">98%</div>
              <div className="text-white/80 paragraph-text">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="section-title md:text-5xl text-white mb-2">30+</div>
              <div className="text-white/80 paragraph-text">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="section-title md:text-5xl text-white mb-2">5</div>
              <div className="text-white/80 paragraph-text">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Phone className="w-8 h-8 text-[#41729F]" />
              <h3 className="text-above-paragraph md:text-3xl text-gray-900">Get in Touch</h3>
            </div>
            
            <p className="paragraph-text text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to start your healing journey? Contact Dr. Vijay Anand Reddy for expert cancer care and consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="tel:+919676720002"
                className="border-2 border-[#41729F] text-[#41729F] hover:bg-[#41729F] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;