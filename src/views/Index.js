import React from "react";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeHeader from "../components/Headers/HomeHeader.js";


function Index() {
  
	return (
		<>
			<IndexNavbar />
			<HomeHeader />
			<div className="container latest_request">
				<div>
				<h1>latest requests</h1>
				</div>
				<div className="row">
				<div className="col-sm-4">
					<div className="laste_l">
					<figure>
						<img src={require("../assets/images/noimage.jpg")} alt="" />
					</figure>
					<div>
						<h3>Lorem Ipsum</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
						<span>Posted :12h 4m ago</span>
					</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="laste_l">
					<figure>
						<img src={require("../assets/images/noimage.jpg")} alt="" />
					</figure>
					<div>
						<h3>Lorem Ipsum</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard </p>
						<span>Posted :12h 4m ago</span>
					</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="laste_l">
					<figure>
						<img src={require("../assets/images/noimage.jpg")} alt="" />
					</figure>
					<div>
						<h3>Lorem Ipsum</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard </p>
						<span>Posted :12h 4m ago</span>
					</div>
					</div>
				</div>
				</div>
				<div className="all_request_button"><a href="#">All Requests <i className="fa fa-angle-right"></i></a></div>
			</div>

			<div className="container step_wrapper">
				<div className="row">
				<div className="col-sm-4">
					<div className="step_w">
					<figure>
						<img src={require("../assets/images/icon_1.png")} alt="" />
					</figure>
					<div>
						<span>1</span>
						<h4>Send your blueprint...</h4>
					</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="step_w">
					<figure>
						<img src={require("../assets/images/icon_2.png")} alt="" />
					</figure>
					<div>
						<span>2</span>
						<h4>Choose the best CNC quote</h4>
					</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="step_w">
					<figure>
						<img src={require("../assets/images/icon_3.png")} alt="" />
					</figure>
					<div>
						<span>3</span>
						<h4>Pay after delivery only if satisfied</h4>
					</div>
					</div>
				</div>
				</div>
			</div>

			<div className="container last_job">
				<div>
				<h1>last job pictures</h1>
				</div>
				<div className="owl-carousel owl-theme" id="topCarousel">
				<div className="item">
					<div className="how-wrks-inn">
					<figure>
						<img src={require("../assets/images/pic.png")} alt="" />
					</figure>
					</div>
				</div>
				<div className="item">
					<div className="how-wrks-inn">
					<figure>
						<img src={require("../assets/images/pic1.png")} alt="" />
					</figure>
					</div>
				</div> 
				<div className="item">
					<div className="how-wrks-inn">
					<figure>
						<img src={require("../assets/images/pic2.png")} alt="" />
					</figure>
					</div>
				</div> 
				<div className="item">
					<div className="how-wrks-inn">
					<figure>
						<img src={require("../assets/images/pic.png")} alt="" />
					</figure>
					</div>
				</div> 
				<div className="item">
					<div className="how-wrks-inn">
					<figure>
						<img src={require("../assets/images/pic1.png")} alt="" />
					</figure>
					</div>
				</div> 
				<div className="item">
					<div className="how-wrks-inn">
					<figure>
						<img src={require("../assets/images/pic2.png")} alt="" />
					</figure>
					</div>
				</div>  
				</div>
				
				<div className="all_request_button"><a href="#">Check more pics <i className="fa fa-angle-right"></i></a></div>
			</div>

			<div className="container machin1">
				<div className="row">
				<div className="col-sm-6">
					<div className="machin4">
					<h3>Machining-4U</h3>
					<p>is a specialised online marketplace connecting buyers and machinists. By dealing directly with a machinist, you can pay the lowest prices available by avoiding the sizeable markup charged by larger CNC manufacturing companies.<br /><br />

					No longer do you need to browse numerous sites to find the best prices for CNC machined parts. Simply post a free listing on Machining-4U, and wait for the affordable quotes to come in. When you find a price you are happy with, a machinist will get started on making your custom machined part.<br /><br />

					With so many machinists working for us, we can take on any requirement you may have, whether it's with aluminium, steel, stainless steel, brass or plastic. Some of our CNC machining capabilities include CNC milling, CNC routing and CNC cutting.<br /><br />

					CNC mills are the most commonly used CNC machines, and their core functions include drilling and turning metals. Routers are highly automated machines capable of cutting complex shapes and prototypes. CNC plasma cutting works in a similar way to CNC routing, but it requires a less-powerful setup. CNC turning, performed with a CNC lathe, involves</p>
					</div>
				</div>
				<div className="col-sm-6">
					<figure className="machin2">
					<img src={require("../assets/images/pic3.jpg")} alt="" />
					</figure>
				</div>
				</div>
			</div>

			<div className="container machin1">
				<div className="row">
				<div className="col-sm-6">
					<figure className="machin3">
					<img src={require("../assets/images/pic4.jpg")} alt="" />
					</figure>
				</div>
				<div className="col-sm-6">
					<div className="machin5">
					<h3>"CNC Machining One Part Only"</h3>
					<p>I finally found the solution to all my machined part needs! The workshop on the corner was not really interested in my ideas, but on machining-4u I got two offers right away! My chosen machinist delivered the parts in just a week and I was thrilled. I was able to inspect the delivered parts before my payment was processed which gave me the confidence to do my first online order on the site.</p>
					</div>
				</div>
				</div>
			</div>

			<div className="container machin1">
				<div className="row">
				<div className="col-sm-6">
					<div className="machin5">
					<h3>"CNC Machined Parts Online"</h3>
					<p>A great new online machining service for anyone who needs to find affordable, CNC machined parts. I posted my blueprints for the aluminium and steel parts that I designed, chose a machinist from a list of proposals and one week later my CNC parts are ready to be installed! It was so easy to turn my plans into a reality!</p>
					</div>
				</div>
				<div className="col-sm-6">
					<figure className="machin3">
					<img src={require("../assets/images/pic5.jpg")} alt="" />
					</figure>
				</div>
				</div>
			</div>

			<div className="container latest_review">
				<div>
				<h1>Latest Reviews</h1>
				</div>
				<div className="row">
				<div className="col-sm-4">
					<div className="latest_r">
					<h4>A very neat professional job. The machinist is helpful and the job was completed without fuss and before the time offered; this has has been my experience previously.</h4>
					<h5>-Skylineviverra</h5>
					<div className="rf85f">
						<p>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star-half-o"></i>
							<i className="fa fa-star-half-o"></i>
							<span>5.0</span>
						</p>
						<h6>22-May,2022</h6>
					</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="latest_r">
					<h4>A very neat professional job. The machinist is helpful and the job was completed without fuss and before the time offered; this has has been my experience previously.
					</h4>
					<h5>-Skylineviverra</h5>
					<div className="rf85f">
						<p>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star-half-o"></i>
							<i className="fa fa-star-half-o"></i>
							<span>5.0</span>
						</p>
						<h6>22-May,2022</h6>
					</div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="latest_r">
					<h4>A very neat professional job. The machinist is helpful and the job was completed without fuss and before the time offered; this has has been my experience previously.</h4>
					<h5>-Skylineviverra</h5>
					<div className="rf85f">
						<p>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star-half-o"></i>
							<i className="fa fa-star-half-o"></i>
							<span>5.0</span>
						</p>
						<h6>22-May,2022</h6>
					</div>
					</div>
				</div>
				</div>
			</div>

			<div className="container bottom-main-press">
				<div className="row">
				<div className="col-sm-2">
					<figure>
					<img src={require("../assets/images/logo-usn.png")} alt="" />
					</figure>
				</div>
				<div className="col-sm-2">
					<figure>
					<img src={require("../assets/images/press_2.png")} alt="" />
					</figure>
				</div>
				<div className="col-sm-2">
					<figure>
					<img src={require("../assets/images/press_3.png")} alt="" />
					</figure>
				</div>
				<div className="col-sm-2">
					<figure>
					<img src={require("../assets/images/press_4.png")} alt="" />
					</figure>
				</div>
				<div className="col-sm-2">
					<figure>
					<img src={require("../assets/images/press_7.png")} alt="" />
					</figure>
				</div>
				<div className="col-sm-2">
					<figure>
					<img src={require("../assets/images/press1.jpg")} alt="" />
					</figure>
				</div>
				</div>
			</div>
			<DefaultFooter />
		</>
	);
}

export default Index;