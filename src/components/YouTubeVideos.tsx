import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

const YouTubeVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Understanding Cancer: Early Detection & Prevention",
      description: "Dr. Vijay Anand Reddy explains the importance of early cancer detection and prevention strategies.",
      thumbnail: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12:45",
      views: "125K",
      category: "Education"
    },
    {
      id: 2,
      title: "Advanced Radiation Therapy Techniques",
      description: "Exploring modern radiation therapy methods including IMRT and IGRT for precise cancer treatment.",
      thumbnail: "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "18:30",
      views: "89K",
      category: "Treatment"
    },
    {
      id: 3,
      title: "Immunotherapy: The Future of Cancer Treatment",
      description: "Learn about breakthrough immunotherapy treatments and their role in modern oncology.",
      thumbnail: "https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "15:20",
      views: "156K",
      category: "Innovation"
    },
    {
      id: 4,
      title: "Patient Success Stories: Hope & Healing",
      description: "Inspiring stories of cancer survivors and their journey to recovery with expert care.",
      thumbnail: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "22:15",
      views: "203K",
      category: "Stories"
    },
    {
      id: 5,
      title: "Proton Therapy: Precision Cancer Treatment",
      description: "Understanding the benefits and applications of proton therapy in cancer treatment.",
      thumbnail: "https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "16:40",
      views: "78K",
      category: "Technology"
    },
    {
      id: 6,
      title: "Cancer Prevention Through Lifestyle",
      description: "Practical tips and lifestyle changes that can help prevent cancer and promote overall health.",
      thumbnail: "https://images.pexels.com/photos/3279198/pexels-photo-3279198.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "14:25",
      views: "167K",
      category: "Prevention"
    }
  ];

  const getVisibleVideos = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) return 3; // Desktop: 3 cards
    if (screenWidth >= 768) return 2;  // Tablet: 2 cards
    return 1; // Mobile: 1 card
  };

  const [visibleVideos, setVisibleVideos] = useState(getVisibleVideos());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleVideos(getVisibleVideos());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, videos.length - visibleVideos);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Education": "bg-[#41729F] text-white",
      "Treatment": "bg-[#E15192] text-white",
      "Innovation": "bg-[#41729F] text-white",
      "Stories": "bg-[#E15192] text-white",
      "Technology": "bg-[#41729F] text-white",
      "Prevention": "bg-[#E15192] text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title md:text-5xl text-gray-900 mb-6">
            YouTube <span className="text-[#41729F]">Videos</span>
          </h2>
          <div className="w-24 h-1 bg-[#41729F] mx-auto mb-8"></div>
          <p className="text-above-paragraph text-gray-600 max-w-3xl mx-auto">
            Educational content and insights from Dr. Vijay Anand Reddy on cancer care and treatment
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              currentIndex === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-white hover:bg-[#41729F] text-gray-600 hover:text-white hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              currentIndex >= maxIndex 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-white hover:bg-[#41729F] text-gray-600 hover:text-white hover:scale-110'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Video Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleVideos)}%)`,
                width: `${(videos.length / visibleVideos) * 100}%`
              }}
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / videos.length}%` }}
                >
                  <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-8 h-8 text-[#41729F] ml-1" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                        {video.duration}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(video.category)}`}>
                          {video.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-above-paragraph text-gray-900 mb-3 group-hover:text-[#41729F] transition-colors duration-300 line-clamp-2">
                        {video.title}
                      </h3>
                      
                      <p className="paragraph-text text-gray-600 mb-4 line-clamp-3">
                        {video.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="paragraph-text text-sm text-gray-500">
                          {video.views} views
                        </span>
                        
                        <button className="flex items-center space-x-2 text-[#41729F] hover:text-[#2d5a7a] transition-colors duration-300 group/btn">
                          <span className="paragraph-text font-semibold">Watch</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#41729F] hover:bg-[#2d5a7a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto">
            <span>View All Videos</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;