import React from "react";
import ProjectCart from "../cards/ProjectCart";
const projectArray = [
  {
    name: "EDJOBSTER",
    description:
      "A HIRING MANAGEMENT TOOL FOR EDUCATION INSTITUTES YOU CAN GET AN OVERVIEW OF YOUR JOB VACANCIES AND IDENTIFY SOURCES FOR THE BEST CANDIDATES",
    skills: ["JAVASCRIPT", "REACT", "REDUX", "NODE JS", "MONGO DB"],
  },

  {
    name: "Ojas Ngo",
    description:
      "Ojas NGO Website is a platform developed to promote the activities, achievements, and causes of the NGO. It serves as acentral hub for the NGO to showcase their initiatives, acceptdonations, and organize events",
    skills: [
      "React JS",
      "Redux",
      "JavaScript",
      "CSS",
      "MaterialUI",
      "Node js",
      "Mongo DB",
    ],
  },

  {
    name: "SWRAJYAPARAMEDICAL ONLINE TEACHING PLATFORM",
    description:
      "SWARAJYAPARAMEDICAL IS AN ONLINE PLATFORM DESIGNED TO STREAMLINE THE ADMISSION PROCESS AND FACILITATE ONLINE TEACHING FOR STUDENTS PURSUING PARAMEDICAL COURSES.",
    skills: [
      "React JS",
      "Redux",
      "JavaScript",
      "CSS",
      "MaterialUI",
      "Node js",
      "Mongo DB",
    ],
  },
];
interface  IProjectArray {
    name:string;
    description:string,
    skills:string[]
}
function Projects() {

  return (
    <div className="flex gap-2 p-1">
      {projectArray?.map((item :any ) => {
        return <ProjectCart item={item}/>;
      })}
    </div>
  );
}

export default Projects;
