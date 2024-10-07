import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  padding-left: 2.4rem;
  margin-top: 2.4rem;
  display: flex;
  gap: 2.4rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  flex-direction: row;
  overflow-x: scroll;
  display: flex;
  gap: 1.6rem;
`;
