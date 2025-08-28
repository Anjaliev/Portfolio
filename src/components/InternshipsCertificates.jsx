import React from "react";
import mern from "../assets/mern.png";
import python from "../assets/python.png";
import iot from "../assets/iot.png";
import ai from "../assets/ai.jpg";

const InternshipsCertificates = () => {
  return (
    <>
      <div id="internships" className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Internships & Certificates</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    mern stack developer internship
                  </div>
                  <a href="#">RP2</a>
                  <p className="mt-2 text-slate-500">
                    Working on full-stack web development using MongoDB,
                    Express.js, React, and Node.js. Gaining hands-on experience
                    in building dynamic, responsive applications and
                    collaborating in a professional development environment.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={mern} alt="Mern" width={250} height={250} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="md:shrink-0 p-5">
                  <img src={python} alt="python" width={250} height={250} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Python Developer Internship
                  </div>
                  <a href="#">Inmakes Infotech</a>
                  <p className="mt-2 text-slate-500">
                    Completed a 3-month internship focused on Python and Django
                    development. Worked on backend logic, database management,
                    and building functional web applications while improving
                    problem-solving and coding skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    IOT
                  </div>
                  <a href="#">NPTEL Certificate</a>
                  <p className="mt-2 text-slate-500">
                    Earned an NPTEL certification in the Internet of Things with
                    a consolidated score of 73%, gaining knowledge in IoT
                    concepts, applications, and technologies.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img src={iot} alt="iot" width={250} height={250} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex ">
                <div className="md:shrink-0 p-5">
                  <img src={ai} alt="ai" width={250} height={250} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Artificial Intelligence
                  </div>
                  <a href="#">Add on Course Certificate</a>
                  <p className="mt-2 text-slate-500">
                    Completed a 35-hour add-on course during MCA, focusing on
                    practical AI concepts and their applications in solving
                    real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipsCertificates;
