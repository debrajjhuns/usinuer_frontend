import React from "react";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import IndexHeader from "../../components/Headers/IndexHeader.js";
import Sidebar from "../../components/Navbars/Sidebar.js";


function Changepassword() {
  
	return (
		<>
			<IndexNavbar />
			<IndexHeader title="My Profile" />
			<div className="container qw1">
				<div className="row">
					<div className="col-sm-4">
						<Sidebar />
					</div>
					<div className="col-sm-8">
						<div className="profile_box" style="background-image: url(./img/lock_bg.png);">
							<h3>Change Password (debraj4)</h3>
							<div className="edit_password_wp">
								<img src="img/lock.png" alt="" />
								<form>
									<div className="row">
										<div className="col-sm-4">
											<label>Old Password</label>
										</div>
										<div className="col-sm-8">
											<input name="oldpwd" type="password">
										</div>
									</div>
									<div className="row">
										<div className="col-sm-4">
										<label>New Password</label>
										</div>
										<div className="col-sm-8">
										<input name="newpwd" type="password">
										</div>
									</div>
									<div className="row">
										<div className="col-sm-4">
										<label>Confirm Password</label>
										</div>
										<div className="col-sm-8">
										<input name="confpwd" type="password">
										</div>
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

export default Changepassword;