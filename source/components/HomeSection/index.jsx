import { Container, Content } from "./styles";

export function HomeSection({ title, children }) {
  return (
    <Container>
      <span>{title}</span>
      <Content>
        {children}
      </Content>
    </Container>
  );
}