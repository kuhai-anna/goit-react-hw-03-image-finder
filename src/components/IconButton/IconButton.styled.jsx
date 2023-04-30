import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};

  outline: none;
  border: 1px solid transparent;
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.btn};
  background-color: #e1e1e1;

  color: ${props => props.theme.colors.icons};

  transition-property: background-color, border-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    /* background-color: ${props => props.theme.colors.btnHover}; */
    background-color: #c1c1c1;
    border-color: ${props => props.theme.colors.borderHover};
    color: ${props => props.theme.colors.iconsHover};
    color: #f7f7f7;
  }
`;
