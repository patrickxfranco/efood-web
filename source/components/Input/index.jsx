import { Container } from "./styles";

export function Input({ icon: Icon, ...rest}) {
  return (
    <Container>
      {Icon ? <Icon /> : null}
      <input {...rest} />
    </Container>
  );
};
