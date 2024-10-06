import { Container } from "./styles";

import efoodLogo from "../../assets/efood2.svg";

export function Footer() {
  return (
    <Container>
      <div className="mark">
        <img src={efoodLogo} alt="Logomarca eFood" />
        <span>eFood</span>
      </div>
      <strong>&copy; 2023 - Todos os direitos reservados.</strong>
    </Container>
  );
}