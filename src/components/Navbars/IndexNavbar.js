import React from "react";
import { useState } from 'react'


function IndexNavbar() {
	const [isActive, setActive] = useState(false);
	
	const toggleClass = () => {
		setActive(!isActive);
	};

	// className={isActive ? 'your_className': null} onClick={toggleClass} 	

	return (
		
		<div className="header sticky-top">
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<div className="logo_wp">
							<img src={require("../../assets/images/logo.png")} alt="" />
						</div>
					</div>
					<div className="col-sm-8">
						<nav className="menubar">
							<ul>
							<li><a href={`${process.env.PUBLIC_URL}/index`}>Home</a></li>
							<li><a href={`${process.env.PUBLIC_URL}/post-job`}>Post a job</a></li>
							<li className="active"><a href={`${process.env.PUBLIC_URL}/job-list`}>view job</a></li>
							<li><a href="#">my account</a></li>
							<li><a href="#">how it work</a></li>
							</ul>
						</nav>
					</div>
					<div className="col-sm-2">
						<ul className="setting_wp">
							<li><a href={`${process.env.PUBLIC_URL}/signin`}>login / sign up</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="destop_v">
				<button data-trigger="#navbar_main" className="d-lg-none" type="button"><i className="fa fa-bars"></i></button>
				<nav id="navbar_main" className="mobile-offcanvas navbar navbar-expand-lg">
					<div className="offcanvas-header">  
					<button className="btn btn-close float-right"> &times </button>
					</div>
					<ul className="navbar-nav kplo">
					<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/index`}> Home </a> </li>
					<li className="nav-item active"><a className="nav-link" href={`${process.env.PUBLIC_URL}/post-job`}> Post a job </a></li>
					<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/job-list`}> view job </a></li>
					<li className="nav-item"><a className="nav-link" href="#"> my account </a></li>
					<li className="nav-item"><a className="nav-link" href="#"> how it work </a></li>
					<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/signin`}> login / sign up </a></li>
					</ul>
				</nav>
			</div>
  		</div>
	);
}			
			
export default IndexNavbar;