import React from 'react';
import RideOptions from '../../Screen/RideOperation';
import OurServices from '../../Screen/OurServices';
import ImageGallery from '../../Screen/ImageGallery';
import CommentSection from '../../Screen/CommentSection';

const Home = () => {
    return (
        <div>
            <RideOptions/>
            <ImageGallery/>
            <OurServices/>
            <CommentSection/>
        </div>
    );
};

export default Home;