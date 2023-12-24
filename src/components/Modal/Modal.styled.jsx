import styled from "@emotion/styled";
import { colors } from "styles/constants/colors";
import { mediaSizes } from "styles/constants/mediaSizes";
import { ishidden, transition } from "helpers/mixins";

const headerHeight = '88px';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 20;
  top: ${headerHeight};
  left: 0;
  width: 100%;
  max-height: calc(100% - ${headerHeight});
  opacity: 1;
  ${transition('visible')};

  @media screen and (min-width: ${mediaSizes.tablet}) {
    height: 100%;
    z-index: 20;
    top: 0;
    background-color: rgba(33, 33, 33, 0.12);
  }

  &.is-hidden {
    ${ishidden};

    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
    }
  }

  & .modal {
    position: fixed;
    top: ${headerHeight};
    left: 50%;
    width: 100%;
    max-height: calc(100% - ${headerHeight});
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.colorLightOrange};
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f1f1f1; 
    }

    transform: translateX(-50%) translateY(0px);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      top: calc(50% + 40px);
      width: 566px;
      height: auto;
      max-width: calc(100% - 24px * 2);
      transform: translateX(-50%) translateY(-50%);
    }
  }

  & .inner {
    border-radius: 30px;
    height: 100%;
    transform: scale(1);
    ${transition('transform')};
    overflow: hidden;
    padding: 80px 40px;
    background-color: #ffffff;
    position: relative;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
      padding: 64px;
    }
  }

  & .close {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;

    display: flex;
    align-items: center;

    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;