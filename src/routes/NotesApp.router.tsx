import React from "react";
import {
  BrowserRouter as Router, Route,
  Switch
} from 'react-router-dom';
import PublicRouter from "./Public.router"
import PrivateRouter from "./Private.router"

import { useDispatch } from 'react-redux'
import { ADD_USER } from "./../store/actions/user.actions";

const NotesAppRouter = () => {

  const dispatch = useDispatch()
  const user = localStorage.getItem('user')

  if (!!user) {
    dispatch({
      type: ADD_USER,
      payload: JSON.parse(user)
    })
  }

  return (
    <Router>
      <Switch>
        <Route path='/public' component={ PublicRouter }/>
        <Route path='/' component={ PrivateRouter }/>
      </Switch>
    </Router>
  )
}

export default NotesAppRouter;
