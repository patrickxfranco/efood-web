import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { DishDetail } from "./pages/DishDetail";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <DishDetail />
    </ThemeProvider>
  </StrictMode>
);
