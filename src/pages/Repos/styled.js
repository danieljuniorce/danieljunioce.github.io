import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 76vh;
`;

export const TitlePage = styled.h1`
  margin-bottom: 15px;
`;

export const StructRepos = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 80px;
`;

export const ContentRepos = styled.div`
  display: flex;
  background: #dddddd;
  width: 400px;
  height: 60px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.09);
  flex-direction: column;
`;

export const NameRepos = styled.h1`
  font-size: 16pt;
  color: #333;
  text-align: center;
  margin-bottom: 5px;
`;

export const LinkRepos = styled.a`
  text-decoration: none;
  color: #333;
  text-align: center;

  &:hover {
    text-decoration: underline;
    color: #323;
  }
`;
