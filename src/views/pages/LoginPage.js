import React, { useState } from "react";
import useForm from "../../useForm";
import validate from '../../FormValidationRules';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import IndexHeader from "../../components/Headers/IndexHeader.js";

import axios from "axios";
import { config } from '../../constant';

const getLoginUrl = config.url.API_URL+"user/login";


function LoginPage(props) {
	
	const [active, setActive] = useState(1);
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(login, validate, 'login',active,changeVal);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [token, setToken] = useState();
	
	function changeVal(){
	}
	
	function login() {
	    
		//e.preventDefault();
		//alert(`Submitting Name`);
		/*const dataArray = new FormData();	
		dataArray.append("email", values.email);
		dataArray.append("password", values.password);*/
		const dataArray = {email:values.email,password:values.password};
		axios.post(getLoginUrl,dataArray)
		.then((response) => {
			console.log("response",response.data);
			
			if(response.data.responserCode === 200){
				const token = response.data.data.id;
				setToken(token);
				localStorage.setItem('token', token);
				if(response.data.data.role_id===1){
					props.history.push('/customer/joblist');
				}else{
					props.history.push('/supplier/publicprofileview');
				}
			}else{
				const errorMessage = response.data.message;
				setErrorMessage(errorMessage);
				NotificationManager.error('',errorMessage);
			}
		})
		.catch((error) => {
		// error response
		});
		//setToken(token);
	}


  
  	return (
    <>
		<IndexNavbar />
		<IndexHeader title="Login" />
		<div className="container sign_wrapper">
			<div className="row">
				<div className="col-sm-6">
					{errorMessage && (
						<p className="error"> {errorMessage} </p>
					)}
					<div className="sign_wp">
						<h3>Sign in</h3>
						<form onSubmit={handleSubmit}>
							<div>
								<label>Email or Username</label>
								<input className="text" name="email" type="text" onChange={handleChange} value={values.email || ''} />
							</div>
							<div>
								<label>Password</label>
								<input className="text" name="password" type="password" onChange={handleChange} value={values.password || ''} />
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value=""/>Keep me signed in <a href="#">Forgot Password?</a>
								</label>
							</div>
							<div className="yhh5d">
								<input type="submit" value="Login" name="usersLogin"/>
							</div>
						</form>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="sign_wp">
						<h3>Create an account</h3>
						<form>
							<div className="form-check-inline">
								<label className="form-check-label">
									<input type="radio" className="form-check-input" name="optradio"/>I am a customer
								</label>
							</div>
							<div className="form-check-inline">
								<label className="form-check-label">
									<input type="radio" className="form-check-input" name="optradio"/>I am a Machinist
								</label>
							</div><br /><br />
							<div>
								<label>Email Address</label>
								<input className="text" name="email" type="text"/>
							</div>
							<div className="form-terms">
								<a href="#">Terms Of Service</a>
							</div>
							<div className="yhh5d">
								<input type="submit" value="Submit" name="submit"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<DefaultFooter />
		
		
		<NotificationContainer/>
    </>
  );
}

export default LoginPage;
