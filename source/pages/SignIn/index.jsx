import { Container, Header, Form, ButtonSignIn } from "./styles";

import { InputWrapper } from "../../components/InputWrapper/InputWrapper";
import { Input } from "../../components/Input";

import eFoodLogo from "../../assets/efood.svg";

export function SignIn() {
  return (
    <Container>
      <main>
        <Header>
          <img src={eFoodLogo} alt="Logo eFood" />
          <h1>eFood</h1>
        </Header>
        <Form>
          <InputWrapper label="Email" htmlFor="input-email">
            <Input placeholder="email@email.com.br" type="email" id="input-email" />
          </InputWrapper>
          <InputWrapper label="Senha" htmlFor="input-password">
            <Input placeholder="No mínimo 6 caracteres" type="password" id="input-password" />
          </InputWrapper>
          <ButtonSignIn value="Entrar" type="submit" />
          <a href="#">Criar uma conta</a>
        </Form>
      </main>
    </Container>
  );
}
