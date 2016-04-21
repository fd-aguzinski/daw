//React libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Import Container component
import AppContainer from './containers/app.container'

class App extends React.Component {
  render () {
    return (
      <AppContainer />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
