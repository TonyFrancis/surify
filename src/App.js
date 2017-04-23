import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SongList from './components/SongList';

injectTapEventPlugin();

const App = () => {
  const app = (
    <div>
      <MuiThemeProvider>
        <SongList />
      </MuiThemeProvider>
    </div>
  );
  return app;
};

export default App;
