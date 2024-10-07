import { Button } from "../../components/Button";

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  flex-direction: column;
  border-radius: 0.8rem;
  align-items: center;
  position: relative;
  min-width: 21rem;
  padding: 2.4rem;
  display: flex;

  img {
    height: 8.8rem;
    width: 8.8rem;
  }

  span,
  strong {
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
    margin-bottom: 1.6rem;
    align-items: center;
    flex-direction: row;
    margin-top: 1.2rem;
    display: flex;
    gap: 1.4rem;
  }

  .fav {
    position: absolute;
    margin: 1.6rem;
    right: 0;
    top: 0;
  }
`;

export const ButtonIcon = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  line-height: 2.4rem;
  font-size: 1.4rem;
  margin: 1.2rem 0;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonAdd = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
