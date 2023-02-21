import React from "react";
import Resume from "../../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-white bg-[#0a192f]">
        <div class="container pt-9">
          <div class="flex justify-center space-x-4 ml-10 mr sm:mr-40 md:ml-48 lg:mr-44 mr xl:ml-96">
            <a
              href="https://github.com/DanielN02"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-ndri/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl"
                target="_blank"
                rel="noreferrer"
              />
            </a>
            <a href={Resume} target="_blank" rel="noreferrer">
              <FaFile
                width="20"
                height="20"
                fill="currentColor"
                className="text-xl"
                target="_blank"
                rel="noreferrer"
              />
            </a>
          </div>
        </div>

        <div class="flex justify-center text-gray-300 p-4 bg-[#0a192f]">
          © 2023 Copyright | Daniel N'Dri
        </div>
      </footer>
    </div>
  );
};

export default Footer;
