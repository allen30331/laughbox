import React, { Component } from 'react';
import css from '../../public/home.css';
import gitHubImg from '../../public/github.png';

class App extends Component {
  render() {
    return (
        <div className="app-container">
		  	<div className="header-container">
	  	      	<header>
	  		      	<div className="row">
	  		      		<div className="col-md-12">
	  		      			<h3 className="laughbox">laugh box</h3>
	  		      		</div>
	  		      	</div>
	  		  	</header>
		    </div>

		  <div>
		  	{this.props.children}
		  </div>
		  	<div className="footer-container">
	  	      	<footer>
	  		      	<div className="row">
	  		      		<div className="col-md-12">
	  		      			<p className="built-by">built by Allen Smith</p>
	  		      			<a href="https://github.com/allen30331" target="_blank"><img className="github" src={gitHubImg} height="25" width="25"/></a>
	  		      		</div>
	  		      	</div>
	  		  	</footer>
		    </div>
	  	
	    </div>
    );
  }
}

export default App;
