import React from "react";
import { projectData } from "../../assets/projectdata/Project.Data";

const Flip = () => {
  const project = projectData;

  return (
    <div
      name="projects"
      className="max-w-[1000px] mx-auto p-4 pt-24 flex flex-col justify-center w-full h-full"
    >
      <div>
        <h1 className="text-5xl font-bold inline border-b-4 border-white text-[#ccd6f6]">
          Projects
        </h1>
        <p className="py-6"> Check out some of my recent work</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:scale-90 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {project.map((item) => (
          // Card
          <div className="rounded-md overflow-hidden shadow-lg border-4 border-black  hover:ring-1 duration-500">
            <div className="group h-96 w-80 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 [backface-visibility:hidden] ">
                  <img
                    className="w-full shadow-xl shadow-black/40"
                    src={item.image}
                    alt={item.alt}
                  />
                  <div className="">
                    <div className="font-bold text-xl mb-1">{item.title}</div>
                    <p className="text-gray-200 text-base mr-6 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-0 text-sm mr-8 font-semibold text-gray-700">
                      {item.stack}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-evenly">
                    <h1 className="text-3xl font-bold">{item.title}</h1>
                    <p class="text-lg">Tech Stack: {item.stack}</p>
                    <div className="flex justify-center mr-10">
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <button
                          className="text-center rounded-lg px-4 py-3 mr-5
                     bg-white text-gray-700 font-bold text-md opacity-0 group-hover:opacity-100 hover:bg-gray-400 duration-500"
                        >
                          Code
                        </button>
                      </a>
                      {/* eslint-disable-next-line */}
                      <a href={item.live} target="_blank" rel="noreferrer">
                        <button
                          className="text-center rounded-lg px-4 py-3
                     bg-white text-gray-700 font-bold text-md opacity-0 group-hover:opacity-100 hover:bg-blue-300 duration-500"
                        >
                          Live
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flip;
