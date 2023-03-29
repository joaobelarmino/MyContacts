import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import CategoriesService from '../../services/CategoriesService';

import { Input, Select, Button } from '../LayoutUtils';
import { Form, ButtonContainer } from './style';
import FormGroup from '../FormGroup';
import formatPhone from '../../utils/formatPhone';
import infoIcon from '../../assets/images/infoIcon.svg';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  } = useErrors();

  useEffect(() => {
    async function loadCategories() {
      try {
        const listCategories = await CategoriesService.listingCategories();
        setCategories(listCategories);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  const isFormValid = (name && errors.length === 0);

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

  function handleInputChange(value, setState) {
    setState(value);
  }

  function handlePhoneChange(event) {
    handleInputChange(formatPhone(event.target.value), setPhone);
  }

  return (
    <Form noValidate>
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
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => handleInputChange(event.target.value, setCategoryId)}
          disabled={isLoadingCategories}
        >
          <option defaultValue hidden>Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}><span>{buttonLabel}</span></Button>
        {!isFormValid && (
          <span className="info-to-submit">
            <img src={infoIcon} alt="Info icon" width="24" />
            {' '}
            Para enviar o formulário, por favor, preencher o campo Nome, ao menos.
            Caso insira um e-mail, é necessário que seja um e-mail válido.
          </span>
        )}
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
