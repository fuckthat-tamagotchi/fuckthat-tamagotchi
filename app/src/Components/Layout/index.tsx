import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactFC } from "../../Types/ReactFC";
import { Header, LayoutWrapper } from "./Styles";
import { Container, Flex, Spacer } from "@chakra-ui/react";

export const Layout: ReactFC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header>
        <div className="header-content">
          <Flex>
            <span onClick={() => window.location.assign("/")}>
              fuckthat-tamagotchi
            </span>
            <Spacer />
            <span className="connect-button">
              <ConnectButton />
            </span>
          </Flex>
        </div>
      </Header>
      <Container maxW={"container.xl"}>{children}</Container>
    </LayoutWrapper>
  );
};
