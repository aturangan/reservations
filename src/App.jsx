import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './store';

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

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
    // overrides: {
    //   MuiButton: {
    //     text: {
    //       color: 'white',
    //     },
    //   },
  },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

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
