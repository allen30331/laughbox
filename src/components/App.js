import React, { Component } from 'react';
// import css from '../index.css';


class App extends Component {
  render() {
    return (
        <div className="app-container">
		  <div>
		  	{this.props.children}
		  </div>
	    </div>
    );
  }
}

export default App;
