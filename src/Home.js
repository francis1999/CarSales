import React from 'react';
import Link from 'react-dom';
import banner4 from './images/banner4.jpg';
import Images from './Images.js';


/* classNameName Home extends React.Component {
    render(){
        return(

         
           
        )
    }
}
export default Home; */


const Home = () => {
    return (
        <div>
               <div className="banner-top">
			<div className="header-bottom">
				 <div className="header_bottom_right_images">
				     	<div id="slideshow">
							<ul className="slides">
						    	<li><a href="details.html"><canvas ></canvas><img src={Images.logo1} alt="Marsa Alam underawter close up" /></a></li>
						        <li><a href="details.html"><canvas></canvas><img src={Images.logo2} alt="Turrimetta Beach - Dawn" /></a></li>
						        <li><a href="details.html"><canvas></canvas><img src={Images.logo3} alt="Power Station" /></a></li>
						        <li><a href="details.html"><canvas></canvas><img src={Images.logo4} alt="Colors of Nature" /></a></li>
						    </ul>
						    <span className="arrow previous"></span>
						    <span className="arrow next"></span>
				  	</div>
		  			<div className="content-wrapper">		  
						<div className="content-top">
							  	<div className="box_wrapper"><h1>New Products For July</h1>
								</div>
							 <div className="text"> 	
								<div className="grid_1_of_3 images_1_of_3">
									<div className="grid_1">
										<a href="single.html"><img src={Images.logo28} title="continue reading" alt="" /></a>
											<div className="grid_desc">
												<p className="title">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
												<p className="title1">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
													 <div className="price">
													 	 <span className="reducedfrom">$66.00</span>
								        				<span className="actual">$12.00</span>
													</div>
													<div className="cart-button">
														<div className="cart">
															<a href="#"><img src={Images.logo18} alt=""/></a>
														</div>
														<button className="button"><span>Details</span></button>
													<div className="clear"></div>
												</div>
											</div>
								</div><div className="clear"></div>
							</div>
									<div className="grid_1_of_3 images_1_of_3">
										  <div className="grid_1">
										<a href="single.html"><img src={Images.logo29} title="continue reading" alt="" /></a>
											<div className="grid_desc">
												<p className="title">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
												<p className="title1">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
													 <div className="price">
													 	 <span className="reducedfrom">$66.00</span>
								        				<span className="actual">$12.00</span>
													</div>
													<div className="cart-button">
														<div className="cart">
															<a href="#"><img src={Images.logo18} alt=""/></a>
														</div>
														<button className="button"><span>Details</span></button>
													<div className="clear"></div>
												</div>
											</div>
								</div><div className="clear"></div>
									</div>
									<div className="grid_1_of_3 images_1_of_3">
										  <div className="grid_1">
										<a href="single.html"><img src={Images.logo27} title="continue reading" alt="" /></a>
											<div className="grid_desc">
												<p className="title">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
												<p className="title1">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
													 <div className="price">
													 	 <span className="reducedfrom">$66.00</span>
								        				<span className="actual">$12.00</span>
													</div>
													<div className="cart-button">
														<div className="cart">
															<a href="#"><img src={Images.logo18} alt=""/></a>
														</div>
														<button className="button"><span>Details</span></button>
													<div className="clear"></div>
												</div>
											</div>
								</div><div className="clear"></div>
									</div><div className="clear"></div>
								</div>
						</div>
						<div className="content-top">
							  	<div className="box_wrapper"><h1>Featured Products</h1>
								</div>
							 <div className="text"> 	
								<div className="grid_1_of_3 images_1_of_3">
									<div className="grid_1">
										<a href="single.html"><img src={Images.logo24} title="continue reading" alt="" /></a>
											<div className="grid_desc">
												<p className="title">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
												<p className="title1">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
													 <div className="price">
													 	 <span className="reducedfrom">$66.00</span>
								        				<span className="actual">$12.00</span>
													</div>
													<div className="cart-button">
														<div className="cart">
															<a href="#"><img src={Images.logo18} alt=""/></a>
														</div>
														<button className="button"><span>Details</span></button>
													<div className="clear"></div>
												</div>
											</div>
								</div><div className="clear"></div>
							</div>
									<div className="grid_1_of_3 images_1_of_3">
										  <div className="grid_1">
										<a href="single.html"><img src={Images.logo25} title="continue reading" alt="" /></a>
											<div className="grid_desc">
												<p className="title">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
												<p className="title1">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
													 <div className="price">
													 	 <span className="reducedfrom">$66.00</span>
								        				<span className="actual">$12.00</span>
													</div>
													<div className="cart-button">
														<div className="cart">
															<a href="#"><img src={Images.logo18} alt=""/></a>
														</div>
														<button className="button"><span>Details</span></button>
													<div className="clear"></div>
												</div>
											</div>
								</div><div className="clear"></div>
									</div>
									<div className="grid_1_of_3 images_1_of_3">
										  <div className="grid_1">
										<a href="single.html"><img src={Images.logo26} title="continue reading" alt="" /></a>
											<div className="grid_desc">
												<p className="title">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
												<p className="title1">Lorem ipsum dolor sitconsectetuer adipiscing elit</p>
													 <div className="price">
													 	 <span className="reducedfrom">$66.00</span>
								        				<span className="actual">$12.00</span>
													</div>
													<div className="cart-button">
														<div className="cart">
															<a href="#"><img src={Images.logo18} alt=""/></a>
														</div>
														<button className="button"><span>Details</span></button>
													<div className="clear"></div>
												</div>
											</div>
								</div><div className="clear"></div>
									</div><div className="clear"></div>
								</div>
						</div>
				</div>
		</div>
		<div className="header-para">
				<div className="categories">
						<div className="list-categories">
							<div className="first-list">
								<div className="div_2"><a href="#">Cars</a></div>
								<div className="div_img">
									<img src={Images.logo14} alt="Cars" title="Cars" width="60" height="39" />
								</div><div className="clear"></div>
							</div>
							<div className="first-list">
								<div className="div_2"><a href="#">Rental</a></div>
								<div className="div_img">
									<img src={Images.logo15} alt="Cars" title="Cars" width="60" height="39" />
								</div><div className="clear"></div>
							</div>
							<div className="first-list">
								<div className="div_2"><a href="#">Banking</a></div>
								<div className="div_img">
									<img src={Images.logo16} alt="Cars" title="Cars" width="60" height="39" />
								</div><div className="clear"></div>
							</div>
							<div className="first-list">
								<div className="div_2"><a href="#">Trucks</a></div>
								<div className="div_img">
									<img src={Images.logo17} alt="Cars" title="Cars" width="60" height="39" />
								</div><div className="clear"></div>
							</div>
				</div>
				<div className="box"> 
							<div className="box-heading"><h1><a href="#">Cart:&nbsp;</a></h1></div>
							 <div className="box-content">
							Now in your cart&nbsp;<strong> 0 items</strong>
							</div>	
				</div>
				<div className="box-title">
					<h1><span className="title-icon"></span><a href="#">Branches</a></h1>
				</div>
				<div className="section group example">
					<div className="col_1_of_2 span_1_of_2">
					  <img src="images/pic21.jpg" alt=""/>
					   <img src="images/pic24.jpg" alt=""/>
					   <img src="images/pic25.jpg" alt=""/>
					   <img src="images/pic27.jpg" alt=""/>
	 				</div>
					<div className="col_1_of_2 span_1_of_2">
						 <img src="images/pic22.jpg" alt=""/>
					  	<img src="images/pic23.jpg" alt=""/>
					  	<img src="images/pic26.jpg" alt=""/>
					  	<img src="images/pic28.jpg" alt=""/>
					  </div><div className="clear"></div>
		   		 </div>
				<div className="clear"></div>
				</div>
	</div>
		<div className="clear"></div>
		<div className="footer-bottom">
			<div className="copy">
				<p>&copy 2013 Cars Online . All rights Reserved | Design by <a href="http://w3layouts.com">W3Layouts</a></p>
			</div>
		</div>
</div>
</div>
        </div>
    );
}
 
export default Home; 