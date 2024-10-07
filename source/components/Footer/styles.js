import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 2.5rem;
  font-size: 1.2rem;
  padding: 2.9rem;
  display: flex;
  gap: 2rem;

  > .mark {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-family: "Roboto", sans-serif;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    display: flex;
    gap: 0.8rem;
  }

  strong {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
  }
`;
