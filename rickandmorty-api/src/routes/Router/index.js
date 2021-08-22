import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CharacterPage } from '../../pages/CharacterPage';
import { Home } from '../../pages/Home';
import { CharacterPage } from '../../pages/CharacterPerPage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from='/users/page/1' to='/users' />
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/character/page/:pageNumber'
          component={CharacterPerPage}
        />
        <Route exact path='/character' component={CharacterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
