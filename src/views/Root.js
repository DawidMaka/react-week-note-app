import React from 'react';
import store from 'store';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from 'routes';
import MainTemplate from 'templates/MainTemplate';
import DetailsPage from 'views/DetailsPage';
import Monday from 'views/Monday';
import Tuesday from 'views/Tuesday';
import Wednesday from 'views/Wednesday';
import Thursday from 'views/Thursday';
import Friday from 'views/Friday';
import Saturday from 'views/Saturday';
import Sunday from 'views/Sunday';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to={routes.monday} />} />
          <Route exact path={routes.monday} component={Monday} />
          <Route path={routes.mondayID} component={DetailsPage} />
          <Route exact path={routes.tuesday} component={Tuesday} />
          <Route path={routes.tuesdayID} component={DetailsPage} />
          <Route exact path={routes.wednesday} component={Wednesday} />
          <Route path={routes.wednesdayID} component={DetailsPage} />
          <Route exact path={routes.thursday} component={Thursday} />
          <Route path={routes.thursdayID} component={DetailsPage} />
          <Route exact path={routes.friday} component={Friday} />
          <Route path={routes.fridayID} component={DetailsPage} />
          <Route exact path={routes.saturday} component={Saturday} />
          <Route path={routes.saturdayID} component={DetailsPage} />
          <Route exact path={routes.sunday} component={Sunday} />
          <Route path={routes.sundayID} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
