import React, {Component} from 'react';
import TabMenu from '../navigation/TabMenu';
import { Link } from 'react-router';
/* eslint-disable */
class UserLibrary extends Component {
    render(){
        return(
            <div>
                <div className="wrapper">
        {/* BEGIN HEADER */}
        <TabMenu currentPage="user-library" />
        {/* END HEADER */}
        <div className="container-fluid">
          <div className="page-content">
            {/* BEGIN BREADCRUMBS */}
            <div className="breadcrumbs">
              <h1>Library</h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Library</li>
              </ol>
            </div>
            {/* END BREADCRUMBS */}
            {/* BEGIN SIDEBAR CONTENT LAYOUT */}
            <div className="page-content-container">
              <div className="page-content-row">
                <div className="page-library">
                  {/* BEGIN PAGE BASE CONTENT */}
                  <div className="row">
                    <div className="col-md-12">
                      {/* BEGIN PROFILE SIDEBAR */}
                      <div className="profile-sidebar">
                        <ul className="list-group">
                          <li className="list-group-item"> Cras justo odio
                            <span className="badge badge-default"> 3 </span>
                          </li>
                          <li className="list-group-item"> Dapibus ac facilisis in
                            <span className="badge badge-success"> 11 </span>
                          </li>
                          <li className="list-group-item"> Morbi leo risus
                            <span className="badge badge-danger"> new </span>
                          </li>
                          <li className="list-group-item"> Porta ac consectetur ac
                            <span className="badge badge-warning"> 4 </span>
                          </li>
                          <li className="list-group-item"> Vestibulum at eros
                            <span className="badge badge-info"> 3 </span>
                          </li>
                        </ul>
                      </div>
                      {/* END BEGIN PROFILE SIDEBAR */}
                      {/* BEGIN PROFILE CONTENT */}
                      <div className="profile-content">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="blog-page blog-content-1">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/1.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/02.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/2.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/03.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/1.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/02.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/2.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="blog-post-sm bordered blog-container">
                                    <div className="blog-img-thumb">
                                      <Link to="library-page" >
                                        <img src="assets/pages/img/page_general_search/03.jpg" />
                                      </Link>
                                    </div>
                                    <div className="blog-post-content">
                                      <h2 className="blog-title blog-post-title">
                                        <Link to="library-page" >Metronic Blog Post</Link>
                                      </h2>
                                      <p className="blog-post-desc"> Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy </p>
                                      <div className="blog-post-foot">
                                        <div className="blog-post-meta">
                                          <i className="icon-calendar font-blue" />
                                          <a href="javascript:;">Oct 24, 2015</a>
                                        </div>
                                        <div className="blog-post-meta">
                                          <i className="icon-bubble font-blue" />
                                          <a href="javascript:;">14 Comments</a>
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
                      {/* END PROFILE CONTENT */}
                    </div>
                  </div>
                  {/* END PAGE BASE CONTENT */}
                </div>
              </div>
            </div>
            {/* END SIDEBAR CONTENT LAYOUT */}
          </div>
          {/* BEGIN FOOTER */}
          <p className="copyright"> 2016 © MediSqured. All Rights Reserved.
          </p>
          <a href="#index" className="go2top">
            <i className="icon-arrow-up" />
          </a>
          {/* END FOOTER */}
        </div>
      </div>

            </div>
        );
    }
}

export default UserLibrary;