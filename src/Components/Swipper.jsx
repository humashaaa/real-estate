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








// Import Swiper React components

// Import Swiper styles
// import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// import 'swiper/css/thumbs';


// import required modules
// import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import { Navigation } from 'swiper/modules';


const Swipper = () => {

    // const [thumbsSwiper, setThumbsSwiper] = useState(null);






    return (
        <div className=" mt-20 mb-16">
        <Swiper

navigation={true} 
modules={[Navigation]}




        //   style={{
        //     '--swiper-navigation-color': '#fff',
        //     '--swiper-pagination-color': '#fff',
        //   }}
          loop={true}
        //   spaceBetween={10}
        //   navigation={true}
        //   thumbs={{ swiper: thumbsSwiper }}
        //   modules={[ FreeMode, Navigation, Thumbs]}
        //   className="mySwiper2"
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
        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} />
          </SwiperSlide>
         
        </Swiper> */}
      </div>
    );
};

export default Swipper;