import { css } from "styled-components";

export const adminPanelAnim = css`
  .adminTransition-appear {
    opacity: 0.1;
    transform: translateY(100%);

    &.adminTransition-appear-active {
      opacity: 1;
      transform: translateY(0);
      transition: all 300ms;
    }
  }`