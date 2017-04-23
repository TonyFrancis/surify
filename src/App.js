import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SongList from './components/SongList';
import Activity from './components/Activity';
import activityStore from './store';


const store = createStore(activityStore);

injectTapEventPlugin();

// NotFound Class for invalid routing.
const NotFound = () => (
  <div>
    <h1>Sorry You Cannot Access This Page</h1>
  </div>
);
const App = () => {
  const route = (
    <Router history={browserHistory}>
      <Redirect from="/" to="/home" />
      <Route path="/home" component={SongList} />
      <Route path="/activity" component={Activity} />
      <Route path="*" component={NotFound} />
    </Router>
  );
  const app = (
    <div>
      <Provider store={store}>
        <MuiThemeProvider>
          {route}
        </MuiThemeProvider>
      </Provider>
    </div>
  );
  return app;
};

export default App;
