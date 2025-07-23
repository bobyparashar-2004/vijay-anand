import React from 'react';
import { Heart, Users, Calendar, MapPin, Award, ArrowRight, Shield } from 'lucide-react';

const CSR = () => {
  const initiatives = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cure Foundation",
      description: "A dedicated foundation focused on providing free cancer screenings and treatment support to underprivileged communities.",
      impact: "10,000+ lives touched",
      color: "red"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cancer Vaccination Drive",
      description: "Comprehensive vaccination programs to prevent cancer, scheduled for February 4, 2025, reaching rural and urban communities.",
      impact: "5,000+ vaccinations planned",
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Whiteathon Run",
      description: "Annual awareness run promoting cancer prevention and early detection, bringing communities together for a noble cause.",
      impact: "2,000+ participants",
      color: "green"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Proton Center Tours",
      description: "Educational tours of advanced cancer treatment facilities to spread awareness about cutting-edge cancer care options.",
      impact: "500+ families educated",
      color: "purple"
    }
  ];

  const upcomingEvents = [
    {
      date: "Feb 4, 2025",
      title: "Cancer Vaccination Drive",
      location: "Multiple Centers, Hyderabad",
      type: "Vaccination"
    },
    {
      date: "Mar 15, 2025", 
      title: "Whiteathon Run 2025",
      location: "Gachibowli Stadium",
      type: "Awareness"
    },
    {
      date: "Apr 20, 2025",
      title: "Free Cancer Screening Camp",
      location: "Rural Health Centers",
      type: "Screening"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]",
        button: "bg-[#E15192] hover:bg-[#c13d7a]"
      },
      blue: {
        bg: "bg-[#41729F]/10", 
        icon: "text-[#41729F]",
        button: "bg-[#41729F] hover:bg-[#2d5a7a]"
      },
      green: {
        bg: "bg-[#41729F]/10",
        icon: "text-[#41729F]",
        button: "bg-[#41729F] hover:bg-[#2d5a7a]"
      },
      purple: {
        bg: "bg-[#E15192]/10",
        icon: "text-[#E15192]", 
        button: "bg-[#E15192] hover:bg-[#c13d7a]"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="csr" className="py-20 bg-white">

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Corporate Social <span className="text-[#41729F]">Responsibility</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Committed to making quality cancer care accessible to all through community outreach and social initiatives
          </p>
        </div>

        {/* CSR Initiatives */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {initiatives.map((initiative, index) => {
            const colorClasses = getColorClasses(initiative.color);
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className={`${colorClasses.bg} p-8`}>
                  <div className={`${colorClasses.icon} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {initiative.icon}
                  </div>
                  <h3 className="text-above-paragraph text-gray-900 mb-3">{initiative.title}</h3>
                  <div className="inline-block bg-white/80 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {initiative.impact}
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="paragraph-text text-gray-600 mb-6">{initiative.description}</p>
                  
                  <div className="flex space-x-3">
                    <button className={`flex-1 ${colorClasses.button} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                      <span>Support Initiative</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-[#41729F]/20">
          <div className="flex items-center space-x-3 mb-8">
            <Calendar className="w-8 h-8 text-[#41729F]" />
            <h3 className="section-title text-gray-900">Upcoming CSR Events</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="group bg-[#41729F]/10 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-[#41729F]/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#41729F]/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#41729F]" />
                  </div>
                  <div>
                    <div className="paragraph-text text-[#41729F]">{event.date}</div>
                    <div className="paragraph-text text-xs text-gray-500">{event.type}</div>
                  </div>
                </div>
                
                <h4 className="text-above-paragraph text-gray-900 mb-2 group-hover:text-[#41729F] transition-colors">
                  {event.title}
                </h4>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="paragraph-text text-sm">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
 

        {/* Call to Action */}
  
      </div>
    </section>
  );
};

export default CSR;