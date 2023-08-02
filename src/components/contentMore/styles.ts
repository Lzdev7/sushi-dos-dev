import { styled } from "styled-components";

export const ContainerMore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  gap: 10rem;

  .contentMore {
    display: flex;
    gap: 4rem;



    img {
      width: 700px;
      height: 500px;
      border-radius: 3px;
    }
  }

  .contentMoreLegend {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;

    h1 {
      width: 300px;
      color: #FF0000;
    }

    p {
      width: 400px;
      font-size: 1.3rem;
      font-weight: 400;
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 1.3rem;
      color: #FFF;
      border-radius:10px;
      background: #FF0000;
      width: 170px;
      height: 40px;
    }
  }
`;