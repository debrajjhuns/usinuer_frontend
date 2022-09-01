import React from "react";
import { useState } from 'react'


function Sidebar(props) {
	
	let token = localStorage.getItem("token");	
	let user_type = localStorage.getItem("user_type");
	return (		
		<div className="sidebar">
			<h3>My Account</h3>
			<ul className="side-nav">       
				<li><a href="customer_jobList.html">Jobs</a></li>
				<li><a href="customer_publicViewProfile.html">My Profile - Public View</a></li>
				<li><a href="account.html">My Profile</a></li>
				<li><a href="editProfile.html">Edit My Profile</a></li>
				<li><a href="withdraw.html">Withdraw Funds</a></li>
				<li><a href="customer_feedback1.html">Review Machinists</a></li>  
				<li><a href="payment_list.html">Invoices</a></li>                 
				<li className="active"><a href="editPassword.html">Change Password</a></li>           
			</ul>
		</div>
	);
}			
			
export default Sidebar;