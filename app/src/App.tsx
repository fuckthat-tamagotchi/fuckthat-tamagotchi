import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { BNBTestnet } from "./Types/Chain";

import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Home } from "./Views/Home";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./Components/Layout";

const chains = [BNBTestnet];
const { provider } = configureChains(chains, [
  jsonRpcProvider({
    rpc: () => ({
      http: BNBTestnet.rpcUrls.default,
    }),
  }),
]);
const { connectors } = getDefaultWallets({
  appName: "FuckThat Tamagochi",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

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
                <Home />
              </Layout>
            </div>
          </ChakraProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
