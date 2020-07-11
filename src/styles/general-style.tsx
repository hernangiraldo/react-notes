import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  };

  textarea {
    font-family: 'Lato', sans-serif;
  }
`

const Wrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
`

const WrapperFullPageCenter = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const PublicFormWrapper = styled.section`
  width: 100%;
  max-width: 350px;
  padding: 1rem;
  box-sizing: border-box;
`

export {
  GlobalStyle,
  Wrapper,
  WrapperFullPageCenter,
  PublicFormWrapper
}