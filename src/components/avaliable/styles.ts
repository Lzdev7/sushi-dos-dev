import styled from "styled-components";

export const TitleAvaliable = styled.h1`
  display: flex;
  align-items: center;
  margin-top:10rem;
  margin-left: 9rem;
`;

export const AvaliableComents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 5rem;

  .coments {
    box-shadow: 20px 38px 53px 10px rgba(0,0,0,0.1); 
    border-top: 2px solid #FF0000;
    width: 600px;
    height: 300px;
    border-radius: 20px;
  }

  .contentComents {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 150px;
      height: 100px;
      border-radius: 50%;
    }


    p {
      width: 400px;
    }
  }


`;