import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 md:pt-10">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-5xl font-bold inline border-b-4 border-white text-[#ccd6f6]">
            About Me
          </h1>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                  <img
                    alt="My Headshot"
                    src="https://i.imgur.com/52zjz7r.jpg"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl text-[#ccd6f6] font-bold sm:text-5xl">
                    My Start
                  </h2>

                  <p className="text-xl mt-7 text-[#8892b0]">
                    Starting as an associate software engineer, I've enjoyed the
                    time creating various websites and applications. It led me
                    to implement different forms of my creativity into software
                    development and that drives me to continue learning so I can
                    be a great addition to any team.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
