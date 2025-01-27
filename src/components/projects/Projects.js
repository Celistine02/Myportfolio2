import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black bg-gray-100"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title
          title="Explore My Work"
          des="A selection of my recent projects, showcasing my full-stack development skills"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Smart Key"
          des="A secure, smart key system with advanced encryption, providing seamless access control and enhanced security features."
          src={projectOne}
        />
        <ProjectsCard
          title="Sakiso Smart School"
          des="A comprehensive school management system serving over 3000 institutions in the SADC region, optimizing administrative workflows."
          src={projectTwo}
        />
        <ProjectsCard
          title="Remote Device Lock"
          des="A device management solution that allows remote locking and unlocking for enhanced security and control."
          src={projectThree}
        />
        <ProjectsCard
          title="Travel & Transport App"
          des="A user-friendly mobile app for seamless booking and management of travel and transport services, offering real-time updates and notifications."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An intuitive and responsive e-commerce platform, built to handle a wide range of products and optimize user shopping experience."
          src={projectOne}
        />
        <ProjectsCard
          title="AI Chatbot"
          des="An intelligent chatbot integrated with the Sakiso Smart School system, offering automated support for students and staff."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
