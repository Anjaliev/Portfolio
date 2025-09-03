import React from "react";
import Project1Img from "../assets/project1.png";
import Project2Img from "../assets/project2.png";
import Project3Img from "../assets/project3.png";

const Project = () => {
  return (
    <>
      <div
        id="projects"
        className="bg-indigo-800 m-5 sm:m-10 md:m-20 max-w-full"
      >
        <div className="grid justify-items-center m-6 sm:m-10">
          <h1 className="text-2xl sm:text-3xl text-white mt-6 sm:mt-10">
            Projects
          </h1>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
            <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 sm:p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    VisiMorph AI
                  </div>
                  <a href="#">Image & Video Editing Platform</a>
                  <p className="mt-2 text-slate-500 text-sm sm:text-base">
                    VisiMorph AI is an AI-powered image and video editing
                    platform with features like generative fill, background
                    removal, and automated subtitles. Its intuitive design and
                    advanced AI tools make professional-quality editing simple
                    and accessible for everyone.
                  </p>
                </div>
                <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                  <img
                    src={Project1Img}
                    alt="Project 1"
                    className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col md:flex-row">
                <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                  <img
                    src={Project2Img}
                    alt="Project 2"
                    className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    AgroConnect
                  </div>
                  <a href="#">Easy Online Ordering for Seeds and Seedlings</a>
                  <p className="mt-2 text-slate-500 text-sm sm:text-base">
                    AgroConnect is an online platform that connects customers,
                    agroservice centers, and farms for easy ordering of seeds
                    and seedlings. It manages real-time stock, sources from
                    nearby farms when needed, and ensures fast home
                    delivery—supporting local farmers while making agriculture
                    more efficient and accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 my-6 md:my-10" />

          <div className="grid grid-cols-1 gap-6 p-5">
            <div className="w-full max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 sm:p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    SCPS
                  </div>
                  <a href="#">Smart Car Parking System</a>
                  <p className="mt-2 text-slate-500 text-sm sm:text-base">
                    Smart Car Parking System (SCPS) is a mobile app that lets
                    users check real-time parking availability and book slots in
                    advance. It helps reduce time spent searching for parking,
                    making city travel easier and more efficient.
                  </p>
                </div>
                <div className="md:shrink-0 p-4 sm:p-5 flex justify-center">
                  <img
                    src={Project3Img}
                    alt="Project 3"
                    className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
