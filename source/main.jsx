import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { NewDish } from "./pages/NewDish";

import GlobalStyle from "./styles/global";
import Theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <NewDish />
    </ThemeProvider>
  </StrictMode>
);
