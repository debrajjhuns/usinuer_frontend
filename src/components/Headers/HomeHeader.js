import React from "react";

import Background from '../../assets/images/banner1.jpg';
function HomeHeader(){
	
	return (
		<div class="banner_wp home_banner" style={{backgroundImage: `url(${Background})`}}>
            <div class="container">
                <div class="row">
                    <div class="banner_text home_banner_text">
                        <h1>CNC Machining for Everyone</h1>
                        <p>Send your plans and receive quotes for free</p>
                        <a href="#">get free quotes now</a>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default HomeHeader;