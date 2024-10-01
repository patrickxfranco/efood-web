import { Button } from "../../components/Button";

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  flex-direction: column;
  border-radius: 0.8rem;
  align-items: center;
  padding: 2.4rem;
  display: flex;
  width: 21rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  position: relative;

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  span, strong {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
  }

  strong {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.6rem;
  }

  .fav {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const ButtonIcon = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.2rem 0;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
`;

export const ButtonAdd = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
