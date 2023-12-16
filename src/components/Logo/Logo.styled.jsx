import styled from "@emotion/styled";
import { transition } from "helpers/mixins";
import { NavLink } from "react-router-dom";

export const LogoStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  ${transition("opacity")};
  &:hover {
    opacity: 0.8;
  }
  & img {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.div`
margin-left: 8px;
color: #121417;
font-size: 20px;
font-weight: 500;
line-height: 1.2;
letter-spacing: -0.4px;
`;