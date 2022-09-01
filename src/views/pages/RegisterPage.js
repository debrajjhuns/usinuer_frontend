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
const getRegisterUrl = config.url.API_URL+"/user/auth/register";


function RegisterPage(props) {
	
	const [active, setActive] = useState(1);
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(register, validate, 'register',active,changeVal);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	
	let role = localStorage.getItem("role");
	let email = localStorage.getItem("email");
	
	function changeVal(){
	}
	
	function register() {
		/*console.log('No errors, submit callback called!');
		console.log(values);
		const dataArray = new FormData();
		dataArray.append("firstname", values.firstname);
		dataArray.append("lastname", values.lastname);		
		dataArray.append("email", values.email);
		dataArray.append("password", values.password);*/
		let dataArray={};
		if(role==1){
			dataArray = {role:1,check:false,email:email,account:values.account,name:values.name,surname:values.surname,user_name:values.user_name,password:values.password};
		}else{
			dataArray = {role:2,check:false,email:email,account:values.account,name:values.name,surname:values.surname,user_name:values.user_name,password:values.password};
		}
		
		axios.post(getRegisterUrl, dataArray)
		.then((response) => {
			console.log(response);
		// successfully uploaded response
			/*if(response.data.status === 1){
				
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				const successMessage = response.data.msg;
				setSuccessMessage(successMessage);
				const timer = setTimeout(() => { 
				props.history.push('/login'); 
				}, 5000);
				return () => clearTimeout(timer);
			}else{
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				const errorMessage = response.data.message;
				setErrorMessage(errorMessage);
				NotificationManager.error('',errorMessage);
			}*/
		})
		.catch((error) => {
		// error response
		});
	}

	
  /*const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);*/
  
  return (
    <>
		<IndexNavbar />
		<IndexHeader title="CREATE YOUR ACCOUNT" />
		<div className="container sign_wrapper">
			<div className="row">
				<div className="col-sm-2">
				</div>
				<div className="col-sm-8">
					<div className="register_c">
						<h3>Register as a {role==1?'Customer':'Machinist'}</h3>
						<form onSubmit={handleSubmit}>
							<h4>Please Provide Your Information Below:</h4>
							<div className="row">
								<div className="col-sm-4">
									<label>Type of Account<span>*</span></label>
								</div>
								<div className="col-sm-8">
									<select name="account" onChange={handleChange} value={values.account || ''}>
										<option value="">Select</option>
										<option value="Individual">Individual</option>
										<option value="Company">Company</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4">
									<label>First Name<span>*</span></label>
								</div>
								<div className="col-sm-8">
									<input className="text" name="name" type="text" onChange={handleChange} value={values.name || ''}/>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4">
									<label>Last Name <span>*</span></label>
								</div>
								<div className="col-sm-8">
									<input className="text" name="surname" type="text" onChange={handleChange} value={values.surname || ''}/>
								</div>
							</div>
							<hr />
							<h4>Contact Information</h4>
							<div className="row">
								<div className="col-sm-4">
									<label>Username <span>*</span></label>
								</div>
								<div className="col-sm-8">
									<input className="text" name="user_name" autoComplete="off" type="text" onChange={handleChange} value={values.user_name || ''}/>
									<small>Choose a Username to represent you on Machining-4u. It can not be changed later.</small>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4">
									<label>Email Address <span>*</span></label>
								</div>
								<div className="col-sm-8">
									<input className="text m_b_none" name="email" type="text" value={email} disabled/>
									<small>Your email address will not be shared. <a href="#">Privacy policy</a></small>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4">
									<label>Create Password<span>*</span></label>
								</div>
								<div className="col-sm-8">
									<input className="text" name="password" type="password" onChange={handleChange} value={values.password || ''}/>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4">
									<label>Confirm Password<span>*</span></label>
								</div>
								<div className="col-sm-8">
									<input className="text" name="confirm_password" type="password" onChange={handleChange} value={values.confirm_password || ''}/>
								</div>
							</div>
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" name="terms" onChange={handleChange} value={values.terms || ''}/>I have read and accept the <a href="#">terms</a> of of use of Machining-4u.co.uk
								</label>
							</div><br /><br />
							<div className="reg-bottom">
								<button type="button" name="cancel">Cancel</button>
								<button type="Submit" name="submit">Register</button>
							</div>
						</form>
					</div>
				</div>
				<div className="col-sm-2">
				</div>
			</div>
		</div>
		
		<DefaultFooter />
  
  
  
  
  {/*<div id="auth">        
			<div className="row h-100">
				<div className="col-lg-6 align-self-center">
					<div id="auth-right">
						<div className="logo-top text-center log-logo"><a href="/index">Logo</a></div>               
						<div className="log-page-left-text  text-center">
							<h2>Hey there!</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus ligula, faucibus nec.</p>

						</div>
					</div>
				</div>


				<div className="col-lg-6 col-12 align-self-center">
					<div id="auth-left">
					   <h3 className="auth-title">Create your account</h3> 
						<form className="log-form-area mt-5" method="" onSubmit={handleSubmit}>
							{errorMessage && (
							  <span className="is-danger"> {errorMessage} </span>
							)}
							{successMessage && (
							  <span className="success"> {successMessage} </span>
							)}
							<div className="form-group position-relative has-icon-left mb-4">
								<div className="row">
									<div className="col-md-6">
										<label className="log-input-title">First name*</label>
										<input type="text" className="form-control form-control-xl" name="firstname" onChange={handleChange} value={values.firstname || ''} placeholder="First name" /> 
										{errors.firstname && ( <p className="help is-danger">{errors.firstname}</p> )}										
									</div>
										<div className="col-md-6">
										<label className="log-input-title">Last Name*</label>
										<input type="text" className="form-control form-control-xl" name="lastname" onChange={handleChange} value={values.lastname || ''} placeholder="Last Name" />    
									</div>
								</div>
												
							</div>
							<div className="form-group position-relative has-icon-left mb-4">
								<label className="log-input-title">Email address*</label>
								<input type="email" className="form-control form-control-xl" name="email" onChange={handleChange} value={values.email || ''} placeholder="Enter Email" />                    
							</div> 
							<div className="form-group position-relative has-icon-left mb-4">
								<label className="log-input-title">Password* <span style={{fontSize:'12px', fontWeight:'normal', color:'#838383 '}}>(must be 6 or more characters)</span></label>
								<input type="password" className="form-control form-control-xl" name="password" onChange={handleChange} value={values.password || ''} placeholder="Enter password"/>                    
							</div> 



							<p><a className="forget-pass" href={`${process.env.PUBLIC_URL}/forgot-password`}>Forgot password?</a>.</p>
							<button type="submit" className="btn btn-primary btn-block btn-lg mt-5 log-btn-logpage">Continue</button>
						</form>
						<div className="text-center mt-4 text-lg fs-4">
							<p className="xtra-accouts">Already have an account?<a href={`${process.env.PUBLIC_URL}/login`} className="font-bold">Login</a>.</p>
							
						</div>
					</div>
				</div>


			</div>

  </div>*/}
		<NotificationContainer/>
    </>
  );
}

export default RegisterPage;
