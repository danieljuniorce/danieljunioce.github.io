import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

export const Title = styled.h1`
  font-size: 50pt;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  font-size: 16pt;
  color: #333;
`;

export const ContentIcons = styled.div`
  margin-top: 20px;
  flex-direction: row;
`;

export const ImgIcons = styled.a`
  text-decoration: none;
  font-size: 16pt;
  margin-left: 9px;
  color: #333;

  &:hover {
    color: #333ddd;
    text-decoration: underline;
  }
`;
