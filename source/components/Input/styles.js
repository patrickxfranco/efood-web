import styled from "styled-components";

export const Container = styled.label`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.2rem 1.4rem;
  border-radius: 0.8rem;
  transition: all 0.2s;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  height: 4.8rem;
  display: flex;
  width: 100%;
  gap: 1.4rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
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
