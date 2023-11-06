import React from "react";
import { motion } from "framer-motion";
import {
  bg1,
  linkedin,
  github,
  resume,
  resumeIcon,
  emailIcon,
} from "../constants/index";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <>
      <div className="flex justify-evenly  w-full sm:flex-row flex-col  text-white">
        {/* About div */}
        <div className="sm:w-[50%] w-[98%] flex flex-col justify-center items-start sm:pl-[6rem] pl-[1rem]">
          <motion.h2
            className=" mb-5 sm:p-0 pl-5 font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-12"
            initial={{ x: "-300px", y: "-100px", opacity: 0 }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
          >
            Hello, I'm <span className="text-purple-500">Devendra</span>
          </motion.h2>
          <h3 className=" text-[1.4rem] sm:p-0 pl-5 mb-4 text-bold tracking-widest ">
            <Typewriter
              options={{
                strings: [
                  "Web Developer !",
                  "NextJs",
                  "TypeScript",
                  "ReactJs",
                  "NodeJs",
                  "JavaScript",
                  "HTML 5",
                  "CSS 3",
                  "TailwindCss",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewiterpara",
                cursor: "|",
              }}
            />
          </h3>

          <p className="sm:text-[1.2rem] text-[1rem] sm:p-0 pl-5 pr-5 pb-5 tracking-wider leading-[30px] sm:hidden inline text-stone-300">
            A passionate Full Stack Web Developer having an experience of
            bulding Web Applictions with <b>JavaScript</b>, <b>TypeScript</b>, <b>ReactJs</b>, <b>NextJs</b>,{" "}
            <b>NodeJs</b>, <b>Express</b>, <b>Mongoose</b>, <b>MongoDB</b>, <b>TailwindCss</b> and some othe Cool libraries and
            frameworks. 🚀
          </p>

          <div className="w-[98%] flex gap-10 pt-5 sm:justify-start justify-center items-center">
            <a
              href="https://www.linkedin.com/in/devendra-dhakad-2a6229253"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="sm:w-[50px] w-[40px] hover:scale-[1.2] transition-all duration-[1]"
              />
            </a>
            <a
              href="https://github.com/Devendradhakad12?tab=repositories"
              target="_blank"
            >
              <img
                src={github}
                alt="github"
                className="sm:w-[50px] w-[40px] hover:scale-[1.2] transition-all duration-[1]"
              />
            </a>

            <a href="mailto:devendradhakad745@gmail.com?" target="_blank">
              <img
                src={emailIcon}
                alt="contact"
                className="sm:w-[50px] w-[40px] hover:scale-[1.2] transition-all duration-[1]"
              />
            </a>
            <a href={resume} target="_blank">
              <img
                src={resumeIcon}
                alt="resume"
                className="sm:w-[80px] w-[60px] rotate-[25deg] hover:scale-[1.2] transition-all duration-[1]"
              />
            </a>
           
          </div>
        </div>

        {/* image div */}
        <div className="sm:w-[50%] w-[98%] sm:pt-20 pt-5">
          <motion.img
            src={bg1}
            className="sm:w-[100%] sm:pr-20"
            animate={{
              y: [0, 5, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default About;
