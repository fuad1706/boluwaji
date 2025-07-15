import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// 1️⃣ SECTION DATA: Replace with your actual content
const sectionsData = [
  {
    title: "The Spectrum of Silence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_The_Spectrum_of_Silence__AB_fngedu.jpg",
        title: "Spectrum - AB",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714149/_The_Spectrum_of_Silence__AO_msgzvx.jpg",
        title: "Spectrum - AO",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_The_Spectrum_of_Silence__AC_hq3osd.jpg",
        title: "Spectrum - AC",
      },
    ],
  },
  {
    title: "Tuareg Mbani",
    description:
      "An exploration of identity and resilience through cultural expression.",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714169/_Tuareg_Mbani__XYZ_op1i35.jpg",
        title: "Tuareg - XYZ",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714167/_Tuareg_Mbani__XOX_q5dnut.jpg",
        title: "Tuareg - XOX",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_Tuareg_Mbani__XYX_nnerco.jpg",
        title: "Tuareg - XYX",
      },
    ],
  },
  {
    title: "Echoes of Dawn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_Echoes_of_Dawn__BNX_whqyfm.jpg",
        title: "_Echoes_of_Dawn__BNX_whqyfm",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_Echoes_of_Dawn__BDC_vkq41l.jpg",
        title: "_Echoes_of_Dawn__BDC_vkq41l",
      },
    ],
  },

  {
    title: "Alice the Princess of the West",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714181/Alice_the_Princess_of_the_West_XXX_nptdfr.jpg",
        title: "Alice1",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714174/Alice_the_Princess_of_the_West_XYZ_krpnvb.jpg",
        title: "Alice2",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714171/Alice_the_Princess_of_the_West_XXO_sbfndn.jpg",
        title: "Alice3",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714169/Alice_the_Princess_of_the_West_XOX_yb96vf.jpg",
        title: "Alice4",
      },
    ],
  },

  {
    title: "Oculon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714163/_Oculon__nciz90.jpg",
        title: "Oculon",
      },
    ],
  },

  {
    title: "The Stripe of Unit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_Stripes_of_Unit__vnxie5.jpg",
        title: "Stripe of Unit",
      },
    ],
  },

  {
    title: "The Indigo Testament",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714147/_The_Indigo_Testament__hihixz.jpg",
        title: "Indigo",
      },
    ],
  },

  {
    title: "Emerald Whisper",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714145/_Emerald_Whispers__szxafx.jpg",
        title: "Emerald",
      },
    ],
  },
  {
    title: "Before the Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714189/Before_the_Vision_XYZ_jgc6cv.jpg",
        title: "Before the Vision",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714186/Before_the_Vision__XOX_exolt6.jpg",
        title: "Before the Vision",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714185/Before_the_Vision_XXO_s7obqx.jpg",
        title: "Before the Vision",
      },
    ],
  },

  {
    title: "Spectral Sojourn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714185/Spectral_Sojourn___oklnde.png",
        title: "Sojourn",
      },
    ],
  },

  {
    title: "Syntax of her Silence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714215/Syntax_of_Her_Silence_bsq4n7.jpg",
        title: "Syntax",
      },
    ],
  },

  {
    title: "Before the Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714189/Before_the_Vision_XYZ_jgc6cv.jpg",
        title: "Before the Vision",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714186/Before_the_Vision__XOX_exolt6.jpg",
        title: "Before the Vision",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714185/Before_the_Vision_XXO_s7obqx.jpg",
        title: "Before the Vision",
      },
    ],
  },
];

// 2️⃣ REUSABLE COMPONENT
const VisualArtSection = ({ section, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-100";

  return (
    <section className={`${bgClass}`}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-10 md:px-20">
        {/* Image Slider */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {section.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    setPhotoIndex(i);
                    setIsOpen(true);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={section.images}
          plugins={[Captions]}
        />
      </div>
    </section>
  );
};

// 3️⃣ MAIN COMPONENT
const VisualArt = () => {
  return (
    <>
      {sectionsData.map((section, idx) => (
        <VisualArtSection key={idx} section={section} index={idx} />
      ))}
    </>
  );
};

export default VisualArt;
