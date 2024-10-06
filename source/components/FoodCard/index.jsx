import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import { Container, ButtonIcon, ButtonAdd } from "./styles";

export function FoodCard({ foodPicture, foodName, foodPrice }) {
  return (
    <Container>
      <img src={foodPicture} alt={foodName} />
      <ButtonIcon type="button">
        {foodName}
        <MdOutlineKeyboardArrowRight size={18} />
      </ButtonIcon>
      <span>R$ {foodPrice}</span>
      <div className="amount">
        <ButtonIcon type="button" title="Diminuir quantidade">
          <FaMinus />
        </ButtonIcon>
        <strong>01</strong>
        <ButtonIcon type="button" title="Aumentar quantidade">
          <FaPlus />
        </ButtonIcon>
      </div>
      <ButtonAdd value="incluir" type="button" />
      <ButtonIcon className="fav" type="button" title="Adicionar aos favoritos">
        <FaRegHeart size={24} />
      </ButtonIcon>
    </Container>
  );
}
