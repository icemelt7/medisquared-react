import React, {Component} from 'react';
import TabMenu from '../navigation/TabMenu';
import { Link } from 'react-router';
/* eslint-disable */
class CompanyProfile extends Component {
    render(){
        return(
            <div>
                <div className="wrapper">
        {/* BEGIN HEADER */}
        <TabMenu currentPage="company-profile" />
        {/* END HEADER */}
        <div className="container-fluid">
          <div className="page-content">
            {/* BEGIN BREADCRUMBS */}
            <div className="breadcrumbs">
              <h1>Company Profile</h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li className="active">Profile</li>
              </ol>
            </div>
            {/* END BREADCRUMBS */}
            {/* BEGIN SIDEBAR CONTENT LAYOUT */}
            <div className="page-content-container">
              <div className="page-content-row">
                {/* BEGIN PAGE SIDEBAR */}
                <div className="page-sidebar">
                  <nav className="navbar" role="navigation">
                    {/* Brand and toggle get grouped for better mobile display */}
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <ul className="nav navbar-nav margin-bottom-35">
                      <li className="active">
                        <a href="user-profile.html">
                          <i className="icon-home" /> Overview </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-note " /> Reports </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-user" /> Company Activity </a>
                      </li>
                      <li>
                        <a href="page_user_profile_1_account.html">
                          <i className="icon-settings" /> Account Settings </a>
                      </li>
                    </ul>
                    <h3>Quick Actions</h3>
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="#">
                          <i className="icon-envelope " /> Inbox
                          <label className="label label-danger">New</label>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-paper-clip " /> Task </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-star" /> Projects </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-pin" /> Events
                          <span className="badge badge-success">2</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* END PAGE SIDEBAR */}
                <div className="page-content-col">
                  {/* BEGIN PAGE BASE CONTENT */}
                  <div className="row">
                    <div className="col-md-12">
                      {/* BEGIN PROFILE SIDEBAR */}
                      <div className="profile-sidebar">
                        {/* PORTLET MAIN */}
                        <div className="portlet light profile-sidebar-portlet bordered">
                          {/* SIDEBAR USERPIC */}
                          <div className="profile-userpic">
                            <img src="assets/images/01ae70e.jpg" className="img-responsive" alt /> </div>
                          {/* END SIDEBAR USERPIC */}
                          {/* SIDEBAR USER TITLE */}
                          <div className="profile-usertitle">
                            <div className="profile-usertitle-name">Socialize Agency</div>
                            <div className="profile-usertitle-job"> Health &amp; Human Resource, CA </div>
                            <p>Clinical Biochemical Genetics, Clinical Genetics Professor of Pediatrics, UCLA</p>
                          </div>
                          {/* END SIDEBAR USER TITLE */}
                          {/* SIDEBAR BUTTONS */}
                          <div className="profile-userbuttons">
                            <button type="button" className="btn btn-circle green btn-sm">Follow</button>
                            <button type="button" className="btn btn-circle red btn-sm">Message</button>
                          </div>
                          {/* END SIDEBAR BUTTONS */}
                          <div className="profile-links">
                            <div className="margin-top-20 profile-desc-link">
                              <i className="fa fa-globe" />
                              <a href="http://www.keenthemes.com">www.keenthemes.com</a>
                            </div>
                            <div className="margin-top-20 profile-desc-link">
                              <i className="fa fa-twitter" />
                              <a href="http://www.twitter.com/keenthemes/">@keenthemes</a>
                            </div>
                            <div className="margin-top-20 profile-desc-link">
                              <i className="fa fa-facebook" />
                              <a href="http://www.facebook.com/keenthemes/">keenthemes</a>
                            </div>
                          </div>
                        </div>
                        {/* END PORTLET MAIN */}
                      </div>
                      {/* END BEGIN PROFILE SIDEBAR */}
                      {/* BEGIN PROFILE CONTENT */}
                      <div className="profile-content">
                        <div className="row">
                          <div className="col-md-12">
                            {/* BEGIN PORTLET */}
                            <div className="portlet light bordered">
                              <div className="portlet-title">
                                <div className="caption caption-md">
                                  <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Intro</span>
                                </div>
                              </div>
                              <div className="portlet-body">
                                <img src="assets/images/banner.jpg" width="100%" height="auto" className="margin-bottom-10" />
                                <div className="row number-stats margin-bottom-20">
                                  <p>Socialize is a full-service digital communications agency that bridges the gap between shifting technology and cutting-edge creative to drive business growth for clients. </p>
                                  <p>Our exceptional track record of client retention, award winning campaigns and attention to client needs has earned us a reputation for digital marketing expertise in a diverse range of industries – with an enviable list of clients that range from international brands like Mercedes-Benz, General Mills, Kraft Foods, Clorox, OSN, GEMS Education to regional powerhouses like GEMS Education, Dubai World Trade Centre, Saudi MasterBaker etc. </p>
                                </div>
                              </div>
                              <div className="portlet-title">
                                <div className="caption caption-md">
                                  <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Office Address</span>
                                </div>
                              </div>
                              <div className="portlet-body">
                                <div className="row number-stats margin-bottom-30">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <p>21840 Normandie Ave <br />
                                        Torrance, CA 90502</p>
                                    </div>
                                    <div className="col-md-6">
                                      <p>Phone: (310) 222-5133<br />
                                        Fax: (310) 781-9352</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="portlet-title">
                                <div className="caption caption-md">
                                  <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Vacancy / Jobs</span>
                                </div>
                              </div>
                              <div className="portlet-body">
                                <div className="mt-element-list">
                                  <div className="mt-list-container list-news">
                                    <ul>
                                      <li className="mt-list-item">
                                        <div className="list-datetime bold uppercase font-green"> 8 Nov, 2015 </div>
                                        <div className="list-item-content">
                                          <h3 className="uppercase">
                                            <Link to="job-details">General Physician</Link>
                                          </h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                        </div>
                                      </li>
                                      <li className="mt-list-item">
                                        <div className="list-datetime bold uppercase font-green"> 8 Nov, 2015 </div>
                                        <div className="list-item-content">
                                          <h3 className="uppercase">
                                            <Link to="job-details">Senior Destist</Link>
                                          </h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                        </div>
                                      </li>
                                      <li className="mt-list-item">
                                        <div className="list-datetime bold uppercase font-green"> 8 Nov, 2015 </div>
                                        <div className="list-item-content">
                                          <h3 className="uppercase">
                                            <Link to="job-details">Staff Nurse</Link>
                                          </h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum gravida mauris, a tincidunt dolor porttitor eu. </p>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END PORTLET */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="portlet light portlet-fit bordered">
                              <div className="portlet-title">
                                <div className="caption">
                                  <i className="icon-microphone font-green" />
                                  <span className="caption-subject bold font-green uppercase"> Timeline</span>
                                  <span className="caption-helper">user timeline</span>
                                </div>
                                <div className="actions">
                                  <div className="btn-group btn-group-devided" data-toggle="buttons">
                                    <label className="btn btn-transparent dark btn-outline btn-circle btn-sm active">
                                      <input type="radio" name="options" className="toggle" id="option1" />Actions</label>
                                    <label className="btn btn-transparent dark btn-outline btn-circle btn-sm">
                                      <input type="radio" name="options" className="toggle" id="option2" />Settings</label>
                                  </div>
                                </div>
                              </div>
                              <div className="portlet-body">
                                <div className="timeline">
                                  {/* TIMELINE ITEM */}
                                  <div className="timeline-item">
                                    <div className="timeline-badge">
                                      <img className="timeline-badge-userpic" src="./register/assets/pages/media/users/avatar80_2.jpg" /> </div>
                                    <div className="timeline-body">
                                      <div className="timeline-body-arrow"> </div>
                                      <div className="timeline-body-head">
                                        <div className="timeline-body-head-caption">
                                          <a href="javascript:;" className="timeline-body-title font-blue-madison">Lisa Strong</a>
                                          <span className="timeline-body-time font-grey-cascade">Replied at 17:45 PM</span>
                                        </div>
                                        <div className="timeline-body-head-actions">
                                          <div className="btn-group">
                                            <button className="btn btn-circle green btn-outline btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                              <i className="fa fa-angle-down" />
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                              <li>
                                                <a href="javascript:;">Action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Another action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Something else here </a>
                                              </li>
                                              <li className="divider"> </li>
                                              <li>
                                                <a href="javascript:;">Separated link </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-body-content">
                                        <span className="font-grey-cascade"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut consectetuer adipiscing elit laoreet dolore magna aliquam erat volutpat. Ut
                                          wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* END TIMELINE ITEM */}
                                  {/* TIMELINE ITEM WITH GOOGLE MAP */}
                                  <div className="timeline-item">
                                    <div className="timeline-badge">
                                      <img className="timeline-badge-userpic" src="./register/assets/pages/media/users/avatar80_7.jpg" /> </div>
                                    <div className="timeline-body">
                                      <div className="timeline-body-arrow"> </div>
                                      <div className="timeline-body-head">
                                        <div className="timeline-body-head-caption">
                                          <a href="javascript:;" className="timeline-body-title font-blue-madison">Paul Kiton</a>
                                          <span className="timeline-body-time font-grey-cascade">Added office location at 2:50 PM</span>
                                        </div>
                                        <div className="timeline-body-head-actions">
                                          <div className="btn-group">
                                            <button className="btn btn-circle red btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                              <i className="fa fa-angle-down" />
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                              <li>
                                                <a href="javascript:;">Action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Another action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Something else here </a>
                                              </li>
                                              <li className="divider"> </li>
                                              <li>
                                                <a href="javascript:;">Separated link </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-body-content">
                                        <div id="gmap_polygons" className="gmaps"> </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* END TIMELINE ITEM WITH GOOGLE MAP */}
                                  {/* TIMELINE ITEM */}
                                  <div className="timeline-item">
                                    <div className="timeline-badge">
                                      <div className="timeline-icon">
                                        <i className="icon-user-following font-green-haze" />
                                      </div>
                                    </div>
                                    <div className="timeline-body">
                                      <div className="timeline-body-arrow"> </div>
                                      <div className="timeline-body-head">
                                        <div className="timeline-body-head-caption">
                                          <span className="timeline-body-alerttitle font-red-intense">You have new follower</span>
                                          <span className="timeline-body-time font-grey-cascade">at 11:00 PM</span>
                                        </div>
                                        <div className="timeline-body-head-actions">
                                          <div className="btn-group">
                                            <button className="btn btn-circle green btn-outline btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                              <i className="fa fa-angle-down" />
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                              <li>
                                                <a href="javascript:;">Action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Another action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Something else here </a>
                                              </li>
                                              <li className="divider"> </li>
                                              <li>
                                                <a href="javascript:;">Separated link </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-body-content">
                                        <span className="font-grey-cascade"> You have new follower
                                          <a href="javascript:;">Ivan Rakitic</a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* END TIMELINE ITEM */}
                                  {/* TIMELINE ITEM */}
                                  <div className="timeline-item">
                                    <div className="timeline-badge">
                                      <div className="timeline-icon">
                                        <i className="icon-docs font-red-intense" />
                                      </div>
                                    </div>
                                    <div className="timeline-body">
                                      <div className="timeline-body-arrow"> </div>
                                      <div className="timeline-body-head">
                                        <div className="timeline-body-head-caption">
                                          <span className="timeline-body-alerttitle font-green-haze">Server Report</span>
                                          <span className="timeline-body-time font-grey-cascade">Yesterday at 11:00 PM</span>
                                        </div>
                                        <div className="timeline-body-head-actions">
                                          <div className="btn-group dropup">
                                            <button className="btn btn-circle red btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                              <i className="fa fa-angle-down" />
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                              <li>
                                                <a href="javascript:;">Action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Another action </a>
                                              </li>
                                              <li>
                                                <a href="javascript:;">Something else here </a>
                                              </li>
                                              <li className="divider"> </li>
                                              <li>
                                                <a href="javascript:;">Separated link </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-body-content">
                                        <span className="font-grey-cascade"> Lorem ipsum dolore sit amet
                                          <a href="javascript:;">Ispect</a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* END TIMELINE ITEM */}
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
        )
    }
}

export default CompanyProfile;