import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.4rem 1fr auto;
  grid-template-areas: "header" "content" "footer";

  main {
    margin: 3.6rem;
    grid-area: content;
  }

  footer {
    grid-area: footer;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 3.6rem;
  }

  li {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    transition: all 0.2s;
  }

  a:hover {
    filter: brightness(0.8);
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  grid-area: header;
`;

export const TitlePage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;

  h1 {
    font-size: 2.11rem;
    font-weight: 400;
  }

  button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
