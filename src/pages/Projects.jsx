import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Projects() {
  const data = [
    {
      title: "My Relaxing Planner",
      image: "src/assets/relax.png",
      description: "A friendly planner that provides the user with a place to plan out their day, with helpful features for the user.",
      github: "https://github.com/jsimpsonux/my-relaxing-planner",
      link: "https://jsimpsonux.github.io/my-relaxing-planner/",
    },
    {
      title: "Ingredient Alchemy",
      image: "src/assets/ingredient.png",
      description: "Ingredient Alchemy allows users to be as picky as they want and still find a recipe fit for them.",
      github: "https://github.com/jsimpsonux/Ingredient-Alchemy",
      link: "https://jsimpsonux.github.io/Ingredient-Alchemy/",
    },
    {
      title: "Crypto-Mock",
      image: "src/assets/crypto.png",
      description: "A crypto website that simulates real trading with the market, and provides users with a friendly inuitive design.",
      github: "https://github.com/jsimpsonux/Crypto-Mock",
      link: "https://resplendent-gumption-b3f3fe.netlify.app/",
    },
  ];
  return (
    <>
      <div style={{backgroundColor: "#fdf5df"}}>
        <div class="d-flex justify-content-center flex-lg-row flex-sm-column flex-xs-column p-3">
          {data.map((project) => {
            return (
              <>
              <div className="p-4 text-start d-md-flex">
                <div className="vstack gap-3">
                  <Card image={project.image} title={project.title} />
                  <br />
                  <p>{project.description}</p>
                  <br />
                  <Link to={project.github} className="text-decoration-none">Github</Link>
                  <br />
                  <Link to={project.link} className="text-decoration-none">Website</Link>
                  </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
