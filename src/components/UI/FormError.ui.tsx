import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { dangerColor } from '../../styles/variables-style';

interface IFormError {
  name: string;
  errors: any;
  keyMessage?: string;
}

const ErrorContent = styled.div`
  color: ${dangerColor};
  font-size: 0.875rem;
`

const FormError = ({ name, errors, keyMessage }: IFormError) => {
  const { t } = useTranslation();

  return(
    <ErrorContent className="margin-top--4">
      {errors[name]?.type === 'required' && <span>{t('inputRequired')}</span>}
      {errors[name]?.type === 'pattern' && <span>{!keyMessage ? t('invalidFormat') : t(keyMessage)}</span>}
    </ErrorContent>
  )
}

export default FormError;