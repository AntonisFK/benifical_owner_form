import React, { useContext } from 'react';
import {
    Route,
    Redirect,
  } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContextProvider';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isLoading } = useContext(AuthContext);

    return (
        <Route {...rest} render={(props) => (
                user && !user.isAnonymous
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
    )
}

export default PrivateRoute;
