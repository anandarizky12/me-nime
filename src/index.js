import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {reducers} from './reducers/combineReducers'
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

const theme = createMuiTheme({
  palette: {
    text:{
      primary: "#FFFF"
    },
    secondary: {
      main: "#ffff"
    }
  }
});
const store = createStore(reducers, compose(applyMiddleware(thunk))  );

ReactDOM.render(
    <React.StrictMode>
       <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );