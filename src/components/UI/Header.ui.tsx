import React from 'react'
import styled from 'styled-components'

import { primaryColor } from '../../styles/variables-style'
import { useTranslation } from 'react-i18next'
import Button from '../../styles/buttons-style'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/selectors/user.selectors'
import { REMOVE_USER } from '../../store/actions/user.actions'

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
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: REMOVE_USER
    })
    history.replace('/public')
    localStorage.removeItem('user')
  }

  return(
    <HeaderStyled>
      <strong>{t('myNotes')}</strong>
      <div>
        <span>{t('greeting')}{user.email}</span>
        <Button
          onClick={handleLogout}
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