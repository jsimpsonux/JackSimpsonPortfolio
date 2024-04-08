import React from "react";
import Card from "../components/Card";

function Projects() {
  const data = [
    {
      title: "My Relaxing Planner",
      image: "/images/Food.jpg",
      link: "https://github.com/jsimpsonux/my-relaxing-planner",
    },
    {
      title: "Ingredient Alchemy",
      image: "/images/Food.jpg",
      link: "https://github.com/jsimpsonux/Ingredient-Alchemy",
    },
    {
      title: "Crypto-Mock",
      image: "/images/Food.jpg",
      link: "https://github.com/jsimpsonux/Console-finances",
    },
  ];
  return (
    <>
      <div>
        <h1 class="p-5">My Projects</h1>
        <div class="d-flex justify-content-center flex-lg-row flex-sm-column flex-xs-column p-5">
            {data.map((project) => {
              return <Card image={project.image} title={project.title} href={project.link} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Projects;
