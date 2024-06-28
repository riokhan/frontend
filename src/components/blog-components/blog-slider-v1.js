import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
      <div className={ "ltn__blog-area pt-115--- pb-70 go-top "+ sectionClass}>
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-12">
		        <div className="section-title-area ltn__section-title-2--- text-center">
		          <h6 className={"section-subtitle ltn__secondary-color "+customClass}>News &amp; Blogs</h6>
		          <h1 className="section-title">Leatest News Feeds</h1>
		        </div>
		      </div>
		    </div>
		    <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/"><img src={publicUrl+"assets/img/others/06.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            {/* <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
		                </li>
		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Decorate</Link>
		                </li>
		              </ul>
		            </div> */}
		            <h3 className="ltn__blog-title"><Link to="/">33 Imrie Rd.-Allston</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2024</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/"><img src={publicUrl+"assets/img/others/02.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            {/* <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
		                </li>
		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
		                </li>
		              </ul>
		            </div> */}
		            <h3 className="ltn__blog-title"><Link to="/">4 Farrington Ave.-Allston</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2024</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/"><img src={publicUrl+"assets/img/others/08.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            {/* <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
		                </li>
		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Estate</Link>
		                </li>
		              </ul>
		            </div> */}
		            <h3 className="ltn__blog-title"><Link to="/">47R Creighton St.-Jamaica</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2024</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/"><img src={publicUrl+"assets/img/others/02.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            {/* <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
		                </li>
		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Room</Link>
		                </li>
		              </ul>
		            </div> */}
		            <h3 className="ltn__blog-title"><Link to="/">8 Pratt St. Room 3-Allston</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2024</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/* Blog Item */}
		      <div className="col-lg-12">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/"><img src={publicUrl+"assets/img/others/04.jpg"} alt="#" /></Link>
		          </div>
		          <div className="ltn__blog-brief">
		            {/* <div className="ltn__blog-meta">
		              <ul>
		                <li className="ltn__blog-author">
		                  <Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
		                </li>
		                <li className="ltn__blog-tags">
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
		                  <Link to="/blog-grid"><i className="fas fa-tags" />Trends</Link>
		                </li>
		              </ul>
		            </div> */}
		            <h3 className="ltn__blog-title"><Link to="/">23 Kenney St.-Jamaica</Link></h3>
		            <div className="ltn__blog-meta-btn">
		              <div className="ltn__blog-meta">
		                <ul>
		                  <li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2023</li>
		                </ul>
		              </div>
		              <div className="ltn__blog-btn">
		                <Link to="/">Read more</Link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      {/*  */}
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogSlider;
