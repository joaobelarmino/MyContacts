import PropTypes from 'prop-types';

import { Input, Select, Button } from '../LayoutUtils';
import { Form } from './style';
import FormGroup from '../FormGroup';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option disabled selected hidden>Categoria</option>
          <option value="0">Instagram</option>
          <option value="1">LinkedIn</option>
          <option value="2">Twitter</option>
        </Select>
      </FormGroup>
      <Button type="button"><span>{buttonLabel}</span></Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
