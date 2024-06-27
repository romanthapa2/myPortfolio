import React from "react";
import { FiMapPin } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import WorkEmoji from "../../public/Work.webp";

const Home = () => {
  return (
    <div className="h-fit  w-full text-white">
      <section className="py-[100px] flex flex-col-reverse md:w-[1100px] m-auto md:flex-row  justify-between items-end  ">
        <div className="md:w-[60%] px-[15px]  flex flex-col text-left">
          <div>
            <h1 className="mt-6 font-poppins font-semibold text-5xl ">
              Hi, I'm Roman
              <span>👋</span>
            </h1>
            <p className="mt-4 text-lg font-normal font-poppins ">
              As a full-stack developer, I specialize in creating scalable web applications with seamless user
              experiences. I am proficient in both front-end and back-end technologies.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-lg font-normal font-poppins flex items-center gap-1">
              <FiMapPin />
              Kathmandu,Nepal
            </p>
            <p className="mt-1 text-lg font-normal font-poppins flex items-center gap-2">
              <span className="relative flex">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              Avalibale for work
              <img src={WorkEmoji} alt="workEmoji" className="w-[26px]" />
            </p>
          </div>

          <div className="flex gap-5 mt-6">
            <a href={"https://www.linkedin.com/in/roman--thapa/"}>
              <FaLinkedin size={25} color="#0077b5" />
            </a>
            <a href={"https://github.com/romanthapa2"}>
              <FaGithubSquare size={25} color="#d1d5db" />
            </a>
          </div>
        </div>

        <div className="w-fit">
          <img
            src="/professional-brown-man-black-hair-wearing-glass-trans.jpg"
            className="w-full rounded h-96"></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
