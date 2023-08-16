import React from "react";
import { styles } from "../constants/styles";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/index";
function Experience() {
  return (
    <>
      <span id="experience">
        &nbsp; &nbsp; <br />
        &nbsp; <br />
        &nbsp; <br /> &nbsp; <br /> &nbsp;
      </span>
      <div className="text-white m-auto  mt-0">
        <div className="sm:pl-[6rem] pl-[2rem] mb-10">
          <motion.div
            initial={{ y: "-100px", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
          >
            <p className={styles.sectionSubText}>What i have done so far.</p>
            <h2 className={`${styles.sectionHeadText} `}>Work Experience</h2>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 flex flex-col m-auto w-[90%]">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalElement
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

const VerticalElement = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work w-[100%]"
      contentStyle={{ background: "rgb(21,16,48)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "12px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center h-[100%] ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[37px] h-[37px] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text=[24px] font-bold">{experience.title}</h3>
        <p
          className=" text-slate-300 text-[16px] font-semibold "
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 ">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className=" text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default Experience;
