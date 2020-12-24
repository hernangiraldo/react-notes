import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { ADD_USER } from "./../../store/actions/user.actions"

import { useForm } from "react-hook-form";

import { ILoginDto } from '../../models/dto/iLogin.dto'

import { WrapperFullPageCenter, PublicFormWrapper } from './../../styles/general-style'
import Button from '../../styles/buttons-style'
import Input from '../../styles/inputs-style'
import FormError from '../../components/UI/FormError.ui';

const LoginScreen = () => {
  const history = useHistory();
  const { t } = useTranslation() ;
  const { register, handleSubmit, errors, reset } = useForm<ILoginDto>();
  const dispatch = useDispatch()

  const onSubmit = (data: ILoginDto) => {
    dispatch({
      type: ADD_USER,
      payload: data
    })
    localStorage.setItem('user', JSON.stringify(data))
    history.replace('/');
    reset();
  }

  return(
    <WrapperFullPageCenter>
      <PublicFormWrapper>
        <h1 className="text-center">{t('login')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="margin-vertical--24">
            <Input
              className={errors.email && 'input-error'}
              autoComplete="off"
              name="email"
              placeholder={t('emailPlaceholder')}
              type="email"
              ref={register({ required: true, pattern: /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            />
            <FormError name="email" errors={errors} keyMessage="invalidEmail" />
          </div>

          <div className="margin-vertical--24">
            <Input
              className={errors.email && 'input-error'}
              name="password"
              placeholder={t('password')}
              type="password"
              ref={register({ required: true })}
            />
            <FormError name="password" errors={errors} />
          </div>

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