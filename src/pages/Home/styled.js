import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  &:hover {
    color: #512d8a;
    text-decoration: underline;
  }
`;

export const SubTitle = styled.p`
  font-size: 16pt;
  &:hover {
    color: #512d8a;
    text-decoration: underline;
  }
`;

export const ContentIcons = styled.div`
  margin-top: 20px;
  flex-direction: row;
`;

export const ImgIcons = styled.a`
  text-decoration: none;
  font-size: 16pt;
  margin-left: 9px;
  color: white;

  &:hover {
    color: #512d8a;
    text-decoration: underline;
  }
`;
