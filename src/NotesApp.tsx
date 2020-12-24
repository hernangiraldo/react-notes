import React from 'react'
import NotesAppRouter from './routes/NotesApp.router'
import { createStore } from 'redux'
import { rootReducer } from './store/reducers'
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  rootReducer,
  composeWithDevTools()
)

const NotesApp = () => {
  return(
    <Provider store={store}>
      <NotesAppRouter />
    </Provider>
  )
}

export default NotesApp;