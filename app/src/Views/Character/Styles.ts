import styled from "@emotion/styled";
import { colors, palette } from "../../Theme/colors";

export const CharacterWrapper = styled.div``;

export const CharacterLever = styled.div`
  color: ${palette.color2};
  font-weight: 600;
`;

export const CharacterName = styled.div`
  color: ${palette.color4};
  font-size: 1.5rem;
  font-weight: 200;
`;

export const CharacterImage = styled.div`
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    border-radius: 1rem;

    img {
      filter: drop-shadow(0 0 0.75rem rgb(255, 217, 0));
      width: 25rem;
      height: auto;
      border-radius: 1rem;
    }
  }
`;

export const CharacterActions = styled.div``;
