import React, { Component } from 'react';
import css from '../../public/index.css';


class App extends Component {
  render() {
    return (
        <div className="app-container">
		  	<div className="header-container">
	  	      	<header>
	  		      	<div className="row">
	  		      		<div className="col-md-12">
	  		      			<h3>laugh box</h3>
	  		      		</div>
	  		      	</div>
	  		  	</header>
		    </div>

		  <div>
		  	{this.props.children}
		  </div>
		  <div className="header-container">
	  	      	<header>
	  		      	<div className="row">
	  		      		<div className="col-md-12">
	  		      			<h3>laugh box</h3>
	  		      		</div>
	  		      	</div>
	  		  	</header>
		    </div>
	    </div>
    );
  }
}

export default App;
