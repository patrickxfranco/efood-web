import styled from "styled-components";

import { Button } from "../../components/Button";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    justify-content: center;
    flex-direction: column;
    padding: 3.5rem 5.7rem;
    display: flex;
    width: 100%;
  }

  .food {
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 100%;
  }

  .food img {
    height: 26.4rem;
    width: 26.4rem;
  }

  .food h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 1.6rem;
    font-size: 2.7rem;
    line-height: 140%;
    font-weight: 500;
  }

  .food p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 2.4rem;
    text-align: center;
    font-size: 1.6rem;
    line-height: 140%;
    font-weight: 300;
    width: 30rem;
  }

  .tags {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .amount {
    align-items: center;
    flex-direction: row;
    display: flex;
    gap: 1.4rem;
  }

  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    margin-top: 4rem;
  }
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  font-family: "Poppins", sans-serif;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  flex-direction: row;
  align-items: center;
  line-height: 2.4rem;
  width: max-content;
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  gap: 1rem;
`;

export const ButtonIcon = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  line-height: 2.4rem;
  font-size: 2.4rem;
  margin: 1.2rem 0;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonRequest = styled(Button)`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1rem;
`;
