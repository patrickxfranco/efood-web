import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, isNew }) => (isNew ? "transparent" : theme.COLORS.LIGHT_600)};
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  border: ${({ theme, isNew }) => isNew ? "dashed 1px " + theme.COLORS.LIGHT_500 : "none"};

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    text-transform: capitalize;
    color: ${({ theme, isNew }) => (isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100)};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }

  svg {
    cursor: pointer;
  }
`;
