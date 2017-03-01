import React from 'react';
import {render} from 'react-dom';

class Lib extends React.Component {
  componentDidMount() {
    console.log('Hello World!');
    console.log(this.refs.yellow);
  }

  render() {
    return <div ref="yellow">This uses a ref</div>;
  }
}

window.onload = function() {
  var libnode = document.getElementById("lib");
  console.log("loading lib")
  console.log(libnode)
  if (libnode) {
    render(<Lib />, libnode)
  }
}

export {
  Lib
}
