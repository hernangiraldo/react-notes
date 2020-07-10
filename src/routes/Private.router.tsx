import React from "react"
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import DashboardScreen from "../screens/private/Dashboard.screen"

const PrivateRouter = () => {
  return(
    <Switch>
      <Route exact path='/my-notes' component={ DashboardScreen } />
      <Redirect to='/my-notes' />
    </Switch>
  )
}

export default PrivateRouter