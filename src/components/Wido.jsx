import React from "react";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import { Tilt } from "react-tilt";
import { services } from "../constants";

function Wido() {
  return (
    <>
      <span id="about">
        &nbsp; &nbsp; <br />
        &nbsp; <br />
        &nbsp; <br /> &nbsp; <br /> &nbsp;
      </span>
      <div className=" p-2 mt-0 text-white">
        <div className=" sm:pl-[6rem] pl-[1rem]">
          <motion.div
            initial={{ y: "-50px", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} `}>Overview.</h2>
          </motion.div>
          <motion.div
            initial={{ y: "10px", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="mt-5 text-stone-300 text-[17px] max-w-2xl leading-[30px]"
          >
            {" "}
            <p className="sm:text-[1.2rem] text-[1rem] sm:p-0 pl-5 pr-5 pb-5 tracking-wider leading-[30px] sm:inline hidden">
              A passionate Full Stack Web Developer having an experience of
              bulding Web Applictions with <b>JavaScript</b>, <b>TypeScript</b>, <b>ReactJs</b>, <b>NextJs</b>, 
             {" "}  <b>NodeJs</b>, <b>Express</b>, <b>Mongoose</b>, <b>MongoDB</b>, <b>TailwindCss</b> and some other Cool libraries and
              frameworks. 🚀
            </p>
            <br />
            <p className="sm:hidden inline"> I'm a Web Developer, I have a
            solid understanding of HTML, CSS and JavaScript and am also capable
            to developing Fullstack web apps using <b>JavaScript</b>, <b>TypeScript</b>, <b>ReactJs</b>, <b>NextJs</b>, 
             {" "}  <b>NodeJs</b>, <b>Express</b>, <b>Mongoose</b> ,<b>MongoDB</b>, <b>TailwindCss</b>.</p>
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-10 ">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" sm:w-[350px] w-[250px] sm:m-0 m-auto ">
      <motion.div
        initial={{ x: "-100px", opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.54 * index,
          },
        }}
        className=" w-full bg-gradient-to-r from-violet-800 to-fuchsia-500  p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{ max: 55, scale: 1, speed: 550 }}
          className=" bg-[rgb(21,16,48)] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className=" w-16 h-16 object-contain" />
          <h3 className=" text-white text-[20px] font-[800] text-center tracking-wider">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Wido;
