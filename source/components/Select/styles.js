import styled from "styled-components";

export const Container = styled.label`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border-radius: 0.8rem;
  transition: all 0.2s;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 4.8rem;
  display: flex;
  width: 100%;
  gap: 1.4rem;

  select {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;
    padding: 1.2rem 1.4rem;
    appearance: none;
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
  }

  select option {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  > div {
    pointer-events: none;
    position: absolute;
    right: 1.6rem;
    top: 0.7rem;
  }
`;
