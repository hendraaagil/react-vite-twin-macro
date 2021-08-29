import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import ThemeToggle from './components/ThemeToggle';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <ThemeToggle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
