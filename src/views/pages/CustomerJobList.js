import React from "react";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import IndexHeader from "../../components/Headers/IndexHeader.js";


function CustomerJobList() {
  
	return (
		<>
			<IndexNavbar />
			<IndexHeader title="My Projects" />
			<div className="container cjw">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="sidebar">
                            <h3>My Account</h3>
                            <ul className="side-nav">       
                                <li className="active"><a href="customer_jobList.html">Jobs</a></li>
                                <li><a href="customer_publicViewProfile.html">My Profile - Public View</a></li>
                                <li><a href="account.html">My Profile</a></li>
                                <li><a href="editProfile.html">Edit My Profile</a></li>
                                <li><a href="withdraw.html">Withdraw Funds</a></li>
                                <li><a href="customer_feedback1.html">Review Machinists</a></li>  
                                <li><a href="payment_list.html">Invoices</a></li>                 
                                <li><a href="editPassword.html">Change Password</a></li>            
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="profile_box">
                            <h3>My Projects<span>(2)</span></h3>
                            {/*<div className="row help-ico">
                                <div className="col-sm-6">
                                    <select id="project_status">
                                        <option value="0" selected="selected">Other</option>
                                        <option value="2">Awarded but not yet Funded projects</option>
                                        <option value="4">Finalized Orders without a Review</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                <a href="#" data-toggle="modal" data-target="#myhelp"><strong><i className="fa fa-question-circle"></i> Help</strong></a>
                                </div>
                            </div>
                            <div className="uys5">
                                <ul className="nav nav-pills" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#all">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#mybid">My Bids</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#orderprogress">My Orders in Progress</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#finalizeorder">My Finalized Orders</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="all" className="tab-pane active">
                                        <div className="project_loop">
                                        <h4>
                                            <a href="#">Lorem Ipsum is simply dummy text of the printing</a>
                                        </h4>
                                        <p>Public | Open</p>
                                        <p>Posted : 16-Jun,2022</p>
                                        </div>
                                    </div>
                                    <div id="mybid" className="tab-pane fade">
                                        <div className="project_loop">
                                        <h4>
                                            <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a>
                                        </h4>
                                        <p>Public | Open</p>
                                        <p>Posted : 16-Jun,2022</p>
                                        </div>
                                    </div>
                                    <div id="orderprogress" className="tab-pane fade">
                                        <div className="project_loop">
                                        <h4>
                                            <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</a>
                                        </h4>
                                        <p>Public | Open</p>
                                        <p>Posted : 16-Jun,2022</p>
                                        </div>
                                    </div>
                                    <div id="finalizeorder" className="tab-pane fade">
                                        <div className="project_loop">
                                        <h4>
                                            <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</a>
                                        </h4>
                                        <p>Public | Open</p>
                                        <p>Posted : 16-Jun,2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                            <div className="project_loop">
                                <h4>
                                <a href="#">testnn</a>
                                </h4>
                                <p>Public | Open</p>
                                <p>Posted : 16-Jun,2022</p>
                            </div>
                            <div className="project_loop">
                                <h4>
                                <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</a>
                                </h4>
                                <p>Public | Open</p>
                                <p>Posted : 16-Jun,2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<DefaultFooter />
		</>
	);
}

export default CustomerJobList;