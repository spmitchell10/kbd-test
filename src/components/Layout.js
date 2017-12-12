import React, { Component } from "react";
import { NavBar, People, Portfolio, Platform, Purpose } from "../components";

class Layout extends Component {
	componentDidMount() {
		let baseLayout = document.querySelector(".page");
   		 baseLayout.onload = setTimeout(function() {
	      let pageLoader = document.querySelector(".page-loader");
	      pageLoader.style.display = "none";
    	}, 
    	1000);
	}

	render(){
		return (
			<div className="page" id="top">
				<NavBar />
				<Purpose />
				<People />
				<Portfolio />
				<Platform />
				
			</div>
		);
	}
}

export default Layout;