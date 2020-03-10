import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76vh;
`;

export const ContentSkills = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const TitleSkills = styled.h1`
  margin-bottom: 15px;
`;

export const Skills = styled.button`
  background: #512d8a;
  height: 40px;
  width: 140px;
  font-size: 25pt;
  border-radius: 20px;
  color: white;
  border: 0;
  box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.02);
  margin-bottom: 5px;
`;

export const Animation = styled.span`
  @media (max-width: 762px) {
    display: none;
  }
`;
