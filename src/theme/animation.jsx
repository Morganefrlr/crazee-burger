import { css, keyframes } from "styled-components";

export const adminPanelAnim = css`
  .adminTransition-appear {
    opacity: 0.1;
    transform: translateY(100%);

    &.adminTransition-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 300ms;
    }
  }
`;

export const fadeInFromRight = keyframes`
    0%{
        position: absolute;
        z-index: -1;
        opacity: 0;
        transform: translateX(100%);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const menuAnimation = css`
  .transitionCardMenu-enter {
    opacity: 0.1;
    transform: translateX(-120px);
    &.transitionCardMenu-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: all 300ms ease-out;
    }
  }

  .transitionCardMenu-exit {
    opacity: 1;
    transform: translateY(0);
    &.transitionCardMenu-exit-active {
      opacity: 0.1;
      transition: 300ms ease-out;
    }
  }
`;
