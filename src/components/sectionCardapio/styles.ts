import styled from "styled-components";

export const TitleCardapio = styled.h1`
  margin-top: 5rem;
  margin-left: 10rem;

  .linha {
    height: 2px;
    width: 100px;
    background: #FF0000;
    margin-left: 6rem;
  }
`;

export const SectionCardapioContainer = styled.div`

  .title h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  }

  .containerCard {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:2rem;
    margin-top: 7rem;
  }
 
  .card {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 10px 38px 53px 0px rgba(0,0,0,0.1);
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover {
      border-left: 3px solid #FF0000;
      border-bottom: 3px solid #FF0000;
      transition: 1s ease-in;
      scale: 1.06;
    }

    img {
      width: 300px;
      height: 200px;
      margin-left: 3rem;
      position: absolute;
      margin-top: -70px;
    }


    .contentCard {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 150px;
      justify-content: center;
      gap: 1rem;

      h1 {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 1.5rem;
      }

      h3 {
        color: #FF0000;
      }

      h4 {
        text-align: center;
        width: 250px;
        font-size: 0.8rem;
      }
    }
  }

  .plusCardapio {
    display: flex;
    flex-direction: column;
    align-items: self-end;
    margin-top: 4rem;
    margin-right: 7rem;
    cursor: pointer;

    h1 {
      font-size: 2rem;
      transition: 1s all ease-in-out;

      &:hover {
        scale: 1.1;
      }
    }
    
  }

  .linha {
    height: 2px;
    width: 150px;
    background:#FF0000;
  }

`;