import styled from "@emotion/styled";
import { colors } from "../../Theme/colors";

export const LayoutWrapper = styled.div`
  background: ${colors.bg};
  min-height: 100vh;
  color: ${colors.text};
`;

export const Header = styled.div`
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 2rem;

  .header-content {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .connect-button {
    font-size: 1rem;
  }
`;
