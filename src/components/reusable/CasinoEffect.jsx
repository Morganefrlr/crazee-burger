import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { casinoEffectAnimation } from "../../theme/animation";

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
  flex: 1;

  span {
    display: inline-block;
  }
  ${casinoEffectAnimation}

`;
