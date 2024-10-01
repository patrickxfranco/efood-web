import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  > button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    cursor: default;

    img {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;