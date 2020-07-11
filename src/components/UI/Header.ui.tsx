import React from 'react'
import styled from 'styled-components'

import { primaryColor } from '../../styles/variables-style'
import { useTranslation } from 'react-i18next'
import Button from '../../styles/buttons-style'
import { useHistory } from 'react-router-dom'

const HeaderStyled = styled.header`
  align-items: center;
  height: 100%;
  background-color: ${primaryColor};
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  color: white;
  grid-area: header;
`

const Header = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return(
    <HeaderStyled>
      <strong>{t('myNotes')}</strong>
      <div>
        <span>{t('greeting')}Hernán</span>
        <Button
          onClick={() => history.replace('/public')}
          secondary
          outline
          size="small"
          className="margin-left--16"
        >{t('logout')}</Button>
      </div>
    </HeaderStyled>
  )
}

export default Header