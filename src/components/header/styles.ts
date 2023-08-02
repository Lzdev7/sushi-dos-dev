import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 14rem;
  margin-top: 0.4rem;

  h1 {
    color: #000;
  }

  span {
    color: #FF0000;
  }

  button {
    border: 1px solid black;
    height: 30px;
    width: 100px;
    font-size: 1.1rem;
    background: transparent;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 1s ease-in-out;

    &:hover {
      background: #FF0000;
      border: none;
      color: #fff;
      font-size: 1rem;
    }
  }

  .headerlist ul {
    display: flex;
    cursor: pointer;
    gap: 4rem;

    li {
      font-size: 1.3rem;
      color: #000;
    }
  }
`;