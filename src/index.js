import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Routes from './Routes';
// import { Provider } from 'react-redux';
// import store from './store/store';


ReactDOM.render(
  <>
    {/* <Provider store={store}> */}
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
        <GlobalFonts />
      </ThemeProvider>
    {/* </Provider> */}
  </>,
  document.getElementById('root')
);
