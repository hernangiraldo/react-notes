import styled, { css } from 'styled-components';
import { mnHeight, primaryColor } from './../styles/variables-style'

interface IButtonProps {
  readonly primary?: boolean;
  readonly block?: boolean;
  readonly outline?: boolean;
  readonly link?: boolean;
};

const Button = styled.button<IButtonProps>`
  height: ${mnHeight};
  border: none;
  border-radius: .25rem;
  padding: 0 1rem;
  outline: none;
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(20, 2, 34 , 1);
  font-size: 1rem;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    box-shadow: none;
    transform: translateY(3px);
  }

  ${props => props.primary && css`
    background-color: ${primaryColor};
    color: white;
  `}

  ${props => props.block && css`
    width: 100%;
    display: block;
  `}

  ${props => props.outline && css`
    background-color: white;
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
    box-shadow: 0 3px 0 ${primaryColor};
  `}

  ${props => props.link && css`
    color: ${primaryColor};
    box-shadow: none;
    text-decoration: underline;
    background-color: transparent;
  `}
`

export default Button;