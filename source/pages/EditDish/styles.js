import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  main {
    width: 100%;
    height: max-content;
    padding: 1rem 3.2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 3.2rem;
  }
  
  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 140%;
    margin: 2.2rem 0 3.6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .delete {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    .save {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 0.8rem;
    border-radius: 0.8rem;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    gap: 1.6rem;
    width: 100%;
  }
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
