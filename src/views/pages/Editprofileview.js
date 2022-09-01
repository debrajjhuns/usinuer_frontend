import React from "react";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import IndexHeader from "../../components/Headers/IndexHeader.js";
import Sidebar from "../../components/Navbars/Sidebar.js";

function Editprofileview() {
  
	return (
		<>
			<IndexNavbar />
			<IndexHeader title="My Profile" />
			<div className="container cjw">
                <div className="row">
                <div className="col-sm-4">
                    <Sidebar />
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
						<h3>My Profile (Client)</h3>
						<div className="project_profil">
							<form>
								<div className="row">
									<div className="col-sm-6">
										<label>First Name</label>
										<input name="fname" type="text" value="Deb"/>
									</div>
									<div className="col-sm-6">
										<label>Last Name</label>
										<input name="lname" type="text" value="Raj"/>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<label>Username</label>
										<input name="username" type="text" value="debraj4"/>
									</div>
									<div className="col-sm-6">
										<label>Post code</label>
										<input name="zcode" type="text" value="700111"/>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<label>City</label>
										<input name="city" type="text" value="kolkata"/>
									</div>
									<div className="col-sm-6">
										<label>Country</label>
										<input name="country" type="text" value="United Kingdom"/>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<label>Address</label>
										<textarea name="address" cols="20" rows="5">test</textarea>
									</div>
									<div className="col-sm-6">
										<label>Description</label>
										<textarea name="desc" cols="20" rows="5"></textarea>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<label>Profile Picture</label>
										<div className="upload-btn-wrapper">
											<button className="btn"><i className="fa fa-upload"></i> Add your logo, a picture</button>
											<input type="file" name="myfile"/>
										</div>
									</div>
									<div className="col-sm-6">
									</div>
								</div>
								<div className="reg-bottom">
									<button type="Submit" name="submit">Save</button>
								</div>
							</form>
						</div>
					</div>
                </div>
                </div>
            </div>
			<DefaultFooter />
		</>
	);
}

export default Editprofileview;