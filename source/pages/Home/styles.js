import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 0 2.4rem;
  }
`;

export const Detach = styled.div`
  background: linear-gradient(180deg, rgba(9, 30, 38, 1) 0%, rgba(0, 19, 28, 1) 100%);
  width: 100%;
  height: 12rem;
  margin: 4.4rem auto 0;
  border-radius: 0.29rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: visible;

  img {
    margin-left: -2rem;
    height: 15rem; 
    width: 19.1rem;
    margin-bottom: 3rem;
    opacity: 80%;
  }

  div {
    font-family: "Poppins", sans-serif;
    width: 23rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    right: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  span {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
