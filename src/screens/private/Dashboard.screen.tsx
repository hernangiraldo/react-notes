import React from 'react'
import styled from 'styled-components'
import Input from '../../styles/inputs-style'
import { useTranslation } from 'react-i18next'
import Button from '../../styles/buttons-style'
import { borders, primaryColor } from '../../styles/variables-style'
import { useForm } from '../../hooks/useForm'
import { INewNoteDto } from '../../models/dto/iNewNote.dto'

const Form = styled.form`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  box-sizing:border-box;
`

const TextArea = styled.textarea`
  height: 100%;
  border: 1px solid ${borders};
  outline: none;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: .25rem;
  font-size: 1rem;

  &:focus {
    border-color: ${primaryColor}
  }
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
`

const DashboardScreen = () => {
  const { t } = useTranslation();
  const [ noteForm, handleInputChange, reset ] = useForm<INewNoteDto>({
    title: '',
    note: ''
  });

  const { title, note } = noteForm;

  const handleSaveNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(noteForm);
  }

  const handleResetForm = () => {
    reset();
  }

  return(
    <Form onSubmit={handleSaveNote}>
      <Input
        name="title"
        value={title}
        onChange={handleInputChange}
        placeholder={t('notetitlePlaceholder')}
        type="text"
        autoComplete="off"
      />

      <TextArea
        name="note"
        value={note}
        onChange={handleInputChange}
        placeholder={t('notePlaceholder')}
      ></TextArea>
      <Footer>
        <Button type="button" onClick={handleResetForm} outline block>{t('clearNote')}</Button>
        <Button primary block>{t('saveNote')}</Button>
      </Footer>
      </Form>
  )
}

export default DashboardScreen