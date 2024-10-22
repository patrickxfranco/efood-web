import styled from "styled-components";

export const Container = styled.label`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.2rem 1.4rem;
  border-radius: 0.8rem;
  transition: all 0.2s;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  height: max-content;
  display: flex;
  width: 100%;
  gap: 1.4rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  }

  > textarea {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;
    outline: none;
    min-height: 20rem;
    border: none;
    width: 100%;
    height: 100%;
    resize: vertical;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
