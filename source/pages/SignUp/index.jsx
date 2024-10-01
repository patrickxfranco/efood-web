import { Container, Header, Form, ButtonSignUp } from "./styles";

import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Input } from "../../components/Input";

import eFoodLogo from "../../assets/efood.svg";

export function SignUp() {
  return (
    <Container>
      <main>
        <Header>
          <img src={eFoodLogo} alt="Logo eFood" />
          <h1>eFood</h1>
        </Header>
        <Form>
          <InputWrapper label="Nome" htmlFor="input-name">
            <Input placeholder="John Doe" type="text" id="input-name" />
          </InputWrapper>
          <InputWrapper label="Email" htmlFor="input-email">
            <Input placeholder="johndoe@email.com.br" type="email" id="input-email" />
          </InputWrapper>
          <InputWrapper label="Senha" htmlFor="input-password">
            <Input placeholder="No mínimo 6 caracteres" type="password" id="input-password" />
          </InputWrapper>
          <ButtonSignUp value="Criar conta" />
          <a href="#">Já tenho uma conta</a>
        </Form>
      </main>
    </Container>
  );
}
