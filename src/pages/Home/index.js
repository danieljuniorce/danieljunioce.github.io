import React from "react";

import {
  Container,
  ContentBody,
  Title,
  SubTitle,
  ImgIcons,
  ContentIcons
} from "./styled";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <Container>
        <Navbar />

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

        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
