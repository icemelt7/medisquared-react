import React, {Component} from 'react';
import TabMenu from '../navigation/TabMenu';
import { Link } from 'react-router';
/* eslint-disable */
class LibraryPage extends Component {
    render(){
        return(<div>
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
                            <div className="blog-page blog-content-2">
                              <div className="row">
                                <div className="col-lg-9">
                                  <div className="blog-single-content bordered blog-container">
                                    <div className="blog-single-head">
                                      <h1 className="blog-single-head-title">Metronic Blog Reborn</h1>
                                      <div className="blog-single-head-date">
                                        <i className="icon-calendar font-blue" />
                                        <a href="javascript:;">Oct 24, 2015</a>
                                      </div>
                                    </div>
                                    <div className="blog-single-img">
                                      <img src="assets/pages/img/background/4.jpg" /> </div>
                                    <div className="blog-single-desc">
                                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore siat magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                                      <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla et facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                                        luptatum zzril delenit augue et duis dolore feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi
                                        non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. </p>
                                      <p> Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam et processus sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quame
                                        nunc putamus parum claram, siad anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                                      </p>
                                    </div>
                                    <div className="blog-single-foot">
                                      <ul className="blog-post-tags">
                                        <li className="uppercase">
                                          <a href="javascript:;">Bootstrap</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">Sass</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">HTML</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="blog-comments">
                                      <h3 className="sbold blog-comments-title">Comments(30)</h3>
                                      <div className="c-comment-list">
                                        <div className="media">
                                          <div className="media-left">
                                            <a href="#">
                                              <img className="media-object" alt src="assets/pages/img/avatars/team1.jpg" /> </a>
                                          </div>
                                          <div className="media-body">
                                            <h4 className="media-heading">
                                              <a href="#">Sean</a> on
                                              <span className="c-date">23 May 2015, 10:40AM</span>
                                            </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </div>
                                        </div>
                                        <div className="media">
                                          <div className="media-left">
                                            <a href="#">
                                              <img className="media-object" alt src="assets/pages/img/avatars/team3.jpg" /> </a>
                                          </div>
                                          <div className="media-body">
                                            <h4 className="media-heading">
                                              <a href="#">Strong Strong</a> on
                                              <span className="c-date">21 May 2015, 11:40AM</span>
                                            </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                            <div className="media">
                                              <div className="media-left">
                                                <a href="#">
                                                  <img className="media-object" alt src="assets/pages/img/avatars/team4.jpg" /> </a>
                                              </div>
                                              <div className="media-body">
                                                <h4 className="media-heading">
                                                  <a href="#">Emma Stone</a> on
                                                  <span className="c-date">30 May 2015, 9:40PM</span>
                                                </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="media">
                                          <div className="media-left">
                                            <a href="#">
                                              <img className="media-object" alt src="assets/pages/img/avatars/team7.jpg" /> </a>
                                          </div>
                                          <div className="media-body">
                                            <h4 className="media-heading">
                                              <a href="#">Nick Nilson</a> on
                                              <span className="c-date">30 May 2015, 9:40PM</span>
                                            </h4> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </div>
                                        </div>
                                      </div>
                                      <h3 className="sbold blog-comments-title">Leave A Comment</h3>
                                      <form action="#">
                                        <div className="form-group">
                                          <input type="text" placeholder="Your Name" className="form-control c-square" /> </div>
                                        <div className="form-group">
                                          <input type="text" placeholder="Your Email" className="form-control c-square" /> </div>
                                        <div className="form-group">
                                          <input type="text" placeholder="Your Website" className="form-control c-square" /> </div>
                                        <div className="form-group">
                                          <textarea rows={8} name="message" placeholder="Write comment here ..." className="form-control c-square" defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                          <button type="submit" className="btn blue uppercase btn-md sbold btn-block">Submit</button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="blog-single-sidebar bordered blog-container">
                                    <div className="blog-single-sidebar-search">
                                      <div className="input-icon right">
                                        <i className="icon-magnifier" />
                                        <input type="text" className="form-control" placeholder="Search Blog" /> </div>
                                    </div>
                                    <div className="blog-single-sidebar-recent">
                                      <h3 className="blog-sidebar-title uppercase">Recent Posts</h3>
                                      <ul>
                                        <li>
                                          <a href="javascript:;">Metronic Admin Progress</a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">New UI Features</a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">Lorem Ipsum Dolore Amet</a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">Userfull Pages Released</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="blog-single-sidebar-tags">
                                      <h3 className="blog-sidebar-title uppercase">Tags</h3>
                                      <ul className="blog-post-tags">
                                        <li className="uppercase">
                                          <a href="javascript:;">Bootstrap</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">Sass</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">HTML</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">CSS</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">Gulp</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">Framework</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">Admin Theme</a>
                                        </li>
                                        <li className="uppercase">
                                          <a href="javascript:;">UI Features</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="blog-single-sidebar-links">
                                      <h3 className="blog-sidebar-title uppercase">Useful Links</h3>
                                      <ul>
                                        <li>
                                          <a href="javascript:;">Lorem Ipsum </a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">Dolore Amet</a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">Metronic Database</a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">UI Features</a>
                                        </li>
                                        <li>
                                          <a href="javascript:;">Advanced Forms</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="blog-single-sidebar-ui">
                                      <h3 className="blog-sidebar-title uppercase">Related Library</h3>
                                      <div className="row ui-margin">
                                        <div className="col-xs-4 ui-padding">
                                          <a href="javascript:;">
                                            <img src="assets/pages/img/background/1.jpg" />
                                          </a>
                                        </div>
                                        <div className="col-xs-4 ui-padding">
                                          <a href="javascript:;">
                                            <img src="assets/pages/img/background/37.jpg" />
                                          </a>
                                        </div>
                                        <div className="col-xs-4 ui-padding">
                                          <a href="javascript:;">
                                            <img src="assets/pages/img/background/57.jpg" />
                                          </a>
                                        </div>
                                        <div className="col-xs-4 ui-padding">
                                          <a href="javascript:;">
                                            <img src="assets/pages/img/background/53.jpg" />
                                          </a>
                                        </div>
                                        <div className="col-xs-4 ui-padding">
                                          <a href="javascript:;">
                                            <img src="assets/pages/img/background/59.jpg" />
                                          </a>
                                        </div>
                                        <div className="col-xs-4 ui-padding">
                                          <a href="javascript:;">
                                            <img src="assets/pages/img/background/42.jpg" />
                                          </a>
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

        </div>)
    }
}

export default LibraryPage;