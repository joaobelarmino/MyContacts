import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.message === message);
    if (errorAlreadyExists) { return; }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(message) {
    setErrors((prevState) => prevState.filter(
      (error) => error.message !== message,
    ));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
