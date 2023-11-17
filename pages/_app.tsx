import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import "reset-css";
import theme from "../styles/theme.js";
import PlayerLayout from "../components/playerLayout";
import { store } from "../lib/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    // Wrap the entire application with the ChakraProvider using a specific theme
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {/* Conditional rendering based on the 'authPage' property of 'Component' */}
        {Component.authPage ? (
          // If 'authPage' is true, render 'Component' directly with 'pageProps'
          <Component {...pageProps} />
        ) : (
          // If 'authPage' is false, wrap 'Component' with the 'PlayerLayout' component
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
