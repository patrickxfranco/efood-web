import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  flex-direction: column;
  display: flex;
  gap: 1.6rem;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;