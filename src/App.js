import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import FormPage from './components/FormPage';
import SendFormPage from './components/SendFormPage';
import LoginPage from './components/LoginPage';
import  AuthContextProvider from './contexts/AuthContextProvider';
import PrivateRoute from './components/PrivateRoute';
import SuccessPage from './components/SuccessPage';



const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/beneficialForm/:fId" component={FormPage} />
          <PrivateRoute path="/:uId/user" component={SendFormPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/form/successful" component={SuccessPage} />
          <Redirect to='/login' />
        </Switch>
    
      </Router>
    </AuthContextProvider>
  );
}

export default  App;