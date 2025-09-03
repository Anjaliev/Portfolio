import React from "react";
import PG from "../assets/pg.jpg";
import UG from "../assets/ug.png";

const Education = () => {
  return (
    <>
      <div
        id="education"
        className="bg-indigo-800 m-5 sm:m-10 md:m-20 max-w-full"
      >
        <div className="grid justify-items-center m-6 sm:m-10">
          <h1 className="text-2xl sm:text-3xl text-white mt-6 sm:mt-10">
            Education
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 sm:p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Master of Computer Applications
                </div>
                <a href="#" className="block mt-1 font-medium">
                  St. Joseph's College of Engineering and Technology, Palai
                  (2023-2025)
                </a>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                  Completed MCA with a focus on software development,
                  programming, and real-world project implementation.
                </p>
              </div>
              <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                <img
                  src={PG}
                  alt="Post Graduation"
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                <img
                  src={UG}
                  alt="Under Graduation"
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Bachelor of Computer Applications
                </div>
                <a href="#" className="block mt-1 font-medium">
                  Devamatha Arts & Science College, Paisakary (2020-2023)
                </a>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                  Completed BCA with a foundation in programming, databases, and
                  web development, building the skills needed for advanced
                  studies and projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
