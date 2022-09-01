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

const getLoginUrl = config.url.API_URL+"user/auth/login";
const getCheckUrl = config.url.API_URL+"user/auth/register";


function LoginPage(props) {
	
	const [active, setActive] = useState(1);
	const [val, setVal] = useState({});
	let [err, setErr] = useState({});
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(login, validate, 'login',active,changeVal);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [chkErrMsg, setChkErrMsg] = useState('');
	const [token, setToken] = useState();
	
	function changeVal(){
	}
	
	function login() {
	    
		//e.preventDefault();
		//alert(`Submitting Name`);
		/*const dataArray = new FormData();	
		dataArray.append("email", values.email);
		dataArray.append("password", values.password);*/
		const dataArray = {email_username:values.email_username,password:values.password};
		axios.post(getLoginUrl,dataArray)
		.then((response) => {
			console.log("response",response.data);
			
			if(response.data.status === true){
				const token = response.data.data.id;
				setToken(token);
				localStorage.setItem('token', token);
				localStorage.setItem('user_type', response.data.data.role_id);
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
	
	const handleCheck = (event) => {
		//if (event) event.preventDefault();
		
		if (!val.role) {
			err.role="Please choose a role";			
		}else{
			err.role="";
		}
		if (!val.email) {
			err.email="Email is required";
		}else if (!/\S+@\S+\.\S+/.test(val.email)) {
			err.email="Email address is invalid";
		}else{
			err.email="";
		}
		setErr(previousState => {
				return { ...previousState, role:err.role,email:err.email}
			});
		//console.log(err);
		
		if(err.role=='' && err.email==''){
			console.log('no err');
			let check_arr = {email:val.email,role:val.role,check:true};
			axios.post(getCheckUrl,check_arr)
			.then((response) => {
				console.log(response);
				if(response.data.status===true){
					localStorage.setItem("role", val.role);
					localStorage.setItem("email", val.email);
					props.history.push('/customer-confirm-mail');
				}else{
					setChkErrMsg(response.data.message);
				}
			})
			.catch((error) => {
			// error response
			});
		}
		//setIsSubmitting(true);
	};
	
	const handleSUChange = (event) => {
		//event.persist();
		if(event.target.type === 'radio'){
			setVal(val => ({ ...val, [event.target.name]: event.target.value }));
		}else{		
			setVal(val => ({ ...val, [event.target.name]: event.target.value }));			
		}
	};
	
	

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
								<input className="text" name="email_username" type="text" onChange={handleChange} value={values.email_username || ''} />
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
						<form >
							<div className="form-check-inline">
								<label className="form-check-label">
									<input type="radio" className="form-check-input" name="role" onChange={handleSUChange} value="1"/>I am a customer
								</label>
							</div>
							<div className="form-check-inline">
								<label className="form-check-label">
									<input type="radio" className="form-check-input" name="role" onChange={handleSUChange} value="2"/>I am a Machinist
								</label>
							</div><br />
							{err.role?( <div style={{color:"#F00"}}>{err.role}</div>):''}
							<br />
							<div>
								<label>Email Address</label>
								<input className="text" name="email" type="text" onChange={handleSUChange} value={val.email || ''} />
									{err.email?( <div style={{color:"#F00"}}>{err.email}</div>):''}
							</div>
							<div className="form-terms">
								<a href="#">Terms Of Service</a>
							</div>
							<div className="yhh5d">
								<input type="button" style={{ width: "200px",height: "45px",border: "none", borderRadius: "4px",fontWeight: "600",
								boxShadow: "0px 2px 5px rgb(0 0 0 / 48%)", background: "#dbbb40",color: "#fff",letterSpacing: "1px"}} value="Submit" name="checkUser" onClick={handleCheck}/>
							</div>
							<div style={{color:"#F00"}}>{chkErrMsg}</div>
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
