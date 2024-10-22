import { Container } from "./styles";

export function TextArea({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon ? <Icon /> : null}
      <textarea {...rest} />
    </Container>
  );
}
