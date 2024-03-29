import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 10;
  & > div {
    position: relative;
    .popup-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .popup-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }
    .popup-exit {
      opacity: 1;
    }
    .popup-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity 300ms, transform 300ms;
    }
  }

  @media screen and (max-width: 480px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: -25px;
  bottom: -25px;
  @media screen and (max-width: 480px) {
    right: -15px;
    bottom: -15px;
  }
`;

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.background.lightest};
  padding: 30px 30px 60px;
  display: grid;
  row-gap: 5px;
  justify-items: center;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.primary.lighter};
  border-radius: 6px;
  position: relative;
  transition: 0.5s 0.5s ease;
  text-align: center;
  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    stroke: white;
    right: 10px;
    top: 10px;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      transform: scale(120%);
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }
`;

export const PopupForm = styled.form`
  margin-top: 20px;
  width: 100%;
  display: grid;
  row-gap: 30px;
`;
