"use client";

import { Carousel } from "flowbite-react";
import carousel1 from '/public/pictures/foto1.jpg';
import carousel2 from '/public/pictures/foto2.jpg';
import carousel3 from '/public/pictures/foto3.jpg';
import carousel4 from '/public/pictures/foto4.jpg';
import carousel5 from '/public/pictures/foto17.jpg';
import carousel6 from '/public/pictures/foto6.jpg';
import carousel7 from '/public/pictures/foto18.jpg';
import carousel8 from '/public/pictures/foto8.jpg';
import carousel9 from '/public/pictures/foto9.jpg';
import carousel10 from '/public/pictures/foto10.jpg';
import carousel11 from '/public/pictures/foto11.jpg';
import carousel12 from '/public/pictures/foto12.jpg';
import carousel13 from '/public/pictures/foto13.jpg';
import carousel14 from '/public/pictures/foto14.jpg';

function AllPhotosCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={carousel1} alt="photo1" />
        <img src={carousel2} alt="photo2" />
        <img src={carousel3} alt="photo3" />
        <img src={carousel4} alt="photo4" />
        <img src={carousel5} alt="photo5" />
        <img src={carousel6} alt="photo6" />
        <img src={carousel7} alt="photo7" />
        <img src={carousel8} alt="photo8" />
        <img src={carousel9} alt="photo9" />
        <img src={carousel10} alt="photo10" />
        <img src={carousel11} alt="photo11" />
        <img src={carousel12} alt="photo12" />
        <img src={carousel13} alt="photo13" />
        <img src={carousel14} alt="photo14" />



        
      </Carousel>
    </div>
  );
}

export default AllPhotosCarousel;
