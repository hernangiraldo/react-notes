import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom";

import { useForm } from '../../hooks/useForm'

import { ILoginDto } from '../../models/dto/iLogin.dto'

import { WrapperFullPageCenter, PublicFormWrapper } from './../../styles/general-style'
import Button from '../../styles/buttons-style'
import Input from '../../styles/inputs-style'

const LoginScreen = () => {
  const history = useHistory();
  const { t } = useTranslation() ;
  const [ loginForm, handleInputChange ] = useForm<ILoginDto>({
    email: '',
    password: ''
  });

  const { email, password } = loginForm;

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  }

  return(
    <WrapperFullPageCenter>
      <PublicFormWrapper>
        <h1 className="text-center">{t('login')}</h1>
        <form onSubmit={handleSubmitForm}>
          <Input
            autoComplete="off"
            className="margin-vertical--24"
            name="email"
            onChange={handleInputChange}
            placeholder={t('emailPlaceholder')}
            type="email"
            value={email}
            />
          <Input
            className="margin-vertical--24"
            name="password"
            onChange={handleInputChange}
            placeholder={t('password')}
            type="password"
            value={password}
            />
          <Button type="submit" primary block>{t('login')}</Button>
        </form>
        <Button 
          type="button"
          outline
          block
          className="margin-top--16"
          onClick={() => history.push('/public/register')}
        >
          {t('register')}
        </Button>
      </PublicFormWrapper>
    </WrapperFullPageCenter>
  )
}

export default LoginScreen