import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { Container } from "./styles";

import eFoodLogo from "../../assets/efood.svg";

export function Header() {
  return (
    <Container>
      <button>
        <FiMenu size={24} />
      </button>
      <div>
        <img src={eFoodLogo} alt="eFood Logo" />
        <h2>eFood</h2>
      </div>
      <button className="receipt">
        <PiReceipt size={30} />
      </button>
    </Container>
  );
}
