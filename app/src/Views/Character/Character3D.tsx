import React, { Suspense } from "react";
import { ReactFC } from "../../Types/ReactFC";
import {
  CharacterActions,
  CharacterImage,
  CharacterLevel,
  CharacterName,
  CharacterWrapper,
} from "./Styles";
import { Button, Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
import { Visor } from "./Components/Visor";

export const Character3D: ReactFC = () => {
  return (
    <CharacterWrapper>
      <CharacterName>MUNHECO MALUCO</CharacterName>
      <CharacterLevel levelPercentage={90}>level 125 - 90%</CharacterLevel>
      <CharacterImage>
        <Suspense fallback={<div>Loading!</div>}>
          <Card bg={"rgba(255, 255, 255, 0.1)"}>
            <CardBody justifyContent={"center"} display="flex">
              <Visor />
            </CardBody>
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button variant="ghost" leftIcon={<span>🫶</span>} size="md">
                Pet
              </Button>
              <Button variant="ghost" leftIcon={<span>💩</span>} size="md">
                Clean poop
              </Button>
              <Button variant="ghost" leftIcon={<span>🍕</span>} size="md">
                Feed
              </Button>
            </CardFooter>
          </Card>
        </Suspense>
      </CharacterImage>
      <CharacterActions>
        <Stack
          flexWrap="wrap"
          direction="row"
          justifyContent={"center"}
          align={"center"}
        ></Stack>
      </CharacterActions>
    </CharacterWrapper>
  );
};
