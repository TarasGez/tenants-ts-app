import { BrowserRouter as Router } from "react-router-dom";
import { Container } from '@mui/material';
import AppRouter from './AppRouter';
import { Header } from './components';

function App() {
  return (
    <Router>
      <main>
        <Container maxWidth="md">
          <Header />
          <AppRouter />
        </Container>
      </main>
    </Router>
  );
}

export default App;
