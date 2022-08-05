/*eslint-disable*/
import React from "react";

function DefaultFooter() {
	return (
		<footer>
    <div class="container footer_wp">
      <div class="row">
        <div class="col-sm-4">
          <figure class="footer_logo">
            <img src={require("../../assets/images/logo.png")} alt="" />
          </figure>
          <p>With Usineur.fr, SMEs and individuals have access to the machining workshops that will best meet their needs: aluminum, steel, stainless steel, brass, plastic parts...<br /><br />
          Usineur.fr allows Machinists to identify the requests that best correspond to their know-how, materials in stock, tooling capacity and thus offer machined parts at very attractive prices.</p>
        </div>
        <div class="col-sm-3 offset-md-1">
          <h5>Quick Link</h5>
          <ul>
            <li><a href="#">How it works </a></li>
            <li><a href="#">Assistance </a></li>
            <li><a href="#">Who are we ? </a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Legal Notice</a></li>
            <li><a href="#">The costs</a></li>
          </ul>
        </div>
        <div class="col-sm-4">
          <figure class="footer_payment">
            <img src={require("../../assets/images/foot-ico2.png")} alt="" />
          </figure>
        </div>
      </div>
    </div>
    <div class="copy_r">
      <p>Copyright &#169; 2022 usineur. All rights reserved</p>
    </div>
  </footer>
	);
}

export default DefaultFooter;