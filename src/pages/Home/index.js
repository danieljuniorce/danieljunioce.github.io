import React from "react";

import {
  Container,
  ContentBody,
  Title,
  SubTitle,
  ImgIcons,
  ContentIcons,
  Animation
} from "./styled";

const HomeAnimation = () => {
  return (
    <Animation>
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/temp/lf20_KQd5BP.json"
        style={{ width: "400px", height: "400px" }}
      ></lottie-player>
    </Animation>
  );
};

const HomePage = () => {
  return (
    <>
      <Container>
        <HomeAnimation />
        <ContentBody>
          <Title>Daniel Junior</Title>
          <SubTitle>@danieljuniorce</SubTitle>

          <ContentIcons>
            <ImgIcons href="https://github.com/danieljuniorce" target="_blank">
              <i className="fab fa-github" />
              &nbsp;Github
            </ImgIcons>
            <ImgIcons href="https://twitter.com/danieljuniorce" target="_blank">
              <i className="fab fa-twitter" />
              &nbsp;Twitter
            </ImgIcons>
            <ImgIcons
              href="https://instagram.com/danieljuniorce"
              target="_blank"
            >
              <i className="fab fa-instagram" />
              &nbsp;Instagram
            </ImgIcons>
          </ContentIcons>
        </ContentBody>
      </Container>
    </>
  );
};

export default HomePage;
