import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
// import App from './containers/App';
// import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
import LabelImage from './containers/labelImages/labelImages.viewModel';
export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Switch>
          {/* <Route path={routes.COUNTER} component={CounterPage} /> */}
          <Route path={'/'} component={LabelImage} />
        </Switch>
      </>
    );
  }
}
