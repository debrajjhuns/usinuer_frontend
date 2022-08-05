import React from "react";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import IndexHeader from "../../components/Headers/IndexHeader.js";


function PublicProfileView() {
  
	return (
		<>
			<IndexNavbar />
			<IndexHeader title="My Profile" />
			<div className="container cjw">
                <div className="row">
                <div className="col-sm-4">
                    <div className="sidebar">
                    <h3>My Account</h3>
                    <ul className="side-nav">       
                        <li><a href="customer_jobList.html">Jobs</a></li>
                        <li className="active"><a href="customer_publicViewProfile.html">My Profile - Public View</a></li>
                        <li><a href="account.html">My Profile</a></li>
                        <li><a href="editProfile.html">Edit My Profile</a></li>
                        <li><a href="withdraw.html">Withdraw Funds</a></li>
                        <li><a href="customer_feedback1.html">Review Machinists</a></li>
                        <li><a href="payment_list.html">Invoices</a></li>                  
                        <li><a href="editPassword.html">Change Password</a></li>            
                    </ul>
                    </div>
                    <div className="sidebar">
                    <h3>Member Details</h3>
                    <div className="location">
                        <div className="location_l"><h5>Member Since</h5></div>
                        <div className="location_r"><p>2-Apr,2022</p></div>
                    </div>
                    </div>
                    <div className="sidebar">
                    <h3>Statistics</h3>
                    <div className="location">
                        <div className="location_l"><h5>Jobs</h5></div>
                        <div className="location_r"><p>2</p></div>
                    </div>
                    <div className="location">
                        <div className="location_l"><h5>Feedback</h5></div>
                        <div className="location_r">
                        <p>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-half-o"></i>
                            <span>4.8</span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="profile_box">
                    <div className="overview-head">
                        <figure>
                            <img src={require("../../assets/images/no-images.png")} alt="" />
                        </figure>
                        <div>
                        <h3>debraj41</h3>
                        <div className="location_a1">
                            <div className="location_l2"><h5>Feedback</h5></div>
                            <div className="location_r2">
                            <p>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>4.8</span>
                            </p>
                            </div>
                        </div>
                        <div className="location_a1">
                            <div className="location_l2"><h5>Jobs Completed</h5></div>
                            <div className="location_r2">
                            <p>
                                2
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="gallery_photo">
                        <h4>Portfolio</h4>
                        <div id="demo" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={require("../../assets/images/pic4.jpg")} alt="" />
                            </div>
                            <div className="carousel-item">
                            <img src={require("../../assets/images/pic5.jpg")} alt="" />
                            </div>
                            <div className="carousel-item">
                            <img src={require("../../assets/images/pic2.png")} alt="" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                        </div>
                    </div>
                    <h5>Work History<span>(2 Jobs)</span></h5>
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

export default PublicProfileView;