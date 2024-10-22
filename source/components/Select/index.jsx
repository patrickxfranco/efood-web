import { MdKeyboardArrowDown } from "react-icons/md";

import { Container } from "./styles";

export function Select({ icon: Icon, children, ...rest }) {
  return (
    <Container {...rest}>
      <select {...rest}>
        {children}
      </select>
      <div>
        <MdKeyboardArrowDown size={34} />
      </div>
    </Container>
  );
}
