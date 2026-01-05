import React from "react";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <div className="flex pt-10 flex-col items-center justify-center md:pt-0 overflow-x-hidden">
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
              I am an {""}
              <span className="font-semibold text-gray-900">
                award-winning fine art photographer, visual artist, and cultural
                strategist
              </span>{" "}
              working where art, heritage, and innovation meet. My work explores
              how images can carry memory, shape identity, and influence how
              communities see themselves,{" "}
              <em className="italic text-gray-700">
                their histories, and their future.
              </em>
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
              For{" "}
              <span className="font-semibold text-gray-800">
                more than a decade
              </span>{" "}
              I’ve worked across media, creative direction, talent development,
              and cross-functional leadership. I move between visual
              storytelling, cultural programming, and creative economy projects,
              building images, platforms, and experiences that connect people,
              places, and possibilities. I am known as a spirit of art, a voice
              of culture, and a hand of creativity.
            </p>
            {/* <p className="text-gray-600 leading-7 text-base md:text-lg italic border-l-4 border-blue-300 pl-4">
              I don't just create visuals; I craft immersive experiences that
              evoke thought, awaken empathy, and catalyze meaningful dialogue.
            </p> */}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 px-6 bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#333333] text-white">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
          <img
            src="https://res.cloudinary.com/dlzna5jba/image/upload/v1767254665/PXL_20251226_154928518.RAW-01.MP.COVER_2_zlxgbg.jpg"
            alt="bolu3"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-right"
          />
          <div className="md:w-[40%] md:mt-[100px]" data-aos="fade-left">
            <Quote className="w-8 h-8 text-blue-300 mb-4 opacity-70" />
            <p className="leading-6 text-lg md:text-xl font-light tracking-wide text-gray-100">
              I see visual art and photography as a language of culture.
              <span className="font-medium text-white">
                {" "}
                My creativity is built around the universe, creatures, everyday
                life, and cultural identity.
              </span>
            </p>
            <p className="mt-5">
              <span className="font-medium text-white">
                My work has been exhibited locally and internationally,
                including:
              </span>
              <ul className="mb-5 mt-5">
                <li className="italic">
                  ● Essence Exhibition - ArtlyMix, São Paulo{" "}
                  <a
                    href="https://www.artlymix.com/essenceexhibition/"
                    className="text-blue-800 underline"
                    target="_blank"
                  >
                    Essence Exhibition
                  </a>
                </li>
                <li className="italic">
                  ● Land/Sea/Sky - Fronteer Gallery, Sheffield{" "}
                  <a
                    href="https://www.youtube.com/watch?v=3SawWiVG20Y"
                    className="text-blue-800 underline"
                    target="_blank"
                  >
                    Quick tour 🎥 | 'Land/Sea/Sky' exhibition | Fronteer Gallery
                    August 2025
                  </a>
                </li>
                <li className="italic">
                  ● We Are Walsall - Walsall Society of Artists, West Midlands{" "}
                </li>
                <li className="italic">
                  ● The Color of Memory - Allora Gallery{" "}
                  <a
                    href="https://alloragallery.com/the-color-of-memory"
                    className="text-blue-800 underline italic"
                    target="_blank"
                  >
                    The Color of Memory
                  </a>
                </li>
                <li className="italic">
                  ● Digital Exhibition - Creative Eye Group, RPS Page 28-29{" "}
                  <a
                    href="https://issuu.com/royalphotographicsociety/docs/rps_creative_eye_magazine_98"
                    className="text-blue-800 underline italic"
                    target="_blank"
                  >
                    RPS Creative Eye Magazine 98 by Royal Photographic Society -
                    Issuu
                  </a>
                </li>
              </ul>

              <p className="italic text-white">
                I’ve also been featured in The Creative Eye Journal, a group
                within the Royal Photographic Society.
              </p>
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
              My approach to visual storytelling has received recognition such
              as:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600 leading-7">
                  <span className="font-semibold text-gray-800">
                    Finalist, Creative of the Year
                  </span>{" "}
                  — Black Scottish Awards 2025
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-600 leading-7">
                  <span className="font-semibold text-gray-800">
                    Most Creative Photographer
                  </span>{" "}
                  — ACE Awards Scotland 2024
                </p>
              </div>
            </div>
            <p className="text-gray-500 leading-7 text-base italic mt-4 pl-4 border-l-2 border-gray-300">
              These milestones reflect a long-term commitment to work that is
              culturally rooted, emotionally aware, and thoughtfully executed.
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
            src="https://res.cloudinary.com/dlzna5jba/image/upload/v1767254675/PXL_20251109_165428898.MP_3_qf6u9o.jpg"
            alt="bolu5"
            className="w-full md:w-[60%] rounded-xl shadow-lg object-cover"
            data-aos="fade-left"
          />
          <div className="md:w-[40%] md:mt-[30px]" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
              Leadership & Innovation
            </h3>
            <p className="max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed md:leading-8 font-light tracking-wide">
              As creative director of{" "}
              <span className="font-semibold text-gray-900">Nakestudios</span>,
              I work at the intersection of visuals, culture, and strategy,
              supporting brands, organisations, and communities with
              storytelling that respects context and audience.
              <span className="block mt-4 font-medium text-blue-600">
                I am also the founder of iCre8 Conference, a platform designed
                to connect emerging and established talent across industries and
                cultures. The inaugural 2024 edition in Nigeria explored:
              </span>
              <span className="block mt-3 text-black italic font-bold">
                “The Transformative Power of Creativity in Shaping the Future of
                Industries”
              </span>
              <span className="block mt-4 text-gray-600">
                The conference brought together creatives from communications,
                finance, technology, tourism, visual media, and the arts. It
                reflects my belief that creativity is central to talent
                pipelines, economic development, and how cities and nations
                position themselves in the global landscape.
              </span>
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
              I am an active member of several professional communities that
              value excellence, representation, and cultural depth including:
            </p>
            <div className="space-y-1">
              {[
                "Royal Photographic Society",
                "The Creative Eye Group",
                "Black Professionals UK",
                "Walsall Society of Artists",
              ].map((org, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 font-medium">{org}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 leading-7 text-base italic mt-4">
              These networks help me refine my craft, stay accountable to high
              standards, and stay connected to a wider movement of artists,
              professionals, and cultural workers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - Updated Gallery */}
      <section className="w-full py-16 px-4 md:px-6 bg-[#F3F4F6] overflow-x-hidden">
        <div className="w-full max-w-5xl mx-auto">
          {/* Mobile: Gallery First, Text Second */}
          <div className="block md:hidden">
            {/* Mobile Gallery */}
            <div className="relative h-80 mb-8 w-screen -ml-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl contain-paint">
                {/* Main Preview Images */}
                {[
                  "/images/2.jpg",
                  "/images/4.jpg",
                  "/images/6.jpg",
                  "/images/8.jpg",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                    style={{
                      opacity: 0,
                      animation: `slideShowMobile 8s infinite`,
                      animationDelay: `${index * 2}s`,
                      zIndex: 8 - index,
                      willChange: "opacity",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                ))}

                {/* Mobile Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/80 rounded-lg p-3 shadow-lg">
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
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full bg-white/50 relative overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 bg-white rounded-full"
                          style={{
                            animation: `progressBarMobile 8s infinite`,
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
            <div className="px-4" data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 tracking-tight">
                Core Values
              </h3>
              <p className="leading-8 text-lg font-light tracking-wide text-gray-700 mb-6">
                Across everything I do including artworks, conferences,
                training, or collaborations, my work is guided by:
              </p>
              {/* <div className="grid grid-cols-2 gap-3 mb-6">
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
              </div> */}
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Excellence
                    </span>
                    <span className="mx-1">—</span>
                    doing the work with care and craft
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Authenticity
                    </span>
                    <span className="mx-1">—</span>
                    staying honest to story, context, and people
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Empathy</span>
                    <span className="mx-1">—</span>
                    seeing people as more than subjects or audiences
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Patience
                    </span>
                    <span className="mx-1">—</span>
                    allowing growth, process, and time
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Inclusive impact
                    </span>
                    <span className="mx-1">—</span>
                    making space for others and building what outlives me
                  </p>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border-l-4 border-blue-400 hidden">
                <p className="text-gray-700 leading-7 text-base italic">
                  Whether directing visual narratives, curating multisensory
                  exhibitions, or developing content that transcends borders, I
                  lead with vision and intentionality.
                  <span className="font-semibold text-gray-800">
                    {" "}
                    I am not just telling stories, I am architecting experiences
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
                Across everything I do including artworks, conferences,
                training, or collaborations, my work is guided by:
              </p>
              {/* <div className="grid grid-cols-2 gap-3 mb-6">
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
              </div> */}
              {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border-l-4 border-blue-400">
                <p className="text-gray-700 leading-7 text-base italic">
                  Whether directing visual narratives, curating multisensory
                  exhibitions, or developing content that transcends borders, I
                  lead with vision and intentionality.
                  <span className="font-semibold text-gray-800">
                    {" "}
                    I am not just telling stories, I am architecting experiences
                    that inspire, challenge, and elevate.
                  </span>
                </p>
              </div> */}
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Excellence
                    </span>
                    <span className="mx-1">—</span>
                    doing the work with care and craft
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Authenticity
                    </span>
                    <span className="mx-1">—</span>
                    staying honest to story, context, and people
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Empathy</span>
                    <span className="mx-1">—</span>
                    seeing people as more than subjects or audiences
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Patience
                    </span>
                    <span className="mx-1">—</span>
                    allowing growth, process, and time
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-semibold">●</span>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Inclusive impact
                    </span>
                    <span className="mx-1">—</span>
                    making space for others and building what outlives me
                  </p>
                </li>
              </ul>
            </div>

            {/* Desktop Gallery */}
            <div className="w-[60%] relative h-[500px]">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl contain-paint">
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
                    className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                    style={{
                      opacity: 0,
                      animation: `slideShowDesktop 16s infinite`,
                      animationDelay: `${index * 2}s`,
                      zIndex: 8 - index,
                      willChange: "opacity",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                  </div>
                ))}

                {/* Desktop Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-white/80 rounded-lg p-4 shadow-lg">
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
                            animation: `progressBarDesktop 16s infinite`,
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
          .contain-paint {
            contain: paint;
          }

          @media (prefers-reduced-motion: reduce) {
            .transition-opacity {
              animation: none !important;
            }
          }

          @keyframes slideShowMobile {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            25% {
              opacity: 1;
            }
            35% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes slideShowDesktop {
            0% {
              opacity: 0;
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
              opacity: 0;
              transform: scale(1);
            }
          }

          @keyframes progressBarMobile {
            0% {
              width: 0%;
            }
            25% {
              width: 100%;
            }
            35% {
              width: 100%;
            }
            100% {
              width: 0%;
            }
          }

          @keyframes progressBarDesktop {
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
