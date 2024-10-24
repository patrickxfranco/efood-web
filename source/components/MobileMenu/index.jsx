import { IoCloseSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi"

import { Container, Header, TitlePage } from "./styles";

import { Input } from "../Input";
import { Footer } from "../Footer";

export function MobileMenu() { 
  return (
    <Container>
      <Header>
        <TitlePage>
          <button type="button" title="Fechar">
            <IoCloseSharp size={30} />
          </button>
          <h1>Menu</h1>
        </TitlePage>
      </Header>
      <main>
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
        <ul>
          <li><a href="#">Novo prato</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </main>
      <Footer />
    </Container>    
  );
}