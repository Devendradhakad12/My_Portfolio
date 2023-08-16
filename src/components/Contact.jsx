import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { boy } from "../constants/index";
import { styles } from "../constants/styles";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: [value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_cievczs", "template_3qfj3h4", form, "9R9KryHZaGG-gZlQi")
      .then(() => {
        setLoading(false);
        toast.success("Message Sent");
        setForm({
          username: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            toast.error("Something went wrong");
          };
      });
  };

  return (
    <>
      <span id="contact">
        &nbsp; <br /> &nbsp;
      </span>
      <div className="flex justify-evenly  w-full sm:flex-row flex-col  text-white pb-12">
        {/* image div */}
        <div className="sm:w-[50%] w-[98%] flex flex-col justify-center items-center sm:pl-[6rem] pl-[0rem]   m-auto">
          <motion.img
            src={boy}
            className="sm:w-[70%] w-[200px] sm:pr-20 mb-10  mr-20 "
            animate={{
              y: [0, 5, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            initial={{ x: "-200px", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
          />
        </div>

        {/* contact div */}
        <div className="sm:w-[50%] w-[100%] sm:pt-20 pt-5 pb-5 m-auto flex flex-col justify-start items-start ">
          <div className=" bg-[rgb(21,16,48)] h-fit sm:w-[80%] w-[95%] sm:m-2 m-auto mb-10 rounded-3xl">
            <div className="sm:pl-[4rem] pl-[2rem] mb-10 mt-4 pt-5">
              <motion.div
                initial={{ y: "-10px", opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    type: "spring",
                  },
                }}
              >
                <p className={styles.sectionSubText}>Reach out to me</p>
                <h2 className={"text-[40px] font-bold mb-4"}>Contact.</h2>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-1 flex flex-col gap-8"
                >
                  <label className=" flex flex-col ">
                    <span className="text-white font-medium mb-4 ">
                      Your Name
                    </span>{" "}
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="What's your name ?"
                      className=" bg-[rgb(22,17,58)] py-4 px-7 mr-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
                    />
                  </label>
                  <label className=" flex flex-col ">
                    <span className="text-white font-medium mb-4 ">
                      Your Email
                    </span>{" "}
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email ?"
                      className="bg-[rgb(22,17,58)] py-4 px-7 mr-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
                    />
                  </label>
                  <label className=" flex flex-col ">
                    <span className="text-white font-medium mb-4 ">
                      Your Message
                    </span>{" "}
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What do you want to say ?"
                      className="bg-[rgb(22,17,58)] py-4 px-7 mr-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
                    />
                  </label>
                  <button
                    type="submit"
                    className=" bg-[rgb(21,16,48)] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-slate-800 rounded-xl "
                  >
                    {loading ? "sending..." : "send"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

/* 

   


*/
