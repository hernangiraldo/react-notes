import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initialValue: T): [ T, (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void, () => void ] => {
  const [ form, setForm ] = useState(initialValue);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const resetForm = () => {
    
  }

  return [ form, handleInputChange, resetForm ]
}
