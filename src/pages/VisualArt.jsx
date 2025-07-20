import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const sectionsData = [
  {
    title: "Echoes of Dawn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_Echoes_of_Dawn__BNX_whqyfm.jpg",
        title: "Echoes of Dawn BNX",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_Echoes_of_Dawn__BDC_vkq41l.jpg",
        title: "Echoes of Dawn BDC",
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
        title: "Emerald Whispers",
      },
    ],
  },
  {
    title: "Velora Lilt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714171/_Velora_Lilt__lk8f8p.jpg",
        title: "Velora Lilt",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753042604/Velora_Lilt_wax_kkuyv1.jpg",
        title: "Velora Lilt wax",
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
        title: "Spectral Sojourn",
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
        title: "Alice the Princess of the West XXX",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714174/Alice_the_Princess_of_the_West_XYZ_krpnvb.jpg",
        title: "Alice the Princess of the West XYZ",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714316/_Alice__The_princess_of_the_west_tavscn.jpg",
        title: "Alice the Princess of the West",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714171/Alice_the_Princess_of_the_West_XXO_sbfndn.jpg",
        title: "Alice the Princess of the West XXO",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714169/Alice_the_Princess_of_the_West_XOX_yb96vf.jpg",
        title: "Alice the Princess of the West XOX",
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
        title: "The Indigo Testament",
      },
    ],
  },
  {
    title: "The Spectrum of Silence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_The_Spectrum_of_Silence__AB_fngedu.jpg",
        title: "The Spectrum of Silence AB",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714149/_The_Spectrum_of_Silence__AO_msgzvx.jpg",
        title: "The Spectrum of Silence AO",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_The_Spectrum_of_Silence__AC_hq3osd.jpg",
        title: "The Spectrum of Silence AC",
      },
    ],
  },
  {
    title: "A Room Made of Her",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714183/A_Room_Made_of_Her_AX_bbru5t.jpg",
        title: "A Room Made of Her AX",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714164/A_Room_Made_of_Her_AY_q3zhao.jpg",
        title: "A Room Made of Her AY",
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
    title: "The Floating Colossus",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714189/Floating_Colossus_XYZ_hoa8wk.jpg",
        title: "Floating Colossus XYZ",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714182/Floating_Colossus_XYX_tch3pl.jpg",
        title: "Floating Colossus XYX",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714178/Floating_Colossus_XXX_s0zwmn.jpg",
        title: "Floating Colossus XXX",
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
        title: "Tuareg Mbani XYZ",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714167/_Tuareg_Mbani__XOX_q5dnut.jpg",
        title: "Tuareg Mbani XOX",
      },
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_Tuareg_Mbani__XYX_nnerco.jpg",
        title: "Tuareg Mbani XYX",
      },
    ],
  },

  {
    title: "St. Matthew's Through the Haze of Time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753042936/St._Matthew_s_Through_the_Haze_of_Time_yh1o8p.png",
        title: "St. Matthew's Through the Haze of Time",
      },
    ],
  },

  {
    title: "Face of Flames",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753042570/Face_of_flame_bub9hz.jpg",
        title: "Face of flame",
      },
    ],
  },

  {
    title: "Echoes of Arboretum Clock Tower",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753042570/Echoes_of_Arboretum_Clock_Tower_osyqya.jpg",
        title: "Echoes of Arboretum Clock Tower",
      },
    ],
  },
  {
    title: "Soundscape of an Aerial Dream",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714319/Soundscape_of_an_Aerial_Dream_hxnxdp.jpg",
        title: "Soundscape of an Aerial Dream",
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
        title: "Syntax of Her Silence",
      },
    ],
  },
  {
    title: "Crimson Reverie",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714309/_Crimson_Reverie__vleytf.jpg",
        title: "Crimson Reverie",
      },
    ],
  },
  {
    title: "Toby Carvery Twilight",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753042572/Toby_Carvery_Twilight_covhyh.jpg",
        title: "Toby Carvery Twilight",
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
    title: "Kato",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753044255/Kato_etgnrv.png",
        title: "Kato",
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
    title: "Datara",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714319/_Datara__nzk2mq.jpg",
        title: "Datara",
      },
    ],
  },
  {
    title: "Fragments of a Burning Alphabet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714331/Fragments_of_a_Burning_Alphabet_btzogg.jpg",
        title: "Fragments of a Burning Alphabet",
      },
    ],
  },
  {
    title: "Sister Dora 2000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in sunt magni vitae illo...",
    images: [
      {
        src: "https://res.cloudinary.com/dlzna5jba/image/upload/v1753042574/Sister_Dora_2000_bjwipe.jpg",
        title: "Sister Dora 2000",
      },
    ],
  },
];

const VisualArtSection = ({ section, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const bgClass = index % 2 === 0 ? "bg-white" : "bg-gray-100";

  return (
    <section className={`${bgClass}`}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-14 md:px-20">
        {/* Image Slider */}
        <div className="w-full md:w-1/3">
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
        <div className="w-full md:w-1/3 text-center md:text-left">
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
