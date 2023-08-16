import React from "react";
import { motion } from "framer-motion";
import { techImages } from "../constants/index";
import { styles } from "../constants/styles";
import { Tilt } from "react-tilt";

function Skills() {
  return (
    <>
      <span id="skills">
        &nbsp; &nbsp; <br />
        &nbsp; <br />
        &nbsp; <br /> &nbsp; <br /> &nbsp;
      </span>
      <div className="text-white m-auto w-full mt-0 pb-20">
        <div className="sm:pl-[6rem] pl-[2rem] mb-10">
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
            <p className={styles.sectionSubText}>Technologies that i know.</p>
            <h2 className={`${styles.sectionHeadText} `}>Skills</h2>
          </motion.div>
        </div>

        <div className="p-4">
          <div className=" h-fit sm:w-[80%] w-[80%] sm:ml-20 m-auto flex flex-wrap justify-center items-center gap-10">
            {techImages.map((e) => {
              return (
                <Tilt key={e.id}>
 
                  <motion.img
                    src={e.img}
                    className="sm:w-[160px] w-[110px]"
                    animate={{
                      y: [0, 7 * e.id, 0],
                      transition: {
                        duration: 1.5 * e.id,
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }}
                    initial={
                      e.id % 2 == 0
                        ? { x: "-100px", opacity: 0 }
                        : { x: "100px", opacity: 0 }
                    }
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8 * e.id,
                        type: "spring",
                      },
                    }}
                  />
                </Tilt>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
