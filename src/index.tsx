import React from 'react'
import ReactDOM from 'react-dom'
import './i18n/i18n';

import NotesApp from './NotesApp';
import { GlobalStyle } from './styles/general-style';

import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <NotesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
