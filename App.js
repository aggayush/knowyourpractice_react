import React from 'react';


class App extends React.Component {
  render(){
    return React.createElement('h1',null,'hello world');
  }
}

App.propType = {
  txt: React.propType
}
export default App
