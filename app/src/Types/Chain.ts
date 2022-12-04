import { Chain } from "wagmi";

export const BNBTestnet: Chain = {
  id: 97,
  network: "Binance Smart Chain Tesnet",
  name: "Binance Smart Chain Tesnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s3.binance.org:8545",
  },
  blockExplorers: {
    default: {
      name: "BSC Scan",
      url: '"https://testnet.bscscan.com/"',
    },
  },
};
