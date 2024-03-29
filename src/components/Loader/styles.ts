import styled, { keyframes } from "styled-components";
import { LoaderProps } from "./Loader";

const spinner = keyframes`
  from {
 opacity: 1;
  }
  to {
opacity: 0;
  }
`;

export const LoaderContainer = styled.div<LoaderProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.size === "m" ? "60px" : "40px")};
  height: ${(props) => (props.size === "m" ? "60px" : "40px")};
  div {
    transform-origin: ${(props) =>
      props.size === "m" ? "30px 30px" : "22px 22px"};
    animation: ${spinner} 1.2s linear infinite;
  }
  div:after {
    content: " ";
    display: block;
    position: absolute;
    top: ${(props) => (props.size === "m" ? "8px" : "6px")};
    left: ${(props) => (props.size === "m" ? "27px" : "20px")};
    width: 3px;
    height: ${(props) => (props.size === "m" ? "11px" : "8px")};
    border-radius: 20%;
    background: ${(props) => props.theme.primary.darker};
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`;
