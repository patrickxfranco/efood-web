import styled from "styled-components";

export const Container = styled.button`
  font-family: "Poppins", sans-serif;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.2s;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  height: 4.8rem;
  border: none;
  width: 100%;
  display: flex;
  gap: 0.8rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
