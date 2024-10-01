import styled from "styled-components";

export const Container = styled.button`
  height: 4.8rem;
  width: 100%;

  border-radius: 0.5rem;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: 500;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
