import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { PiReceipt } from "react-icons/pi";

import { Container, Tag, ButtonIcon, ButtonRequest } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import food from "../../assets/Mask group.png";

export function DishDetail() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonIcon type="button">
          <MdOutlineKeyboardArrowLeft size={32} />
          voltar
        </ButtonIcon>
        <div className="food">
          <img src={food} alt="Imagem do prato" />
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        </div>
        <div className="tags">
          <Tag>alface</Tag>
          <Tag>cebola</Tag>
          <Tag>pão naan</Tag>
          <Tag>pepino</Tag>
          <Tag>rabanete</Tag>
          <Tag>tomate</Tag>
        </div>
        <div className="quantity">
          <div className="amount">
            <ButtonIcon type="button" title="Diminuir quantidade">
              <FaMinus />
            </ButtonIcon>
            <strong>01</strong>
            <ButtonIcon type="button" title="Aumentar quantidade">
              <FaPlus />
            </ButtonIcon>
          </div>
          <ButtonRequest icon={PiReceipt} value="pedir ∙ R$25.00" />
        </div>
      </main>
      <Footer />
    </Container>
  );
}
