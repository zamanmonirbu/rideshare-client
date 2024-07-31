import React from 'react';
import image1 from '../component/Image/saftya.jpg'; // Replace with your image paths
import image2 from '../component/Image/safety_c.jpg';
import image3 from '../component/Image/safty3.jpg';
import image4 from '../component/Image/sasftu2.jpg';
import image5 from '../component/Image/safety_b.jpg';
import image6 from '../component/Image/safety_f.jpg';
import { useInView } from 'react-intersection-observer';

const ImageGallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  
  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={galleryRef} className={`bg-slate-50 py-10 transition-opacity duration-1000 ${galleryInView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 transition-all duration-2000 transform rounded-md pt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Here With You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`rounded shadow-lg transition-transform duration-1000 ${galleryInView ? 'transform translate-y-0' : 'transform -translate-y-10'}`}
            >
              <img 
                src={img} 
                alt={`img-${index}`} 
                className={`w-full ${index % 2 === 0 ? 'h-52' : 'h-64'} rounded`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
