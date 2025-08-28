import React from "react";
import Project1Img from "../assets/project1.png";
import Project2Img from "../assets/project2.png";
import Project3Img from "../assets/project3.png";

const Project = () => {
  return (
    <>
      <div id="projects" className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    VisiMorph AI
                  </div>
                  <a href="#">Image & Video Editing Platform</a>
                  <p className="mt-2 text-slate-500">
                    VisiMorph AI is an AI-powered image and video editing
                    platform with features like generative fill, background
                    removal, and automated subtitles. Its intuitive design and
                    advanced AI tools make professional-quality editing simple
                    and accessible for everyone.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project1Img}
                    alt="Project 1"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project2Img}
                    alt="Project 2"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    AgroConnect
                  </div>
                  <a href="#">Easy Online Ordering for Seeds and Seedlings</a>
                  <p className="mt-2 text-slate-500">
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
          <hr />
          <div className="grid grid-cols-1 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    SCPS
                  </div>
                  <a href="#">Smart Car Parking System</a>
                  <p className="mt-2 text-slate-500">
                    Smart Car Parking System (SCPS) is a mobile app that lets
                    users check real-time parking availability and book slots in
                    advance. It helps reduce time spent searching for parking,
                    making city travel easier and more efficient.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project3Img}
                    alt="Project 3"
                    width={250}
                    height={250}
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
