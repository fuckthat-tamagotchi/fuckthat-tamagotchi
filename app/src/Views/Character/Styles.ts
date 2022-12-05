import styled from "@emotion/styled";
import { palette } from "../../Theme/colors";

export const CharacterWrapper = styled.div``;

export const CharacterLevel = styled.div<{ levelPercentage: number }>`
  color: ${palette.color2};
  font-weight: 600;
  position: relative;
  padding-bottom: 0.25rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => props.levelPercentage}%;
    height: 2px;
    background: ${palette.color2};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
  }
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
