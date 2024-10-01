import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import { Container, ButtonIcon, ButtonAdd } from "./styles";

export function FoodCard({ foodPicture, foodName, foodPrice }) {
  return (
    <Container>
      <img src={foodPicture} alt={foodName} />
      <ButtonIcon>
        {foodName}
        <MdOutlineKeyboardArrowRight size={18} />
      </ButtonIcon>
      <span>R$ {foodPrice}</span>
      <div className="amount">
        <ButtonIcon>
          <FaMinus />
        </ButtonIcon>
        <strong>01</strong>
        <ButtonIcon>
          <FaPlus />
        </ButtonIcon>
      </div>
      <ButtonAdd value="incluir" />
      <div className="fav">
        <FaRegHeart size={24} />
      </div>
    </Container>
  );
}
