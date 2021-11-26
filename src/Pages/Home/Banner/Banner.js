import React from 'react';
import banner from '../../../Images/banner.jfif'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;