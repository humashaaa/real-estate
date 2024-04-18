import { Swiper, SwiperSlide } from "swiper/react";
// import { useState } from "react";

import "swiper/css";
import "swiper/css/bundle";
// import {  useState } from 'react';

import img1 from '../assets/tropical-palm-luxury-tree-blue.jpg'
import img2 from '../assets/roberto-nickson-YG2MysGbT_M-unsplash.jpg'
import img3 from '../assets/arkady-lukashov-ysN7dkne160-unsplash.jpg'
import img4 from '../assets/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv.jpg'
import img5 from '../assets/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg'
import img6 from '../assets/dinuka-lankaloka-pm3vGgDnb3o-unsplash.jpg'









import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const Swipper = () => {


    return (
        <div className=" mt-20 mb-16">
        <Swiper

navigation={true} 
modules={[Navigation]}

          loop={true}
        
        >
          <SwiperSlide>
            <img className="w-2/3 h-96 mx-auto" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-2/3 h-96 mx-auto" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-2/3 h-96 mx-auto" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-2/3 h-96 mx-auto" src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-2/3 h-96 mx-auto" src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-2/3 h-96 mx-auto" src={img6} />
          </SwiperSlide>
          
        </Swiper>
       
      </div>
    );
};

export default Swipper;