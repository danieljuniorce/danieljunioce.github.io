import React, { useState, useEffect } from "react";
import { Container, ImgUser, TextBody, Title, ContentUser } from "./styled";

import api from "../../services/api";

const SobreAnimation = () => {
  return (
    <lottie-player
      autoplay
      loop
      mode="normal"
      src="https://assets5.lottiefiles.com/packages/lf20_emIAZ3.json"
      style={{ width: "500px", height: "500px" }}
    ></lottie-player>
  );
};

function SobrePage() {
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get("danieljuniorce");
      setUserImg(response.data.avatar_url);
      setUserName(response.data.name);
      setUserBio(response.data.bio);
    }

    loadInfo();
  }, []);

  return (
    <Container>
      <SobreAnimation />

      <ContentUser>
        <ImgUser src={userImg} alt="user" />
        <Title>{userName}</Title>
        <TextBody>{userBio}</TextBody>
        <TextBody>
          &nbsp;&nbsp;Hey, sou Daniel Souza, jovem apaixonado por criar,
          tecnologia e razões sociais. Desde meu primeiro contato com um
          computador nos nobres 9 anos de idade, foi de extrema identificação, e
          hoje, unir o útil ao agradavél que é criatividade e a computação, e
          encontrei isso na Programação Web, desde lá venho buscando se
          capacitar na área. Atualmente estou com 21 anos e cursando Analise e
          Desenvolvimento de Sistemas no quarto período.
        </TextBody>
      </ContentUser>
    </Container>
  );
}

export default SobrePage;
