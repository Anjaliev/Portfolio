import React from "react";
import mern from "../assets/mern.png";
import python from "../assets/python.png";
import iot from "../assets/iot.png";
import ai from "../assets/ai.jpg";

const InternshipsCertificates = () => {
  return (
    <>
      <div
        id="internships"
        className="bg-indigo-800 m-5 sm:m-10 md:m-20 max-w-full"
      >
        <div className="grid justify-items-center m-6 sm:m-10">
          <h1 className="text-2xl sm:text-3xl text-white mt-6 sm:mt-10 text-center">
            Internships & Certificates
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 sm:p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  MERN Stack Developer Internship
                </div>
                <a href="#" className="block mt-1 font-medium">
                  RP2
                </a>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                  Working on full-stack web development using MongoDB,
                  Express.js, React, and Node.js. Gaining hands-on experience in
                  building dynamic, responsive applications and collaborating in
                  a professional development environment.
                </p>
              </div>
              <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                <img
                  src={mern}
                  alt="Mern"
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                <img
                  src={python}
                  alt="python"
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Python Developer Internship
                </div>
                <a href="#" className="block mt-1 font-medium">
                  Inmakes Infotech
                </a>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                  Completed a 3-month internship focused on Python and Django
                  development. Worked on backend logic, database management, and
                  building functional web applications while improving
                  problem-solving and coding skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-6 md:my-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 sm:p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  IoT
                </div>
                <a href="#" className="block mt-1 font-medium">
                  NPTEL Certificate
                </a>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                  Earned an NPTEL certification in the Internet of Things with a
                  consolidated score of 73%, gaining knowledge in IoT concepts,
                  applications, and technologies.
                </p>
              </div>
              <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                <img
                  src={iot}
                  alt="iot"
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                <img
                  src={ai}
                  alt="ai"
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Artificial Intelligence
                </div>
                <a href="#" className="block mt-1 font-medium">
                  Add-on Course Certificate
                </a>
                <p className="mt-2 text-slate-500 text-sm sm:text-base">
                  Completed a 35-hour add-on course during MCA, focusing on
                  practical AI concepts and their applications in solving
                  real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipsCertificates;
