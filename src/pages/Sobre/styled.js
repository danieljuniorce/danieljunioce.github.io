import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 76vh;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding: 0 100px 0 100px;
`;

export const ImgUser = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 2px solid white;
  margin-top: 20px;
  margin-bottom: 9px;
  background: #512d8a;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 21pt;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: #512d8a;
    text-decoration: underline;
  }
`;

export const TextBody = styled.p`
  font-size: 12pt;
  text-align: justify;
  margin-bottom: 6px;

  &:hover {
    color: #512d8a;
    text-decoration: underline;
  }
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
