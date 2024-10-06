import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  display: flex;
  gap: 2.4rem;
  margin-top: 2.4rem;
  padding-left: 2.4rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins';
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  overflow-x: scroll;
`;