import { styled } from "styled-components";

export const ContainerMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  .contentMore{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 800px;
    gap: 2rem;

    p {
      text-align: left;
      width: 800px;
      font-size: 1.4rem;
    }
  }
`;