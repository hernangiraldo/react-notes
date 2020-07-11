import React from "react"
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import DashboardScreen from "../screens/private/Dashboard.screen"
import Header from "../components/UI/Header.ui"
import styled from "styled-components"
import SideMenu from "../components/UI/SideMenu.ui"

const DashWrapper = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'header header' 'menu content';
  height: 100vh;
`

const PrivateRouter = () => {
  return(
    <DashWrapper>
      <Header />
      <SideMenu />
      <main>
        <Switch>
          <Route exact path='/my-notes' component={ DashboardScreen } />
          <Redirect to='/my-notes' />
        </Switch>
      </main>
    </DashWrapper>
  )
}

export default PrivateRouter