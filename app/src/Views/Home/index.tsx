import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { useAccount } from "wagmi";

export const Home = () => {
  const account = useAccount();

  if (account.isConnected) {
    return (
      <div>
        <div>{account.isConnected}</div>
      </div>
    );
  }

  return (
    <div>
      <Alert status="info" color={"#000"}>
        <AlertIcon />
        For using the app, please first connect your wallet using the top right
        button "Connect Wallet"
      </Alert>
    </div>
  );
};
