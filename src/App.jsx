import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './store';

const theme = createTheme({
  palette: {
    primary: {
      light: '#edd1a8',
      main: '#e9c693',
      dark: '#a38a66',
    },
    secondary: {
      light: '#d0e5b2',
      main: '#c5df9f',
      dark: '#899c6f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
