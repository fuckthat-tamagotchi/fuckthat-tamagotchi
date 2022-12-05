import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { BNBTestnet } from "./Types/Chain";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export const chains = [BNBTestnet];
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
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
