import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'react-notifications/lib/notifications.css';

// styles for this kit
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-animation.css";
import "./assets/css/jquery.fancybox.min.css";
//import "./assets/css/owl.carousel.min.css";
//import "./assets/css/owl.theme.default.min.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";


// pages for this kit
import Index from "./views/Index.js";
import LoginPage from "./views/pages/LoginPage.js";
import RegisterPage from "./views/pages/RegisterPage.js";
import CustomerJobList from "./views/pages/CustomerJobList.js";
import PublicProfileView from "./views/pages/PublicProfileView.js";


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Switch>
				<Route path="/index" render={(props) => <Index {...props} />} />
				<Route path="/signin" render={(props) => <LoginPage {...props} />} />
				<Route path="/signup" render={(props) => <RegisterPage {...props} />} />
				<Route path="/customer/joblist" render={(props) => <CustomerJobList {...props} />} />
				<Route path="/supplier/publicprofileview" render={(props) => <PublicProfileView {...props} />} />
				<Redirect to="/index" />
				<Redirect from="/" to="/index" />
				
			</Switch>
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

