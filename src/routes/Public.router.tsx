import React from "react"
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import LoginScreen from "../screens/public/Login.screen"
import RegisterScreen from "../screens/public/Register.screen"

const PublicRouter = () => {
  return(
    <Switch>
      <Route path='/public/login' component={ LoginScreen }/>
      <Route path='/public/register' component={ RegisterScreen }/>
      <Redirect to='/public/login'/>
    </Switch>
  )
}

export default PublicRouter