import React from "react"
import Resume from "../../assets/uResume.pdf";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

const Footer = () =>{
    return(
<footer className="bg-[#0a192f] pt-4 bottom-0 w-[100%]">
<div className="max-w-screen-lg px-4 mx-auto text-gray-300 xl:max-w-screen-xl sm:px-6 md:px-8">
<div className="pt-8 flex border-t border-[#bee4db] max-w-xs mx-auto items-center justify-between">
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
  <ul className="flex flex-wrap justify-center pb-5 pt-5 text-lg font-light">
    <li className="w-3/4 md:w-1/3 lg:w-1/3">
      <div className="text-center">
        <ul>
          <li className="mb-4 text-gray-300 text-base">
            ©2023 Daniel N'Dri
          </li>
        </ul>
      </div>
    </li>
  </ul>
 
</div>
</footer>
    );
}

export default Footer