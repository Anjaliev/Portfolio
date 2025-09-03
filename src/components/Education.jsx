import React from "react";
import PG from "../assets/pg.jpg";
import UG from "../assets/ug.png";

const Education = () => {
  return (
    <>
      <div id="education" className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Education</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
            <div className="md:flex ">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                  Master of Computer Applications
                </div>
                <a href="#">
                  St. Joseph's College of Engineering and Technology, Palai (2023-2025)
                </a>
                <p className="mt-2 text-slate-500">
                  Completed MCA with a focus on software development,
                  programming, and real-world project implementation.
                </p>
              </div>
              <div className="md:shrink-0 p-5">
                <img src={PG} alt="Post Graduation" width={250} height={250} />
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
            <div className="md:flex ">
              <div className="md:shrink-0 p-5">
                <img src={UG} alt="Under Graduation" width={250} height={250} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                  Bachelor of Computer Applications
                </div>
                <a href="#">Devamatha Arts & Science College,Paisakary (2020-2023)</a>
                <p className="mt-2 text-slate-500">
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
