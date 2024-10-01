import { Container } from "./styles";

export function InputWrapper({ htmlFor, label, children }) {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </Container>
  );
}
