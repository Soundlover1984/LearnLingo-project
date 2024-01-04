import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { mediaSizes } from 'styles/constants/mediaSizes';
import { colors } from 'styles/constants/colors';

export const Menu = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 80px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
  background-color: ${colors.colorOrange};
  z-index: 200;
`;

export const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${colors.colorWhite};

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 24px;
    line-height: 1.2;
  }

  &.active {
    color: #fff;
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;