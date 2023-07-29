import { styled } from "styled-components";

export const ContainerFooder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  gap: 13rem;

  span {
    color: #FF0000;
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      cursor: pointer;
    }

    li{
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: bold;
    }
  }

  .more {
    flex-direction: column;
    display: flex;
    gap: 2rem;


    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      cursor: pointer;
    }

    li{
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: bold;
    }
    
  }
`;