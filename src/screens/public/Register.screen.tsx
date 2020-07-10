import React from 'react'
import { useTranslation } from 'react-i18next';

import { useForm } from '../../hooks/useForm';
import { IRegisterDto } from '../../models/dto/iRegister.dto';
import { useHistory } from "react-router-dom";

import { WrapperFullPageCenter, PublicFormWrapper } from './../../styles/general-style'
import Button from '../../styles/buttons-style'
import Input from '../../styles/inputs-style'

const RegisterScreen = () => {
  const history = useHistory();
  const { t } = useTranslation() ;
  const [ registerForm, handleInputChange ] = useForm<IRegisterDto>({
    fullName: '',
    email: '',
    password: ''
  });

  const { fullName, email, password } = registerForm;

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerForm);
  }

  return(
    <WrapperFullPageCenter>
      <PublicFormWrapper>
        <form onSubmit={handleSubmitForm}>
          <h1 className="text-center">{t('createAccount')}</h1>
          <Input
            autoComplete="off"
            className="margin-vertical--24"
            name="fullName"
            onChange={handleInputChange}
            placeholder={t('fullNamePlaceholder')}
            type="text"
            value={fullName}
          />
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
          <Button type="submit" primary block>{t('register')}</Button>
        </form>
        <Button 
          type="button"
          outline
          block
          className="margin-top--16"
          onClick={() => history.push('/public/login')}
        >
          {t('login')}
        </Button>
      </PublicFormWrapper>
    </WrapperFullPageCenter>
  )
}

export default RegisterScreen