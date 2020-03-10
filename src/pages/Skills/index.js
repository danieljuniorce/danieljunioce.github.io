import React from "react";

import { Container, ContentSkills, Skills, TitleSkills } from "./styled";
const SkillsAnimation = () => {
  return (
    <lottie-player
      autoplay
      loop
      mode="normal"
      src="https://assets4.lottiefiles.com/packages/lf20_2UeWRZ.json"
      style={{ width: "500px", height: "500px" }}
    ></lottie-player>
  );
};

const SkillsPage = () => (
  <Container>
    <SkillsAnimation />
    <ContentSkills>
      <TitleSkills>
        <i className="fas fa-info-circle" />
        &nbsp;Habilidades com Desenvolvimento
      </TitleSkills>

      <Skills>
        <i className="fab fa-php" />
      </Skills>
      <Skills>
        <i className="fab fa-node" />
      </Skills>
      <Skills>
        <i className="fab fa-js-square" />
      </Skills>
      <Skills>
        <i className="fas fa-database" />
      </Skills>
      <Skills>
        <i className="fab fa-react" />
      </Skills>
      <Skills>
        <i className="fas fa-mobile-alt" />
      </Skills>
    </ContentSkills>
  </Container>
);

export default SkillsPage;
