import React from 'react';

const HomeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/dr-gallery.png",
      alt: "Dr. Vijay Anand Reddy Clinical Pioneer Award"
    },
    {
      id: 2,
      src: "/dr-gallery1.png", 
      alt: "Award ceremony recognition"
    },
    {
      id: 3,
      src: "/dr-gallery2.png",
      alt: "International conference presentation"
    },
    {
      id: 4,
      src: "/dr-gallery3.png",
      alt: "Professional achievement ceremony"
    },
    {
      id: 5,
      src: "/dr-gallery4.png",
      alt: "Medical excellence certificate"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Medical professional recognition"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Healthcare conference"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Medical excellence award"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional achievement"
    }
  ];

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-[#E15192]"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E15192]/0 via-transparent to-[#41729F]/0 group-hover:from-[#E15192]/20 group-hover:to-[#41729F]/20 transition-all duration-500"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-[#41729F] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#E15192] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;