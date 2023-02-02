import PropTypes from 'prop-types';
import { useState } from 'react';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';

import { Input, Select, Button } from '../LayoutUtils';
import { Form, ButtonContainer } from './style';
import FormGroup from '../FormGroup';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleNameChange(event) {
    const inputValue = event.target.value;
    setName(inputValue);
    if (!inputValue) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('Nome é obrigatório.');
    }
  }

  function handleEmailChange(event) {
    const inputValue = event.target.value;
    setEmail(inputValue);

    if (inputValue && !isEmailValid(inputValue)) {
      setError({ field: 'email', message: 'Formato de E-mail inválido' });
    } else {
      removeError('Formato de E-mail inválido');
    }
  }

  function handleInputChange(event, setState) {
    setState(event.target.value);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={Boolean(getErrorMessageByFieldName('name'))}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={Boolean(getErrorMessageByFieldName('email'))}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(event) => handleInputChange(event, setPhone)}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => handleInputChange(event, setCategory)}
        >
          <option disabled defaultValue hidden>Categoria</option>
          <option value="0">Instagram</option>
          <option value="1">LinkedIn</option>
          <option value="2">Twitter</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit"><span>{buttonLabel}</span></Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
