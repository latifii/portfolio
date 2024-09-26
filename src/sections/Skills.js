import React from "react";
import Wrapper from "../assets/wrappers/Skill";
import { skillData } from "../data/skillData";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <div className="container skills__container">
        <h2>My Skills</h2>
        <div className="skills__cards">
          {skillData.map((item) => {
            return <Skill key={item.id} {...item} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
