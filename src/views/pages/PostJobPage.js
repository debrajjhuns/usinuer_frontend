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


function PostJobPage(props) {
	
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
		<IndexHeader title="Post Job Request" />
		<div className="container job_listing">
			<div className="row">
				<div className="col-sm-12">
					<div className="job-l">
						<p>
						It is completely free for you to create a listing for your custom CNC machining requirement.<br />Simply create your free listing and wait for quotes to come in. You do not have to commit to anything until you are happy with a quote provided.<br />Enter the details of your custom machined part requirement below. Make sure you provide enough information for the CNC machinist to make an accurate assessment. Provide a full description, including dimensions and images.
						</p>
					</div>
				</div>
				<div className="col-sm-12">
					<div className="job-r">
						<h3>Describe Your Project</h3>
						<div className="row">
							<div className="col-sm-4">
								<label>Title of Project:</label>
							</div>
							<div className="col-sm-8">
								<input type="text" name="name" placeholder="Ex : 5 steel spacers for motorcycle wheel"/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-4">
								<label>Comment:</label>
							</div>
							<div className="col-sm-8">
								<textarea name="descri" rows="4"></textarea>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-4">
							</div>
							<div className="col-sm-8">
								<div className="b-li">
								<p>Specify the materials to be used, the tolerances and the total number of parts</p>
								<p>If delivery outside mainland UK, please specify the delivery location</p>
								<p>Please do not provide your contact details here.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="attach-file">
				<h3>Attach your files here</h3>
				<div className="row">
					<div className="col-sm-6">
						<h4>PDF or Image files*</h4>
						<div className="upload-btn-wrapper">
							<button className="btn"><i className="fa fa-upload"></i> Choose your PDF / Images</button>
							<input type="file" name="myfile" />
						</div>
					</div>
					<div className="col-sm-6">
						<div className="b-li">
							<p>The first file will be used for a thumbnail picture</p>
							<p>Max file size: 3 MB</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<h4>3D files or other format (optional)</h4>
						<div className="upload-btn-wrapper">
							<button className="btn"><i className="fa fa-upload"></i> Select your 3D files</button>
						<input type="file" name="myfile" />
						</div>
					</div>
					<div className="col-sm-6">
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="other_info">
						<h3>Other information</h3>
						<h4>I would like to receive quotes before:</h4>
						<select name="post_for">
							<option value="">Choose a number of days</option>
							<option value="4">4 Days</option>
							<option value="8">8 Days</option>
						</select>
					</div>
				</div>
				<div className="col-sm-12">
					<div className="other_info">
						<h3>Visibility</h3>
						<div className="form-check">
							<label className="form-check-label">
								<input type="radio" className="form-check-input" name="optradio"/>Public (you will receive more quotes)
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input type="radio" className="form-check-input" name="optradio"/>Private (visibility restricted to confirmed machinists)
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			<div className="reg-bottom">
				<button type="Submit" name="submit">Cancel</button>
				<button type="Submit" name="submit">Check & Submit</button>
			</div>
		</div>
		<DefaultFooter />
		
		
		<NotificationContainer/>
    </>
  );
}

export default PostJobPage;
