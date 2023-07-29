import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.4rem;

  span {
    color: #FF0000;
  }

  button {
    border: 1px solid black;
    height: 30px;
    width: 100px;
    background: transparent;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .headerlist ul {
    display: flex;
    cursor: pointer;
    gap: 4  rem;

    li {
      font-size: 1.3rem;
    }
  }
`;