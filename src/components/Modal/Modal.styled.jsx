import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000007f;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: ${props => props.theme.spacing(3)};
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2) 0px, 1px, 1px,
    0px rgba(0, 0, 0, 0.4), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
