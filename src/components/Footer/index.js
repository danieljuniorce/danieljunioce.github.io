/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import { Container, FooterUp, FooterDown } from "./styled";

const Footer = () => {
  return (
    <Container>
      <FooterUp>
        Created by &hearts;{" "}
        <a href="https://instagram.com/danieljuniorce" target="_blank">
          @danieljuniorce
        </a>
        .
      </FooterUp>
      <FooterDown>&copy;2020 Copyright - Todos direitos reservados.</FooterDown>
    </Container>
  );
};

export default Footer;
