import React from "react";
import { motion } from "framer-motion";
import { styles } from "../constants/styles";
import { projects, github2, visitIcon } from "../constants/index";
import { Tilt } from "react-tilt";
function Projects() {
  return (
    <>
      <span id="projects">
        &nbsp; &nbsp; <br />
        &nbsp; <br />
        &nbsp; <br /> &nbsp; <br /> &nbsp;
      </span>
      <div className=" p-2 mt-0 text-white">
        <div className="sm:pl-[6rem] pl-[2rem] mb-10 pr-10">
          <motion.div
            initial={{ y: "-100px", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                type: "spring",
              },
            }}
          >
            <p className={styles.sectionSubText}>my work</p>
            <h2 className={`${styles.sectionHeadText} `}>Projects.</h2>
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
            className="mt-5  text-slate-300 text-[17px] max-w-2xl leading-[30px] "
          >
            {" "}
            <p>
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflacts
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-10 ">
            {projects.map((e, index) => (
              <ProjectsCard key={e.name} index={index} {...e} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const ProjectsCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
  production_link,
}) => {
  return (
    <Tilt className=" sm:w-[380px] w-[350px] sm:m-0 m-auto ">
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.14 * index,
          },
        }}
        className=" w-full bg-gradient-to-r from-violet-800 to-fuchsia-500  p-[1px] rounded-[20px] shadow-card m-auto  "
      >
        <div className="w-full bg-[rgb(21,16,48)] rounded-[20px] py-5 px-5 min-h-[280px] ">
          <a href={production_link} target="_blank">
            <img
              src={image}
              alt=""
              className=" w-[100%] h-[60%] object-contain rounded-[20px] "
            />
          </a>
          <h3 className=" text-white text-[20px] font-[700]  tracking-wider ml-3 mt-3">
            {name}
          </h3>
          <p className=" text-slate-300 text-[15px] font-[400] mb-3 tracking-wider ml-3 mt-3">
            {description}
          </p>

          <div className="flex gap-2 items-center flex-wrap">
            {tags.map((e) => {
              return (
                <p key={e.name} className={e.color}>
                  #{e.name}
                </p>
              );
            })}
            <a href={source_code_link} target="_blank">
              <img
                src={github2}
                alt="github"
                className="w-[35px] rounded-full ml-2"
              />
            </a>
            <a href={production_link} target="_blank">
              <img
                src={visitIcon}
                alt="github"
                className="w-[35px] rounded-full ml-2"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Projects;
