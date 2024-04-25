import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d", // existing blue
    800: "#153e75", // existing blue
    700: "#f8f8f8", // off-white background
    600: "#333333", // very dark grey text
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        fontFamily: "'EB Garamond', serif",
        backgroundColor: "#f8f8f8",
        color: "#333333"
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);