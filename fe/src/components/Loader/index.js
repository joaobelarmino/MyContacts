import { createPortal } from 'react-dom';
import { Overlay } from './style';

export default function Loader() {
  return createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
