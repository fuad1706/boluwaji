import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // 👈 include Autoplay
import "swiper/css";
import "swiper/css/navigation";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const imageData = [
  {
    src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_The_Spectrum_of_Silence__AB_fngedu.jpg",
    title: "The Spectrum of Silence - AB",
  },
  {
    src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714149/_The_Spectrum_of_Silence__AO_msgzvx.jpg",
    title: "The Spectrum of Silence - AO",
  },
  {
    src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_The_Spectrum_of_Silence__AC_hq3osd.jpg",
    title: "The Spectrum of Silence - AC",
  },
];

const VisualArt = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-10 md:px-20">
      {/* Image Carousel */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Navigation, Autoplay]} // ✅ Include Autoplay
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000, // ✅ Slide every 3 seconds
            disableOnInteraction: false,
          }}
        >
          {imageData.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img.src}
                alt={img.title}
                className="rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-4">The Spectrum of Silence</h3>
        <p className="text-gray-600 text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt
          magni vitae illo, soluta officia, quibusdam corrupti doloremque
          aliquid repudiandae tempora sequi. Minus debitis voluptatem repellat
          maxime sequi molestiae?
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={imageData}
        plugins={[Captions]}
      />
    </div>
  );
};

export default VisualArt;
