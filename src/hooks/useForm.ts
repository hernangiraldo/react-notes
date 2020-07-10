import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initialValue: T): [ T, (e: ChangeEvent<HTMLInputElement>) => void, () => void ] => {
  const [ form, setForm ] = useState(initialValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  const resetForm = () => {
    setForm(Object.assign({}));
  }

  return [ form, handleInputChange, resetForm ]
}
