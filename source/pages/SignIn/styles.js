import styled from "styled-components";

import { Button } from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 31.6rem;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 1.1rem;

  margin: 16rem 0 7rem;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  label:nth-child(2) {
    margin-bottom: 3.2rem;
  }

  a {
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ButtonSignIn = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
