import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 1.6rem;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
