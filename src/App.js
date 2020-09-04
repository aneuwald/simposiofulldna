import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Admin from './pages/Admin'
import Form from './pages/Form'
import Success from './pages/Success'
import Agenda from './pages/Agenda'

import Main from './components/Main'

function App() {
  return (
    <>
      <Main>
        <Switch>
          <Route path="/" component={Agenda} exact />
          <Route path="/success" component={Success} exact />
         {/*  <Route path="/inscricao" component={Form} exact /> */}
          <Route path="/admin" component={Admin} exact />
          <Redirect to='/' />
        </Switch>
      </Main>
    </>
  );
}

export default App;
