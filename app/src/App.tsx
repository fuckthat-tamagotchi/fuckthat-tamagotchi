import React from "react";
import { Home } from "./Views/Home";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";
import { wagmiClient, chains } from "./Config";
import { WagmiConfig } from "wagmi";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Character } from "./Views/Character";

import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character",
    element: <Character />,
  },
]);

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          showRecentTransactions={true}
          modalSize="compact"
          theme={darkTheme()}
          chains={chains}
        >
          <ChakraProvider>
            <div className="App">
              <Layout>
                <RouterProvider router={router} />
              </Layout>
            </div>
          </ChakraProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
