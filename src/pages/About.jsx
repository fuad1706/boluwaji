import React from "react";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Section 1 */}
      <section className="w-full py-14 px-6 bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src="/images/1.jpg"
            alt="bolu"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
          <p
            className="text-gray-800 leading-relaxed text-base md:text-lg md:w-[40%] md:mt-[270px]"
            data-aos="fade-left"
          >
            I am a multi-disciplinary creative professional, storyteller, visual
            artist, and creative strategist, driven by purpose, cultural impact,
            and the transformative power of narrative.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full py-16 px-6 bg-[#F3F4F6]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
          <img
            src="/images/2.jpg"
            alt="bolu2"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-left"
          />
          <p
            className="text-gray-700 leading-relaxed text-base md:text-lg md:w-[40%] md:mt-[50px]"
            data-aos="fade-right"
          >
            With over a decade of experience spanning media, creative direction,
            and cross-functional leadership, my work thrives at the intersection
            of artistic expression and strategic vision. I don't just create
            visuals; I craft immersive experiences that evoke thought, awaken
            empathy, and catalyze meaningful dialogue.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 px-6 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#333333] text-white">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src="/images/3.jpg"
            alt="bolu3"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
          <p
            className="leading-relaxed text-base md:text-lg md:w-[40%] md:mt-[270px]"
            data-aos="fade-left"
          >
            As a visual artist, my creative ethos is rooted in the belief that
            images, when orchestrated with intention, can transcend language and
            time. My approach blends composition, light, and emotion to
            construct visual narratives that are both aesthetically compelling
            and deeply human.
          </p>
        </div>
      </section>
      {/* Section 4 */}
      <section className="w-full py-16 px-6 bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <p
            className="leading-relaxed text-base md:text-lg md:w-[40%] md:mt-[30px] "
            data-aos="fade-right"
          >
            This dedication to narrative integrity has earned recognition on
            notable platforms, including being named as Most Creative
            Photographer at the 2024 ACE Awards in Scotland, and a nomination
            for Creative of the Year at the 2025 Black Scottish Awards. These
            accolades are not just affirmations of skill but of my enduring
            commitment to creativity that is anchored in authenticity, cultural
            relevance, and purpose-driven storytelling.
          </p>

          <img
            src="/images/4.jpg"
            alt="bolu4"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
        </div>
      </section>
      {/* Section 5 */}
      <section className="w-full py-16 px-6 bg-[#F3F4F6]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src="/images/5.jpg"
            alt="bolu5"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-left"
          />
          <p
            className="leading-relaxed text-base md:text-lg md:w-[40%] md:mt-[30px] "
            data-aos="fade-right"
          >
            As a creative director of Nakestudios, my commitment to creative
            empowerment also finds expression through iCre8 Conference, a
            visionary platform I founded to amplify emerging voices and
            intergenerational dialogue within the creative economy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
