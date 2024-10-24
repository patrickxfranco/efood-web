import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { EditDish } from "./pages/EditDish";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <EditDish />
    </ThemeProvider>
  </StrictMode>
);
