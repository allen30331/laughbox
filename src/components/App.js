import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
       <div className="app-container">
	      <header>
	      	<div className="row">
	      		<div className="col-md-12">
	      			<h3>laugh box</h3>
	      		</div>
	      	</div>
		  </header>
		  
		  <div>
		  	{this.props.children}
		  </div>
	    </div>
    );
  }
}

export default App;
