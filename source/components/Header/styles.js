import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  grid-template-columns: auto 1fr auto;
  padding: 5.6rem 2.8rem 2.4rem;
  justify-content: center;
  align-items: center;
  display: grid;

  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: transparent;
    cursor: pointer;
    border: none;

    &:hover {
      filter: brightness(0.9);
    }
  }

  > div {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 0.8rem;

    cursor: default;

    img {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;
