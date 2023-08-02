import styled from "styled-components";

export const SectionMainContainer = styled.div`

  img {
    width: 400px;
    height: 600px;
  }

  .descriptionSushi {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 2rem;
    
    h1 {
      font-size: 4rem;
      width: 500px;
    }

    p {
      text-align: left;
      width: 400px;
      font-size:1.6rem;
    }

    h2 {
      color: #FF0000;
      font-size: 1.3rem;
      text-decoration-line:underline;
    }
  }

  .descriptionSushi button {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: #FF0000;
    color: #FFF;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .imgSection img {
    width: 600px;
    height: 500px;
    border-radius: 15px;
  }

  .containerSection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14rem;
    margin-top: 5rem;

    h1 {
      width: 400px;
      font-size: 3rem;
    }

  }

`;