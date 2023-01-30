import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';
import Routes from '../../Routes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container>
    </ThemeProvider>
  );
}
