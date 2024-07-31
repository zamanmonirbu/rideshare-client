import React from 'react';
import { useInView } from 'react-intersection-observer';
import serviceImage from '../component/Image/service-image.png'; // Replace with your image path

const OurServices = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.5,
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-24 py-12 md:py-20">
      <div
        ref={leftRef}
        className={`w-full md:w-1/2 transition-opacity duration-1000 ${
          leftInView ? 'opacity-100' : 'opacity-0'
        } mb-8 md:mb-0 md:mr-8`}
      >
        <img src={serviceImage} alt="Our Service" className="w-full h-auto rounded-lg" />
      </div>
      <div
        ref={rightRef}
        className={`w-full md:w-1/2 transition-opacity duration-1000 ${
          rightInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Our Services</h2>
        <p className="text-lg mb-4 text-center md:text-left">
          We offer a range of high-quality services tailored to meet your needs. Whether you're looking for transportation, logistics, or other services, we have the expertise and resources to deliver exceptional results. Our team of professionals is dedicated to providing you with the best possible experience.
        </p>
        <p className="text-lg text-center md:text-left">
          Contact us today to learn more about how we can help you achieve your goals. We look forward to working with you!
        </p>
      </div>
    </div>
  );
};

export default OurServices;
