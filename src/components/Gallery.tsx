import React, { useState } from 'react';
import { Award, Calendar, Users, X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Clinical Pioneer Award",
      description: "Dr. Vijay Anand Reddy receiving the Clinical Pioneer Award for outstanding contributions to oncology",
      category: "Awards",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "International Conference",
      description: "Speaking at the International Oncology Conference in Goa, sharing expertise with global medical professionals",
      category: "Conferences",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Medical Excellence Recognition",
      description: "Recognition ceremony for excellence in cancer treatment and patient care at Apollo Hospital",
      category: "Recognition",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Professional Achievement",
      description: "Celebrating 30+ years of dedicated service in oncology with distinguished colleagues",
      category: "Achievements",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3279198/pexels-photo-3279198.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Certificate of Appreciation",
      description: "Lions Club International recognition for outstanding service and dedication to healthcare",
      category: "Certificates",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3279199/pexels-photo-3279199.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Community Service Award",
      description: "Recognition for exceptional community service and charitable healthcare initiatives",
      category: "Community",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const categories = ["All", "Awards", "Conferences", "Recognition", "Achievements", "Certificates", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Awards": "bg-[#E15192] text-white",
      "Conferences": "bg-[#41729F] text-white", 
      "Recognition": "bg-[#E15192] text-white",
      "Achievements": "bg-[#41729F] text-white",
      "Certificates": "bg-[#E15192] text-white",
      "Community": "bg-[#41729F] text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            Professional <span className="text-[#41729F]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            A visual journey through achievements, recognitions, and memorable moments in oncology excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-[#41729F] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-[#41729F]/10 hover:text-[#41729F] border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold mb-2 ${getCategoryColor(item.category)}`}>
                      {item.icon}
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <button
                  onClick={() => openModal(item.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 hover:scale-110"
                >
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-above-paragraph text-gray-900 mb-3 group-hover:text-[#41729F] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="paragraph-text text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#41729F]/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-above-paragraph text-gray-500 mb-2">No items found</h3>
            <p className="paragraph-text text-gray-400">Try selecting a different category</p>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Award className="w-8 h-8 text-[#E15192] mx-auto mb-3" />
            <div className="section-title text-[#41729F] mb-2">25+</div>
            <div className="paragraph-text text-gray-600">Awards Received</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Users className="w-8 h-8 text-[#41729F] mx-auto mb-3" />
            <div className="section-title text-[#E15192] mb-2">100+</div>
            <div className="paragraph-text text-gray-600">Conferences</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Calendar className="w-8 h-8 text-[#E15192] mx-auto mb-3" />
            <div className="section-title text-[#41729F] mb-2">30+</div>
            <div className="paragraph-text text-gray-600">Years Experience</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Award className="w-8 h-8 text-[#41729F] mx-auto mb-3" />
            <div className="section-title text-[#E15192] mb-2">50+</div>
            <div className="paragraph-text text-gray-600">Recognitions</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            {(() => {
              const item = galleryItems.find(item => item.id === selectedImage);
              return item ? (
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${getCategoryColor(item.category)}`}>
                      {item.icon}
                      <span>{item.category}</span>
                    </div>
                    <h3 className="text-above-paragraph text-gray-900 mb-2">{item.title}</h3>
                    <p className="paragraph-text text-gray-600">{item.description}</p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;