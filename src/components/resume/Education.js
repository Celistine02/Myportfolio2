import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Zimbabwe (2022 - present)"
            result="3.90/4"
            des="Currently pursuing a Bachelor of Science in Computer Science, gaining a strong foundation in programming, algorithms, software engineering, and artificial intelligence."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="St Francis & St Clare High (2014 - 2019)"
            result="5.00/5"
            des="Completed secondary education with a focus on mathematics, science, and technology, building the foundation for my interest in computer science and software development."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Software Developer"
            subTitle="Sakiso Digital - (2024 - Present)"
            result="Zimbabwe"
            des="Working on a range of projects, from web development to mobile apps, using modern frameworks and technologies like React, Node.js, and databases to build scalable, user-friendly solutions."
          />
          <ResumeCard
            title="Junior AI Engineer"
            subTitle="LinearAI Internship - (2024-2025)"
            result="UK-Remote"
            des="Gaining hands-on experience in machine learning, natural language processing, and AI algorithms, contributing to the development of intelligent systems and improving automation processes."
          />
          <ResumeCard
            title="Computer Science and Pure Mathematics Teacher"
            subTitle="Kutenda High College - (2020 - 2021)"
            result="Zimbabwe"
            des="Taught advanced computer science and mathematics to high school students, fostering their problem-solving skills and interest in technology and mathematics."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
