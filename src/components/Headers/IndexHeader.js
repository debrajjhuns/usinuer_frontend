import React from "react";

import Background from '../../assets/images/banner1.jpg';
function IndexHeader(props){
	console.log(props);
	return (
		<div class="banner_wp sign_banner" style={{backgroundImage: `url(${Background})`}}>
			<div class="container">
				<div class="row">
					<div class="banner_text inner_banner_text">
					<h1 class="yh">{props.title}</h1>
					</div>
				</div>
			</div>
	  </div>
	);
}

export default IndexHeader;