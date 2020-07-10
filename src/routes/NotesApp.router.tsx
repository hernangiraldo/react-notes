import React from "react";
import {
  BrowserRouter as Router, Route,
  Switch
} from 'react-router-dom';
import PublicRouter from "./Public.router"
import PrivateRouter from "./Private.router"

const NotesAppRouter = () => {
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
