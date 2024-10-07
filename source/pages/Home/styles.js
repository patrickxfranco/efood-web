import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    padding: 0 2.4rem;
  }
`;

export const Detach = styled.div`
  background: linear-gradient(180deg, rgba(9, 30, 38, 1) 0%, rgba(0, 19, 28, 1) 100%);
  border-radius: 0.29rem;
  margin: 4.4rem auto 0;
  flex-direction: row;
  align-items: center;
  overflow: visible;
  display: flex;
  height: 12rem;
  width: 100%;

  img {
    margin-bottom: 3rem;
    margin-left: -2rem;
    width: 19.1rem;
    height: 15rem;
    opacity: 80%;
  }

  div {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    flex-direction: column;
    display: flex;
    width: 23rem;
    gap: 0.3rem;
    right: 0;
  }

  span {
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
