import React, { useState, useEffect } from "react";
import useForm from "../../useForm";
import validate from '../../FormValidationRules';
import {NotificationContainer, NotificationManager} from 'react-notifications';

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import IndexHeader from "../../components/Headers/IndexHeader.js";

import axios from "axios";
import { config } from '../../constant';

const getJobListUrl = config.url.API_URL+"user/project/list";


function JobListPage(props) {
	
	const [jobs, setJobsData] = useState([]);
	const [meta, setMetaData] = useState([]);
	const [page, setPage] = useState(0);
	const limit = 10;
	
	const getPages = (total,page_num) => {
		let list = [];		
		for (let i=0;i<= total;i++) {
			console.log('aa');
			if(i==page_num){
				list.push(<li className="page-item active"><a className="page-link" onClick={() => setPage(i)}>{i+1}</a></li>)
			}else{
				list.push(<li className="page-item"><a className="page-link" onClick={() => setPage(i)}>{i+1}</a></li>)
			}
		}
		return list;
	};
	const getJobsWithAxios = async () => {
		let final_url = getJobListUrl+'?page='+page+'&limit='+limit;
		axios.get(final_url)
		.then((response) => {
			console.log(response.data);
			const jobs = response.data.data;
			setJobsData(jobs);
			const meta = response.data.meta;
			setMetaData(meta);
							
		})
		.catch((error) => {
		// error response
		});
	};

	
	
	useEffect(() => {
		
		getJobsWithAxios();
	}, [page]);


  
  	return (
    <>
		<IndexNavbar />
		<IndexHeader title="Job List" />
		<div className="container">
			<div className="avail">
				<h3>available job for you</h3>
				<p>Post a job to tell us about your project. <br />We'll quickly match you with the right freelancers.</p>
			</div>
		</div>

		<div className="container">
			<div className="row job_machin_wp">
				<div className="col-sm-4">
					<div className="looking_m">
						<h3>Looking for a Machinist?</h3>
						<p>Post your request and receive quotes for free.</p>
						<a href="#">Post your request</a>
						<h3>Are you a Machinist?</h3>
						<p>Create a profile and start working.</p>
						<a href="#">Sign up</a>
					</div>
				</div>
				<div className="col-sm-8">
					<div className="machin_req">
						<h3>Machining Requests <span>showing results 1 - 10</span></h3>
					{ 
						jobs && jobs.map((job,index)=>( 
						
						<div className="machin_req_li" key={index}>
							
							{job.project_status >= 5 ? (
							<div className="award">
								<img src={require("../../assets/images/awarded.png")} alt="" />
							</div>):''}
							<div className="machin_req_li_img"><img src={require("../../assets/images/icon_7.png")} alt="" /></div>
							<div className="machin_req_li_text">
								<h4><a href="projectdetails.html">{job.project_name}</a></h4>
								<p><span>Posted: 2d  20h ago</span> <span>End: 5d  3h</span> {jobs.bids_count>0?(<span>{jobs.bids_count} Offers</span>):''}</p>
								<h5>{job.description}</h5>
								{job.visibility=='Private'?(<><a href="#">ed.harding@rollingcircle.net</a><span style={{color:"#0F0",fontWeight:"bold",marginLeft:"5px"}}>(P)</span></>):(<a href="#">edharding</a>)}
							</div>
						</div>
					))}	
						<ul className="pagination">
							<li className="page-item">{page==0?(<a className="page-link">Previous</a>):(<a className="page-link" onClick={() => setPage(page-1)}>Previous</a>)}</li>
							{/*<li className="page-item active"><a className="page-link" href="#">1</a></li>*/}
								{getPages(meta.total_pages,page)}
							<li className="page-item">{page==meta.total_pages?(<a className="page-link">Next</a>):(<a className="page-link" onClick={() => setPage(page+1)}>Next</a>)}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<DefaultFooter />
    </>
  );
}

export default JobListPage;
