import React from 'react';
import {render} from 'react-dom';
import {Lib} from 'lib';

class App extends React.Component {
  componentDidMount() {
    console.log('In app now');
  }

  render() {
    return <Lib />;
  }
}

render(<App />, document.getElementById("app"));
