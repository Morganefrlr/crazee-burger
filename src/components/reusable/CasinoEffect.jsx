import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const CasinoEffect = ({ count }) => {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"transitionCasino"} timeout={300} key={count}>
        <span>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default CasinoEffect;

const CasinoEffectStyled = styled.div`

  position: relative;
  overflow-y: hidden;
  width: 120px;

  span {
    display: inline-block;
  }
  .transitionCasino-enter {
    transform: translateY(100%);
  }
  .transitionCasino-enter-active {
    transform: translateY(0);
    transition: 300ms;
  }


  .transitionCasino-exit {
    transform: translateY(0);
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .transitionCasino-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }

`;
