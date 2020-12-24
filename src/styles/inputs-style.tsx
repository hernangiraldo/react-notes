import styled from 'styled-components';
import { mnHeight, borders, primaryColor, dangerColor } from './../styles/variables-style'

const Input = styled.input`
  height: ${mnHeight};
  border-radius: .25rem;
  border: 1px solid ${borders};
  display: block;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: ${primaryColor}
  }

  &.input-error {
    border-color: ${dangerColor}
  }
`

export default Input;