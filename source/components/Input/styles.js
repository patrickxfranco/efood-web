import styled from "styled-components";

export const Container = styled.label`
  height: 4.8rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.4rem;

  padding: 1.2rem 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.8rem;
  overflow: hidden;
  transition: all 0.2s;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;
    outline: none;
    height: 100%;
    border: none;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
