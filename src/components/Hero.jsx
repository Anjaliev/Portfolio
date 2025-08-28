import React from "react";
import {BsLinkedin, BsGithub } from "react-icons/bs";
import HeroPic from "../assets/me.jpg";
const Hero = () => {
   const handleShowMore =(e,id)=>{
      e.preventDefault()
      const el=document.getElementById(id)
      if(el){
        el.scrollIntoView({behavior:"smooth",block:"start"})
        setToggle(false)
        history.replaceState(null,"",`#${id}`)
      }
    }
  return (
    <>
      <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
        <div className="lg:w-1/3 ssm:w-fit">
          <p className="text-4xl mb-5 text-slate-300">I'm</p>
          <h1 className="text-5xl">Anjali E V</h1>
          <hr />
          <p className="mt-10  text-slate-300 font-sans">
            MCA postgraduate passionate about technology, problem-solving, and
            continuous learning. Skilled in Python, Django and MERN
            stack development. I enjoy creating projects that make life easier
            and more efficient.
          </p>
        </div>
        <div className="w-1/3 items-center ssm:w-fit">
          <img
            src={HeroPic}
            alt=""
            width={800}
            height={800}
            className="rounded-full  border-8 border-white"
          />
        </div>
        <div className="w-1/3 ssm:w-fit">
          <p className="text-4xl mb-4">About Me</p>
          <p className="text-slate-300">
            I am Anjali E V, an MCA graduate with a love for building websites
            and applications. I have worked with Python, Django, MERN stack, and
            tools like Tailwind CSS and Bootstrap. I enjoy learning new
            technologies and solving real-world problems through code. 
            I'm a
            good team player, quick learner, and always excited to take on
            challenges that help me grow as a developer.
          </p>
          <a href="#education">
          <button onClick={(e)=>handleNavClick(e,"education")} className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
            Show more...
          </button>
          </a>
          <div className="flex mt-5 space-x-4 cursor-pointer">
            <a href="https://www.linkedin.com/in/anjaliev2002/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin
              size={30}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
            </a>
            <a href="https://github.com/Anjaliev" target="_blank" rel="noopener noreferre">
            <BsGithub
              size={30}
              className="border-4 hover:border-indigo-800 rounded-full"
            />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
