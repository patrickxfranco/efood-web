import { Container } from "./styles";

import { MdClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

export function Tag({ name, isNew }) {
  return (
    <Container isNew={isNew}>
      {
        isNew
        ? <span>Adicionar <FiPlus /></span>
        : <span>{name} <MdClose /></span>
      }
    </Container>
  );
} 