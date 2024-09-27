import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Portfolio";
import { Projects, ProjectsCategories } from "../components";
import { portfolioData } from "../data/portfolioData";
const Portfolio = () => {
  const [projects, setProjects] = useState(portfolioData);
  console.log("projects", projects);

  const findCategories = portfolioData.map((item) => item.category);

  const categories = ["all", ...new Set(findCategories)];

  const filterProject = (arg) => {
    if (arg === "all") {
      setProjects(portfolioData);
      return;
    }
    const filterItem = portfolioData.filter((item) => item.category === arg);
    setProjects(filterItem);
  };
  return (
    <Wrapper id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={categories}
          handleProject={filterProject}
        />
        <Projects projects={projects} />
      </div>
    </Wrapper>
  );
};

export default Portfolio;
