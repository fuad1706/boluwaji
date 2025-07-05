import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageUrls = [
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_The_Spectrum_of_Silence__AB_fngedu.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714171/Alice_the_Princess_of_the_West_XXO_sbfndn.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714169/_Tuareg_Mbani__XYZ_op1i35.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_Stripes_of_Unit__vnxie5.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714167/_Tuareg_Mbani__XOX_q5dnut.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714164/A_Room_Made_of_Her_AY_q3zhao.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714163/_Oculon__nciz90.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714153/_Tuareg_Mbani__XYX_nnerco.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714169/Alice_the_Princess_of_the_West_XOX_yb96vf.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714151/_Tuareg_Mbani__XXX_e7bo3s.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714149/_The_Spectrum_of_Silence__AO_msgzvx.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_Echoes_of_Dawn__BNX_whqyfm.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_The_Spectrum_of_Silence__AC_hq3osd.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714148/_Echoes_of_Dawn__BDC_vkq41l.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714147/_The_Indigo_Testament__hihixz.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714145/_Emerald_Whispers__szxafx.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714319/_Datara__nzk2mq.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714331/Fragments_of_a_Burning_Alphabet_btzogg.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714319/Soundscape_of_an_Aerial_Dream_hxnxdp.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714316/_Alice__The_princess_of_the_west_tavscn.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714316/The_beginning_of_Life_bimlet.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714309/_Crimson_Reverie__vleytf.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714215/Syntax_of_Her_Silence_bsq4n7.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714189/Floating_Colossus_XYZ_hoa8wk.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714189/Before_the_Vision_XYZ_jgc6cv.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714186/Before_the_Vision__XOX_exolt6.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714185/Spectral_Sojourn___oklnde.png",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714185/Before_the_Vision_XXO_s7obqx.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714183/A_Room_Made_of_Her_AX_bbru5t.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714182/Floating_Colossus_XYX_tch3pl.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714181/Alice_the_Princess_of_the_West_XXX_nptdfr.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714178/Floating_Colossus_XXX_s0zwmn.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714174/Alice_the_Princess_of_the_West_XYZ_krpnvb.jpg",
  "https://res.cloudinary.com/dlzna5jba/image/upload/v1751714171/_Velora_Lilt__lk8f8p.jpg",
];

const VisualArt = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {imageUrls.map((url, i) => (
          <div
            key={i}
            onClick={() => {
              setOpen(true);
              setIndex(i);
            }}
            className="h-60 sm:h-64 md:h-72 overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            <img
              src={url}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="w-full h-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={imageUrls.map((url) => ({ src: url }))}
      />
    </>
  );
};

export default VisualArt;
