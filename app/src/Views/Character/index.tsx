import React from "react";
import { ReactFC } from "../../Types/ReactFC";
import {
  CharacterActions,
  CharacterImage,
  CharacterLever,
  CharacterName,
  CharacterWrapper,
} from "./Styles";
import Mutant from "../../Assets/Mutant.png";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { palette } from "../../Theme/colors";

export const Character: ReactFC = () => {
  return (
    <CharacterWrapper>
      <CharacterLever>level 125</CharacterLever>
      <CharacterName>MUNHECO MALUCO</CharacterName>
      <CharacterImage>
        <span>
          <img src={Mutant} alt={Mutant} />
        </span>
      </CharacterImage>
      <CharacterActions>
        <Stack
          flexWrap="wrap"
          direction="row"
          justifyContent={"center"}
          align={"center"}
        >
          <Button bg={palette.color1} leftIcon={<span>🫶</span>} size="md">
            Pet
          </Button>
          <Button bg={palette.color1} leftIcon={<span>💩</span>} size="md">
            Clean poop
          </Button>
          <Button bg={palette.color1} leftIcon={<span>🍕</span>} size="md">
            Feed
          </Button>
        </Stack>
      </CharacterActions>
    </CharacterWrapper>
  );
};
