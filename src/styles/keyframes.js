import styled, { keyframes } from 'styled-components'; 

export const slideUp = keyframes`
  0% {
    opacity: 0; 
    transform: translateY(10px); 
  }
  100% {
    opacity: 1; 
    transform: translateY(0px);
  }
`;