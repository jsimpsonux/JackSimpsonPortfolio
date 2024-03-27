import React from "react";
import Card from "../components/Card";

function Projects() {
  const data = [
    {
      title: "My Relaxing Planner",
      image: "/images/Food.jpg",
    },
    {
      title: "Ingredient Alchemy",
      image: "/images/Food.jpg",
    },
    {
      title: "Console Finances",
      image: "/images/Food.jpg",
    },
  ];
  return (
    <>
      <div>
        <h1>My Projects</h1>
        <div class="d-flex justify-content-center flex-lg-row flex-sm-column flex-xs-column">
            {data.map((project) => {
              return <Card image={project.image} title={project.title} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Projects;
