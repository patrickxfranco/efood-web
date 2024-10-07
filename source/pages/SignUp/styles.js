import styled from "styled-components";

import { Button } from "../../components/Button";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  > main {
    max-width: 31.6rem;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  justify-content: left;
  margin: 16rem 0 7rem;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 1.1rem;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;

  flex-direction: column;
  align-items: center;
  display: flex;

  label:nth-child(2) {
    margin-bottom: 3.2rem;
  }

  a {
    margin-top: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins";
    text-decoration: none;
    transition: all 0.2s;
    line-height: 2.4rem;
    font-size: 1.4rem;
    font-weight: 500;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ButtonSignUp = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
