import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../styles/variables-style';
import Button from '../../styles/buttons-style';
import { useTranslation } from 'react-i18next';

const Aside = styled.aside`
  grid-area: menu;
  background-color: ${primaryColor};
  filter: brightness(.8);
  overflow: scroll;
  scroll-behavior: smooth;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`

const SideMenu = () => {
  const { t } = useTranslation()

  return(
    <Aside>
      <Footer>
        <Button secondary outline block>{t('createNote')}</Button>
      </Footer>
    </Aside>
  )
}

export default SideMenu;