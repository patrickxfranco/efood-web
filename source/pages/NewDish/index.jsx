import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { Container, ButtonIcon } from "./styles";

import { Header } from "../../components/Header";
import { InputWrapper } from "../../components/InputWrapper";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export function NewDish() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonIcon type="button">
          <MdOutlineKeyboardArrowLeft size={32} />
          voltar
        </ButtonIcon>
        <h1>Novo prato</h1>
        <form>
          <InputWrapper label="Imagem do prato" htmlFor="input-image">
            <Input type="file" id="input-image" />
          </InputWrapper>
          <InputWrapper label="Nome" htmlFor="input-name">
            <Input placeholder="Ex: Salada Ceasar" type="text" id="input-name" />
          </InputWrapper>
          <InputWrapper label="Categoria" htmlFor="input-category">
            <Select id="input-category">
              <option>Refeição</option>
              <option>Salada</option>
              <option>Sobremesa</option>
              <option>Bebida</option>
            </Select>
          </InputWrapper>
          <InputWrapper label="Ingredientes" htmlFor="input-ingredients">
            <div className="tags">
              <Tag name="cebola" />
              <Tag name="tomate" />
              <Tag isNew />
            </div>
          </InputWrapper>
          <InputWrapper label="Preço" htmlFor="input-price">
            <Input placeholder="R$ 00,00" type="number" id="input-price" />
          </InputWrapper>
          <InputWrapper label="Descrição" htmlFor="input-description">
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              id="input-description"
            />
          </InputWrapper>
          <Button value="Salvar alterações"/>
        </form>
      </main>
      <Footer />
    </Container>
  );
}
