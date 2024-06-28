import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Sidebar from './shop-sidebar';

class ShopGridV1 extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	  activeView: 'listView' // Default active view
	// 	};
	//   }
	
	//   handleLinkClick = (view) => {
	// 	// Implement your logic here for handling link clicks
	// 	console.log(`Switching to ${view}`);
	// 	// Example: Update state or perform other actions based on click
	// 	this.setState({ activeView: view });
	//   };
	
	  render() {
		// const { activeView } = this.state;
	

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
			<div className="ltn__product-area ltn__product-gutter">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-9 order-lg-2 mb-100">
							<div className="ltn__shop-options">
    <ul className="justify-content-start" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <li style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <h3 style={{marginBottom:"0px"}}>10 
			<font color="#c0c0c0" style={{marginLeft:"10px"}}>apartments found</font>
			</h3>
			<li style={{marginTop:"0px"}}>
								<div className="ltn__grid-list-tab-menu ">
									<div className="nav" style={{flexWrap:"inherit"}}>
									<a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><button  type="button" class="theme-btn-1 btn btn-effect-1" style={{width: "100px",padding: "0px 10px",   minHeight: "30px",fontSize: "11px",fontWeight: "500" }}> List view</button></a>
									<a data-bs-toggle="tab" href="#liton_product_list"><button type="button" class="theme-btn-1 btn btn-effect-1" style={{width: "100px",padding: "0px 10px",   minHeight: "30px",fontSize: "11px",fontWeight: "500" }}> Map view</button></a>
									</div>
								</div>
								</li>
        </li>
    </ul>
</div>

							<div className="tab-content">
							<div className="tab-pane fade active show" id="liton_product_grid">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view">
								<div className="row">
									<div className="col-lg-12">
									{/* Search Widget */}
									<div className="ltn__search-widget mb-30">
										<form action="#">
										<input type="text" name="search" placeholder="Search your keyword..." />
										<button type="submit"><i className="fas fa-search" /></button>
										</form>
									</div>
									</div>
									{/* ltn__product-item */}



									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home.jpg"} alt="#" /></Link>
									
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">33 Imrie Rd.-Allston</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										
										 <ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											{/* <li className="go-top">
												<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
												</Link>
											</li> */}
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$34,900<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>

									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home2.jpg"} alt="#" /></Link>
										
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">4 Farrington Ave.-Allston</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
										
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$34,300<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home3.jpg"} alt="#" /></Link>
										
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">47R Creighton St.-Jamaica Plain</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$35,700<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home4.jpg"} alt="#" /></Link>
										
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">8 Pratt St. Room 3-Allston</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$32,000<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home5.jpg"} alt="#" /></Link>
									
										</div>
										<div className="product-info">
									
										<h2 className="product-title go-top"><Link to="/product-details">23 Kenney St.-Jamaica Plain</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>

											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$37,200<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home6.jpg"} alt="#" /></Link>
									
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">620 Dudley-Dorchester</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
										
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$28,000<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home7.jpg"} alt="#" /></Link>
										
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">144 Homestead St.-Dorchester</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
										
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$34,900<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									<div className="col-xl-3 col-sm-3 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/home8.jpg"} alt="#" /></Link>
										
										</div>
										<div className="product-info">
										
										<h2 className="product-title go-top"><Link to="/product-details">620 Dudley-Dorchester</Link></h2>
										<div className="product-img-location go-top">
											<ul>
											<li>
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
											</ul>
										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
			              <li><span>3 <i className="flaticon-bed" /></span>
			                Bedrooms
			              </li>
			              <li><span>2 <i className="flaticon-clean" /></span>
			                Bathrooms
			              </li>
			              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
			                square Ft
			              </li>
			            </ul>
										<div className="product-hover-action">
											<ul>
											<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
												</a>
											</li>
											<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											
											</ul>
										</div>
										</div>
										<div className="product-info-bottom">
										<div className="product-price">
											<span>$32,300<label>Rent</label></span>
										</div>
										</div>
									</div>
									</div>


									
									
								</div>
								</div>
							</div>
							<div className="tab-pane fade" id="liton_product_list">
								<div className="ltn__product-tab-content-inner ltn__product-list-view">
								<div className="row">
									<div className="col-lg-12">
									<div className="property-details-google-map mb-60" style={{height:"100vh"}}>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="689px" frameBorder={0} allowFullScreen aria-hidden="false" title="Map" tabIndex={0} />
						</div>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="ltn__pagination-area text-center">
							<div className="ltn__pagination">
								<ul>
								<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
								<li className='active'><Link to="#">1</Link></li>
								<li><Link to="#">2</Link></li>
								<li><Link to="#">3</Link></li>
								<li><Link to="#">...</Link></li>
								<li><Link to="#">10</Link></li>
								<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
								</ul>
							</div>
							</div>
						</div>
						<Sidebar />
					</div>
				</div>
			</div>
						
			<div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/7.png"} alt="#" />
								</div>
								<div className="modal-product-info go-top">
									<h5><Link to="/product-details">Brake Conversion Kit</Link></h5>
									<p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
									<div className="btn-wrapper">
									<Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
									</div>
								</div>
								{/* additional-info */}
								<div className="additional-info d-none">
									<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
									<div className="payment-method">
									<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__quick-view-modal-area">
				<div className="modal fade" id="quick_view_modal" tabIndex={-1}>
					<div className="modal-dialog modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
							{/* <i class="fas fa-times"></i> */}
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-lg-6 col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/4.png"} alt="#" />
								</div>
								</div>
								<div className="col-lg-6 col-12">
								<div className="modal-product-info">
									<div className="product-ratting">
									<ul>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star" /></a></li>
										<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
										<li><a href="#"><i className="far fa-star" /></a></li>
										<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
									</ul>
									</div>
									<h3>Brake Conversion Kit</h3>
									<div className="product-price">
									<span>$149.00</span>
									<del>$165.00</del>
									</div>
									<div className="modal-product-meta ltn__product-details-menu-1">
									<ul>
										<li>
										<strong>Categories:</strong> 
										<span className="go-top">
											<Link to="/blog">Parts</Link>
											<Link to="/blog">Car</Link>
											<Link to="/blog">Seat</Link>
											<Link to="/blog">Cover</Link>
										</span>
										</li>
									</ul>
									</div>
									<div className="ltn__product-details-menu-2">
									<ul>
										<li>
										<div className="cart-plus-minus">
											<input type="text" defaultValue="02" name="qtybutton" className="cart-plus-minus-box" />
										</div>
										</li>
										<li>
										<a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
											<i className="fas fa-shopping-cart" />
											<span>ADD TO CART</span>
										</a>
										</li>
									</ul>
									</div>
									<hr />
									<div className="ltn__social-media">
									<ul>
										<li>Share:</li>
										<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
										<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
										<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
										<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
									</ul>
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__add-to-cart-modal-area">
				<div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
					<div className="modal-dialog modal-md" role="document">
					<div className="modal-content">
						<div className="modal-header">
						<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
						</div>
						<div className="modal-body">
						<div className="ltn__quick-view-modal-inner">
							<div className="modal-product-item">
							<div className="row">
								<div className="col-12">
								<div className="modal-product-img">
									<img src={publicUrl+"assets/img/product/1.png"} alt="#" />
								</div>
								<div className="modal-product-info go-top">
									<h5 className="go-top"><Link to="/product-details">Brake Conversion Kit</Link></h5>
									<p className="added-cart"><i className="fa fa-check-circle" />Successfully added to your Cart</p>
									<div className="btn-wrapper">
									<Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
									<Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
									</div>
								</div>
								{/* additional-info */}
								<div className="additional-info d-none">
									<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
									<div className="payment-method">
									<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
									</div>
								</div>
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div>


			</div>

        }
}

export default ShopGridV1

