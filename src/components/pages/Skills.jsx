import React from "react";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Typescript from "../../assets/typescript.png";
import MySQL from "../../assets/mysql.png";
import AWS from "../../assets/awslogo.jpeg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen pt-40 text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-5xl font-bold inline border-b-4 border-white text-[#ccd6f6]">
            Skills
          </h1>
          <p className="py-4 text-lg">
            {" "}
            Below are the languages and frameworks I've worked with.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML5" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS3" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="TAILWIND Framework"
            />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JAVASCRIPT" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="TYPESCRIPT" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="NODE JS" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="MySQL" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:ring-1 rounded hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
