import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Container, Footer } from './style';
import { Button } from '../LayoutUtils';

export default function Modal({ title, content, danger }) {
  return ReactDOM.createPortal(
    <ModalContent title={title} content={content} danger={danger} />,
    document.getElementById('modal-root'),
  );
}

export function ModalContent({
  title, content, danger,
}) {
  return (
    <Overlay>
      <Container danger={danger}>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button danger={danger} type="button"><span>Deletar</span></Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

ModalContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  danger: PropTypes.bool,
};

ModalContent.defaultProps = {
  danger: false,
};
