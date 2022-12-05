import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { useAccount } from "wagmi";
import { MintButton } from "./Components/MintButton";
import { Stack } from "@chakra-ui/react";

export const Home = () => {
  const account = useAccount();

  return (
    <div>
      {!account.isConnected ? (
        <>
          <Alert status="info" color={"#000"}>
            <AlertIcon />
            For using the app, please first connect your wallet using the top
            right button "Connect Wallet"
          </Alert>
          <br />
        </>
      ) : null}

      <Stack
        marginBottom={"1rem"}
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
        width={"100%"}
      >
        <MintButton />
      </Stack>
      <p>
        Welcome to the world of Tamagotchi! With this application, you can
        collect and care for your own virtual pets in a fun and interactive way.
        Our Tamagotchis come in all shapes and sizes, and you can get them by
        minting them using cryptocurrencies. You can pet, clean, and feed your
        Tamagotchis, and they'll be sure to love you back! So why not give it a
        go and start your own Tamagotchi family today?
      </p>
    </div>
  );
};
