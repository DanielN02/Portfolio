import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import Resume from "../../assets/uResume.pdf";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen pt-20 md:pt-20">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ccd6f6] text-lg">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Daniel N'Dri
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an Associate Full Stack Developer.
        </h2>
        {/* Socials section */}
        <section>
          <ul className="bg-black flex justify-evenly list-none p-8">
            <li>
              <a
                href="https://github.com/DanielN02"
                aria-label="Github"
                target="_blank"
                rel="noreferrer"
                alt="Github"
              >
                <FaGithub className="text-4xl duration-500 hover:scale-125" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-ndri/"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer"
                alt="Linkedin"
              >
                <FaLinkedin className="text-4xl duration-500 hover:scale-125" />
              </a>
            </li>
            <li>
              <a
                href={Resume}
                aria-label="Resume"
                target="_blank"
                rel="noreferrer"
                alt="Resume"
              >
                <FaFile className="text-4xl duration-500 hover:scale-125" />
              </a>
            </li>
          </ul>
        </section>
        <p className="text-[#8892b0] text-xl py-4 max-w-[900px]">
          I am a full-stack associate developer learning different languages and
          frameworks. I have grown a passion for coding and am ready to be a
          supporting asset for any team where I am needed. I have created many
          applications that I am happy to display in my portfolio below.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0a192f] hover:border-[#ccd6f6]">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
