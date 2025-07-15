import React from "react";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <div className="flex pt-10 flex-col items-center justify-center md:pt-0">
      {/* Section 1 */}
      <section className="w-full py-14 px-6 bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src="/images/1.jpg"
            alt="bolu"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
          <div className="md:w-[40%] md:mt-[270px]" data-aos="fade-left">
            <p className="text-gray-800 leading-8 text-lg md:text-xl font-light tracking-wide">
              I am a{" "}
              <span className="font-semibold text-gray-900">
                multi-disciplinary creative professional
              </span>
              , storyteller, visual artist, and creative strategist, driven by
              purpose, cultural impact, and the{" "}
              <em className="italic text-gray-700">
                transformative power of narrative
              </em>
              .
            </p>
          </div>
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
          <div className="md:w-[40%] md:mt-[50px]" data-aos="fade-right">
            <p className="text-gray-700 leading-8 text-lg md:text-xl font-light tracking-wide mb-4">
              With{" "}
              <span className="font-semibold text-gray-800">
                over a decade of experience
              </span>{" "}
              spanning media, creative direction, and cross-functional
              leadership, my work thrives at the intersection of artistic
              expression and strategic vision.
            </p>
            <p className="text-gray-600 leading-7 text-base md:text-lg italic border-l-4 border-blue-300 pl-4">
              I don't just create visuals; I craft immersive experiences that
              evoke thought, awaken empathy, and catalyze meaningful dialogue.
            </p>
          </div>
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
          <div className="md:w-[40%] md:mt-[270px]" data-aos="fade-left">
            <Quote className="w-8 h-8 text-blue-300 mb-4 opacity-70" />
            <p className="leading-8 text-lg md:text-xl font-light tracking-wide text-gray-100">
              As a visual artist, my creative ethos is rooted in the belief that
              <span className="font-medium text-white">
                {" "}
                images, when orchestrated with intention
              </span>
              , can transcend language and time. My approach blends composition,
              light, and emotion to construct visual narratives that are both
              aesthetically compelling and deeply human.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="w-full py-16 px-6 bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="md:w-[40%] md:mt-[30px]" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
              Recognition & Awards
            </h3>
            <p className="leading-8 text-lg md:text-xl font-light tracking-wide text-gray-700 mb-4">
              This dedication to narrative integrity has earned recognition on
              notable platforms, including:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600 leading-7">
                  <span className="font-semibold text-gray-800">
                    Most Creative Photographer
                  </span>{" "}
                  at the 2024 ACE Awards in Scotland
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600 leading-7">
                  Nominated for{" "}
                  <span className="font-semibold text-gray-800">
                    Creative of the Year
                  </span>{" "}
                  at the 2025 Black Scottish Awards
                </p>
              </div>
            </div>
            <p className="text-gray-500 leading-7 text-base italic mt-4 pl-4 border-l-2 border-gray-300">
              These accolades are affirmations of my enduring commitment to
              creativity anchored in authenticity, cultural relevance, and
              purpose-driven storytelling.
            </p>
          </div>
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
          <div className="md:w-[40%] md:mt-[30px]" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
              Leadership & Innovation
            </h3>
            <p className="leading-8 text-lg md:text-xl font-light tracking-wide text-gray-700">
              As creative director of{" "}
              <span className="font-semibold text-gray-800">Nakestudios</span>,
              my commitment to creative empowerment finds expression through
              <span className="font-semibold text-blue-600">
                {" "}
                iCre8 Conference
              </span>
              —a visionary platform I founded to amplify emerging voices and
              foster intergenerational dialogue within the creative economy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="w-full py-16 px-6 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#333333] text-white">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="md:w-[40%] md:mt-[30px]" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              iCre8 Conference Impact
            </h3>
            <p className="leading-8 text-lg md:text-xl font-light tracking-wide text-gray-100 mb-4">
              The inaugural{" "}
              <span className="font-medium text-blue-300">
                2024 edition in Nigeria
              </span>{" "}
              explored:
            </p>
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
              <p className="text-blue-200 italic text-lg leading-7">
                "Exploring the Transformative Power of Creativity in Shaping the
                Future of Industries"
              </p>
            </div>
            <p className="text-gray-300 leading-7 text-base">
              Drawing visionaries from communications, finance, technology,
              visual media, and the arts, the conference underscores my belief
              that{" "}
              <em>
                when creativity is shared, it becomes a catalyst for change,
                growth, and community transformation
              </em>
              .
            </p>
          </div>
          <img
            src="/images/6.jpg"
            alt="bolu6"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
        </div>
      </section>

      {/* Section 7 */}
      <section className="w-full py-14 px-6 bg-gradient-to-r from-[#FFF1EB] to-[#ACE0F9]">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src="/images/7.jpg"
            alt="bolu7"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
          <div className="md:w-[40%] md:mt-[30px]" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
              Professional Excellence
            </h3>
            <p className="leading-8 text-lg md:text-xl font-light tracking-wide text-gray-700 mb-4">
              I am proud to engage with professional communities that elevate
              excellence and representation:
            </p>
            <div className="space-y-2">
              {[
                "Royal Photographic Society",
                "The Creative Eye Group",
                "Black Professionals UK",
              ].map((org, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-medium">{org}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 leading-7 text-base italic mt-4">
              These affiliations refine my artistic practice and deepen my
              resolve to foster diversity, cultural integrity, and lifelong
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - Updated with Animated Gallery */}
      <section className="w-full py-16 px-6 bg-[#F3F4F6] overflow-hidden">
        <div className="w-full max-w-5xl mx-auto ">
          {/* Mobile: Gallery First, Text Second */}
          <div className="block md:hidden ">
            {/* Mobile Gallery */}
            <div className="relative h-80 mb-8 flex-col-reverse">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                {/* Main Preview Images */}
                {[
                  "/images/2.jpg",
                  "/images/4.jpg",
                  "/images/6.jpg",
                  "/images/8.jpg",
                  "/images/9.jpg",
                  "/images/5.jpg",
                  "/images/3.jpg",
                  "/images/7.jpg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
                    style={{
                      opacity: 1,
                      animation: `slideShow 16s infinite`,
                      animationDelay: `${index * 2}s`,
                      zIndex: 8 - index,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                  </div>
                ))}

                {/* Mobile Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">
                      Creative Portfolio Gallery
                    </h4>
                    <p className="text-xs text-gray-600">
                      Visual narratives and artistic expressions
                    </p>
                  </div>
                </div>

                {/* Mobile Progress Indicators */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex gap-1.5">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-white/50 relative overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 bg-white rounded-full"
                          style={{
                            animation: `progressBar 16s infinite`,
                            animationDelay: `${index * 2}s`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Text Content */}
            <div data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
                Core Values
              </h3>
              <p className="leading-8 text-lg font-light tracking-wide text-gray-700 mb-6">
                At the heart of my creative journey are values that transcend
                mediums:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Excellence",
                  "Authenticity",
                  "Empathy",
                  "Patience",
                  "Inclusive Impact",
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-70 px-3 py-2 rounded-lg text-center"
                  >
                    <span className="text-gray-700 font-medium text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border-l-4 border-blue-400">
                <p className="text-gray-700 leading-7 text-base italic">
                  Whether directing visual narratives, curating multisensory
                  exhibitions, or developing content that transcends borders, I
                  lead with vision and intentionality.
                  <span className="font-semibold text-gray-800">
                    {" "}
                    I am not just telling stories—I am architecting experiences
                    that inspire, challenge, and elevate.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Side by Side Layout */}
          <div className="hidden md:flex flex-row gap-8 items-start">
            <div className="w-[40%] mt-[30px]" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
                Core Values
              </h3>
              <p className="leading-8 text-lg md:text-xl font-light tracking-wide text-gray-700 mb-6">
                At the heart of my creative journey are values that transcend
                mediums:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Excellence",
                  "Authenticity",
                  "Empathy",
                  "Patience",
                  "Inclusive Impact",
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-70 px-3 py-2 rounded-lg text-center"
                  >
                    <span className="text-gray-700 font-medium text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border-l-4 border-blue-400">
                <p className="text-gray-700 leading-7 text-base italic">
                  Whether directing visual narratives, curating multisensory
                  exhibitions, or developing content that transcends borders, I
                  lead with vision and intentionality.
                  <span className="font-semibold text-gray-800">
                    {" "}
                    I am not just telling stories—I am architecting experiences
                    that inspire, challenge, and elevate.
                  </span>
                </p>
              </div>
            </div>

            {/* Desktop Gallery */}
            <div className="w-[60%] relative h-[500px]">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                {/* Main Preview Images */}
                {[
                  "/images/2.jpg",
                  "/images/4.jpg",
                  "/images/6.jpg",
                  "/images/8.jpg",
                  "/images/9.jpg",
                  "/images/5.jpg",
                  "/images/3.jpg",
                  "/images/7.jpg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
                    style={{
                      opacity: 1,
                      animation: `slideShow 16s infinite`,
                      animationDelay: `${index * 2}s`,
                      zIndex: 8 - index,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                  </div>
                ))}

                {/* Desktop Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Creative Portfolio Gallery
                    </h4>
                    <p className="text-sm text-gray-600">
                      A showcase of visual narratives and artistic expressions
                    </p>
                  </div>
                </div>

                {/* Desktop Progress Indicators */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="flex gap-2">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 rounded-full bg-white/50 relative overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 bg-white rounded-full"
                          style={{
                            animation: `progressBar 16s infinite`,
                            animationDelay: `${index * 2}s`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation Keyframes */}
        <style jsx>{`
          @keyframes slideShow {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            10% {
              opacity: 1;
              transform: scale(1.02);
            }
            12.5% {
              opacity: 0;
              transform: scale(1.05);
            }
            87.5% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes progressBar {
            0% {
              width: 0%;
            }
            10% {
              width: 100%;
            }
            12.5% {
              width: 100%;
            }
            100% {
              width: 0%;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default About;
