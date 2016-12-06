import React, {Component} from 'react';
import TabMenu from '../navigation/TabMenu';
/* eslint-disable */
class UserProfile extends Component {
    render(){
        return(
            <div>
                {/* BEGIN CONTAINER */}
        <div className="wrapper">
            {/* BEGIN HEADER */}
            <TabMenu currentPage="user-profile" />
            {/* END HEADER */}
            <div className="container-fluid">
                <div className="page-content">
                    {/* BEGIN BREADCRUMBS */}
                    <div className="breadcrumbs">
                        <h1>User Profile</h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">User</a>
                            </li>
                            <li className="active">Profile</li>
                        </ol>
                        {/* Sidebar Toggle Button */}
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".page-sidebar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="toggle-icon">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </span>
                        </button>
                        {/* Sidebar Toggle Button */}
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
                                                <i className="icon-home"></i> Overview </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-note "></i> Reports </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-user"></i> User Activity </a>
                                        </li>
                                        <li>
                                            <a href="page_user_profile_1_account.html">
                                                <i className="icon-settings"></i> Account Settings </a>
                                        </li>
                                        
                                    </ul>
                                    <h3>Quick Actions</h3>
                                    <ul className="nav navbar-nav">
                                        <li>
                                            <a href="#">
                                                <i className="icon-envelope "></i> Inbox
                                                <label className="label label-danger">New</label>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-paper-clip "></i> Task </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-star"></i> Projects </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-pin"></i> Events
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
                                                    <img src="assets/pages/media/profile/profile_user.jpg" className="img-responsive" alt="" /> </div>
                                                {/* END SIDEBAR USERPIC */}
                                                {/* SIDEBAR USER TITLE */}
                                                <div className="profile-usertitle">
                                                    <div className="profile-usertitle-name">Mark Fendrick, MD</div>
                                                    <div className="profile-usertitle-job"> Medical Genetics Torrance, CA </div>
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
                                                        <i className="fa fa-globe"></i>
                                                        <a href="http://www.keenthemes.com">www.keenthemes.com</a>
                                                    </div>
                                                    <div className="margin-top-20 profile-desc-link">
                                                        <i className="fa fa-twitter"></i>
                                                        <a href="http://www.twitter.com/keenthemes/">@keenthemes</a>
                                                    </div>
                                                    <div className="margin-top-20 profile-desc-link">
                                                        <i className="fa fa-facebook"></i>
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
                                                            <div className="row number-stats margin-bottom-30">
                                                                <p><b>Dr. Mark Fendrick is on MediSqured.</b> As a Doximity member you'll join over half a million verified healthcare professionals in a private, secure network.</p>
                                                                <ul>
                                                                    <li>Connect with other colleagues in the same hospital or clinic </li>
                                                                    <li>Search all U.S. specialist profiles and refer a patient </li>
                                                                    <li>Read the latest clinical news and earn CME/CEU credits</li>
                                                                </ul>
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
                                                                <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Education &amp; Training</span>
                                                            </div>
                                                        </div>
                                                        <div className="portlet-body">
                                                            <div className="row number-stats margin-bottom-30">
                                                                <div className="profile-list-div">
                                                                    <h4>University of California San Diego</h4>
                                                                    <p>Residency</p>
                                                                </div>
                                                                <div className="profile-list-div">
                                                                    <h4>University of Washington</h4>
                                                                    <p>Residency</p>
                                                                </div>
                                                                <div className="profile-list-div">
                                                                    <h4>University of California San Diego School of Medicine</h4>
                                                                    <p>Medical School</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="portlet-title">
                                                            <div className="caption caption-md">
                                                                <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Certifications &amp; Licensure</span>
                                                            </div>
                                                        </div>
                                                        <div className="portlet-body">
                                                            <div className="row number-stats margin-bottom-30">
                                                                <div className="profile-list-div">
                                                                    <h4>CA State Medical License</h4>
                                                                    <p>1979 - 2018</p>
                                                                </div>
                                                                <div className="profile-list-div">
                                                                    <h4>American Board of Medical Genetics and Genomics</h4>
                                                                    <p>Clinical Biochemical Genetics</p>
                                                                </div>
                                                                <div className="profile-list-div">
                                                                    <h4>American Board of Medical Genetics and Genomics</h4>
                                                                    <p>Clinical Genetics</p>
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
                                                                <i className="icon-microphone font-green"></i>
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
                                                                        <img className="timeline-badge-userpic" src="assets/pages/media/users/avatar80_2.jpg" /> </div>
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
                                                                                        <i className="fa fa-angle-down"></i>
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
                                                                        <img className="timeline-badge-userpic" src="assets/pages/media/users/avatar80_7.jpg" /> </div>
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
                                                                                        <i className="fa fa-angle-down"></i>
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
                                                                            <i className="icon-user-following font-green-haze"></i>
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
                                                                                        <i className="fa fa-angle-down"></i>
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
                                                                            <i className="icon-docs font-red-intense"></i>
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
                                                                                        <i className="fa fa-angle-down"></i>
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
                <p className="copyright"> 2016 &copy; MediSqured. All Rights Reserved.
                </p>
                <a href="#index" className="go2top">
                    <i className="icon-arrow-up"></i>
                </a>
                {/* END FOOTER */}
            </div>
        </div>
        {/* END CONTAINER */}
        {/* BEGIN QUICK SIDEBAR */}
        <a href="javascript:;" className="page-quick-sidebar-toggler">
            <i className="icon-login"></i>
        </a>
        <div className="page-quick-sidebar-wrapper" data-close-on-body-click="false">
            <div className="page-quick-sidebar">
                <ul className="nav nav-tabs">
                    <li className="active">
                        <a href="javascript:;" data-target="#quick_sidebar_tab_1" data-toggle="tab"> Users
                            <span className="badge badge-danger">2</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" data-target="#quick_sidebar_tab_2" data-toggle="tab"> Alerts
                            <span className="badge badge-success">7</span>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"> More
                            <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu pull-right">
                            <li>
                                <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                    <i className="icon-bell"></i> Alerts </a>
                            </li>
                            <li>
                                <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                    <i className="icon-info"></i> Notifications </a>
                            </li>
                            <li>
                                <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                    <i className="icon-speech"></i> Activities </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="javascript:;" data-target="#quick_sidebar_tab_3" data-toggle="tab">
                                    <i className="icon-settings"></i> Settings </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active page-quick-sidebar-chat" id="quick_sidebar_tab_1">
                        <div className="page-quick-sidebar-chat-users" data-rail-color="#ddd" data-wrapper-className="page-quick-sidebar-list">
                            <h3 className="list-heading">Staff</h3>
                            <ul className="media-list list-items">
                                <li className="media">
                                    <div className="media-status">
                                        <span className="badge badge-success">8</span>
                                    </div>
                                    <img className="media-object" src="assets/layouts/layout/img/avatar3.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Bob Nilson</h4>
                                        <div className="media-heading-sub"> Project Manager </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <img className="media-object" src="assets/layouts/layout/img/avatar1.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Nick Larson</h4>
                                        <div className="media-heading-sub"> Art Director </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="media-status">
                                        <span className="badge badge-danger">3</span>
                                    </div>
                                    <img className="media-object" src="assets/layouts/layout/img/avatar4.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Deon Hubert</h4>
                                        <div className="media-heading-sub"> CTO </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <img className="media-object" src="assets/layouts/layout/img/avatar2.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Ella Wong</h4>
                                        <div className="media-heading-sub"> CEO </div>
                                    </div>
                                </li>
                            </ul>
                            <h3 className="list-heading">Customers</h3>
                            <ul className="media-list list-items">
                                <li className="media">
                                    <div className="media-status">
                                        <span className="badge badge-warning">2</span>
                                    </div>
                                    <img className="media-object" src="assets/layouts/layout/img/avatar6.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Lara Kunis</h4>
                                        <div className="media-heading-sub"> CEO, Loop Inc </div>
                                        <div className="media-heading-small"> Last seen 03:10 AM </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="media-status">
                                        <span className="label label-sm label-success">new</span>
                                    </div>
                                    <img className="media-object" src="assets/layouts/layout/img/avatar7.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Ernie Kyllonen</h4>
                                        <div className="media-heading-sub"> Project Manager,
                                            <br /> SmartBizz PTL </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <img className="media-object" src="assets/layouts/layout/img/avatar8.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Lisa Stone</h4>
                                        <div className="media-heading-sub"> CTO, Keort Inc </div>
                                        <div className="media-heading-small"> Last seen 13:10 PM </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="media-status">
                                        <span className="badge badge-success">7</span>
                                    </div>
                                    <img className="media-object" src="assets/layouts/layout/img/avatar9.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Deon Portalatin</h4>
                                        <div className="media-heading-sub"> CFO, H&D LTD </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <img className="media-object" src="assets/layouts/layout/img/avatar10.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Irina Savikova</h4>
                                        <div className="media-heading-sub"> CEO, Tizda Motors Inc </div>
                                    </div>
                                </li>
                                <li className="media">
                                    <div className="media-status">
                                        <span className="badge badge-danger">4</span>
                                    </div>
                                    <img className="media-object" src="assets/layouts/layout/img/avatar11.jpg" alt="..." />
                                    <div className="media-body">
                                        <h4 className="media-heading">Maria Gomez</h4>
                                        <div className="media-heading-sub"> Manager, Infomatic Inc </div>
                                        <div className="media-heading-small"> Last seen 03:10 AM </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="page-quick-sidebar-item">
                            <div className="page-quick-sidebar-chat-user">
                                <div className="page-quick-sidebar-nav">
                                    <a href="javascript:;" className="page-quick-sidebar-back-to-list">
                                        <i className="icon-arrow-left"></i>Back</a>
                                </div>
                                <div className="page-quick-sidebar-chat-user-messages">
                                    <div className="post out">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                            <span className="datetime">20:15</span>
                                            <span className="body"> When could you send me the report ? </span>
                                        </div>
                                    </div>
                                    <div className="post in">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Ella Wong</a>
                                            <span className="datetime">20:15</span>
                                            <span className="body"> Its almost done. I will be sending it shortly </span>
                                        </div>
                                    </div>
                                    <div className="post out">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                            <span className="datetime">20:15</span>
                                            <span className="body"> Alright. Thanks! :) </span>
                                        </div>
                                    </div>
                                    <div className="post in">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Ella Wong</a>
                                            <span className="datetime">20:16</span>
                                            <span className="body"> You are most welcome. Sorry for the delay. </span>
                                        </div>
                                    </div>
                                    <div className="post out">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                            <span className="datetime">20:17</span>
                                            <span className="body"> No probs. Just take your time :) </span>
                                        </div>
                                    </div>
                                    <div className="post in">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Ella Wong</a>
                                            <span className="datetime">20:40</span>
                                            <span className="body"> Alright. I just emailed it to you. </span>
                                        </div>
                                    </div>
                                    <div className="post out">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                            <span className="datetime">20:17</span>
                                            <span className="body"> Great! Thanks. Will check it right away. </span>
                                        </div>
                                    </div>
                                    <div className="post in">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar2.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Ella Wong</a>
                                            <span className="datetime">20:40</span>
                                            <span className="body"> Please let me know if you have any comment. </span>
                                        </div>
                                    </div>
                                    <div className="post out">
                                        <img className="avatar" alt="" src="assets/layouts/layout/img/avatar3.jpg" />
                                        <div className="message">
                                            <span className="arrow"></span>
                                            <a href="javascript:;" className="name">Bob Nilson</a>
                                            <span className="datetime">20:17</span>
                                            <span className="body"> Sure. I will check and buzz you if anything needs to be corrected. </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-quick-sidebar-chat-user-form">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Type a message here..." />
                                        <div className="input-group-btn">
                                            <button type="button" className="btn green">
                                                <i className="icon-paper-clip"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane page-quick-sidebar-alerts" id="quick_sidebar_tab_2">
                        <div className="page-quick-sidebar-alerts-list">
                            <h3 className="list-heading">General</h3>
                            <ul className="feeds list-items">
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-info">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> You have 4 pending tasks.
                                                    <span className="label label-sm label-warning "> Take action
                                                        <i className="fa fa-share"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> Just now </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="col1">
                                            <div className="cont">
                                                <div className="cont-col1">
                                                    <div className="label label-sm label-success">
                                                        <i className="fa fa-bar-chart-o"></i>
                                                    </div>
                                                </div>
                                                <div className="cont-col2">
                                                    <div className="desc"> Finance Report for year 2013 has been released. </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col2">
                                            <div className="date"> 20 mins </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-danger">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 24 mins </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-info">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> New order received with
                                                    <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 30 mins </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-success">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 24 mins </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-info">
                                                    <i className="fa fa-bell-o"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> Web server hardware needs to be upgraded.
                                                    <span className="label label-sm label-warning"> Overdue </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 2 hours </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="col1">
                                            <div className="cont">
                                                <div className="cont-col1">
                                                    <div className="label label-sm label-default">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                </div>
                                                <div className="cont-col2">
                                                    <div className="desc"> IPO Report for year 2013 has been released. </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col2">
                                            <div className="date"> 20 mins </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <h3 className="list-heading">System</h3>
                            <ul className="feeds list-items">
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-info">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> You have 4 pending tasks.
                                                    <span className="label label-sm label-warning "> Take action
                                                        <i className="fa fa-share"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> Just now </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="col1">
                                            <div className="cont">
                                                <div className="cont-col1">
                                                    <div className="label label-sm label-danger">
                                                        <i className="fa fa-bar-chart-o"></i>
                                                    </div>
                                                </div>
                                                <div className="cont-col2">
                                                    <div className="desc"> Finance Report for year 2013 has been released. </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col2">
                                            <div className="date"> 20 mins </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-default">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 24 mins </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-info">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> New order received with
                                                    <span className="label label-sm label-success"> Reference Number: DR23923 </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 30 mins </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-success">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> You have 5 pending membership that requires a quick review. </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 24 mins </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="col1">
                                        <div className="cont">
                                            <div className="cont-col1">
                                                <div className="label label-sm label-warning">
                                                    <i className="fa fa-bell-o"></i>
                                                </div>
                                            </div>
                                            <div className="cont-col2">
                                                <div className="desc"> Web server hardware needs to be upgraded.
                                                    <span className="label label-sm label-default "> Overdue </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col2">
                                        <div className="date"> 2 hours </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="col1">
                                            <div className="cont">
                                                <div className="cont-col1">
                                                    <div className="label label-sm label-info">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                </div>
                                                <div className="cont-col2">
                                                    <div className="desc"> IPO Report for year 2013 has been released. </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col2">
                                            <div className="date"> 20 mins </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane page-quick-sidebar-settings" id="quick_sidebar_tab_3">
                        <div className="page-quick-sidebar-settings-list">
                            <h3 className="list-heading">General Settings</h3>
                            <ul className="list-items borderless">
                                <li> Enable Notifications
                                    <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                <li> Allow Tracking
                                    <input type="checkbox" className="make-switch" data-size="small" data-on-color="info" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                <li> Log Errors
                                    <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                <li> Auto Sumbit Issues
                                    <input type="checkbox" className="make-switch" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                <li> Enable SMS Alerts
                                    <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="success" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                            </ul>
                            <h3 className="list-heading">System Settings</h3>
                            <ul className="list-items borderless">
                                <li> Security Level
                                    <select className="form-control input-inline input-sm input-small">
                                        <option value="1">Normal</option>
                                        <option value="2" defaultValue='selected'>Medium</option>
                                        <option value="e">High</option>
                                    </select>
                                </li>
                                <li> Failed Email Attempts
                                    <input className="form-control input-inline input-sm input-small" defaultValue="5" /> </li>
                                <li> Secondary SMTP Port
                                    <input className="form-control input-inline input-sm input-small" defaultValue="3560" /> </li>
                                <li> Notify On System Error
                                    <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="danger" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                                <li> Notify On SMTP Error
                                    <input type="checkbox" className="make-switch" defaultValue="checked" data-size="small" data-on-color="warning" data-on-text="ON" data-off-color="default" data-off-text="OFF" /> </li>
                            </ul>
                            <div className="inner-content">
                                <button className="btn btn-success"><i className="icon-settings"></i> Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* END QUICK SIDEBAR */}
            </div>
        )}
}
export default UserProfile;