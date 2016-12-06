import React, {Component} from 'react';
import TabMenu from '../navigation/TabMenu';
import { Link } from 'react-router';
/* eslint-disable */
class JobDetails extends Component {
    render(){
        return(
            <div>
                <div className="wrapper">
        {/* BEGIN HEADER */}
        <TabMenu currentPage="job-details" />
        {/* END HEADER */}
        <div className="container-fluid">
          <div className="page-content">
            {/* BEGIN BREADCRUMBS */}
            <div className="breadcrumbs">
              <h1>Vacancy / Jobs</h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li className="active">General Physician</li>
              </ol>
            </div>
            {/* END BREADCRUMBS */}
            {/* BEGIN SIDEBAR CONTENT LAYOUT */}
            <div className="page-content-container">
              <div className="page-content-row">
                <div className="page-job-details">
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
                            <div className="profile-usertitle-name">General Physician</div>
                            <div className="profile-usertitle-job"> Socialize Agency </div>
                            <p>Dubai Emirate, United Arab Emirates</p>
                          </div>
                          {/* END SIDEBAR USER TITLE */}
                          <div className="job-info">
                            <div className="posted-date"><span className="fa fa-calendar" /> Posted 8 days ago</div>
                            <div className="views"><span className="fa fa-users" /> 101 views</div>
                          </div>
                          <div className="job-actions">
                            <a href="#" className="btn green-meadow"><i className="fa fa-check" /> Apply</a>
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
                                  <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Job description</span>
                                </div>
                              </div>
                              <div className="portlet-body">
                                <div className="row number-stats margin-bottom-20">
                                  <p><b>Job Location:</b> Dubai and Abu Dhabi, UAE</p>
                                  <p><b>Responsibilities</b></p>
                                  <ul><li>Supply quality medical information to the different healthcare professionals in compliance with professional ethics and company image, rules and regulations </li><li>Identify customers and manage sales promotion of assigned products to the target doctors to achieve monthly, quarterly and annual targets </li><li>Conduct regular visits of pharmacies to monitor product availability and movement </li><li>Develop weekly and monthly visit plans in consultation with the line manager and in compliance with internal sales systems and procedures </li><li>Maintain and update product and competition knowledge in order to create a good professional image and build good relationships with trade personnel </li><li>Use sales techniques and operational tools in order to achieve sales and constantly seek to improve selling skills and knowledge </li><li>Update all the required information on doctor cards and list </li><li>Implement ongoing targeting and profiling of customers in order to increase sales </li><li>Communicate regularly with key opinion leaders, get market feedback and report any relevant information to line manager in line with company procedures and best practice. </li><li>Deliver and promote company’s values and competencies </li></ul>
                                  <p><b>Responsibilities</b></p>
                                  <ul><li>Degree in Pharmacy, Medicine or other related course </li><li>1 or 2 years of experience as Medical Representative with a multinational pharmaceuticals company </li><li>Dynamic, result-driven and motivated </li><li>Excellent selling and negotiations skills </li><li>Very good communications and interpersonal skills</li></ul>
                                </div>
                              </div>
                            </div>
                            {/* END PORTLET */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="portlet light bordered">
                              <div className="portlet-title">
                                <div className="caption caption-md">
                                  <span className="caption-subject font-blue-madison bold uppercase font-blue-madison">Similar Jobs</span>
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
                                          <p>Company xyz</p>
                                        </div>
                                      </li>
                                      <li className="mt-list-item">
                                        <div className="list-datetime bold uppercase font-green"> 8 Nov, 2015 </div>
                                        <div className="list-item-content">
                                          <h3 className="uppercase">
                                            <Link to="job-details">Senior Destist</Link>
                                          </h3>
                                          <p>Company xyz</p>
                                        </div>
                                      </li>
                                      <li className="mt-list-item">
                                        <div className="list-datetime bold uppercase font-green"> 8 Nov, 2015 </div>
                                        <div className="list-item-content">
                                          <h3 className="uppercase">
                                            <Link to="job-details">Staff Nurse</Link>
                                          </h3>
                                          <p>Company xyz</p>
                                        </div>
                                      </li>
                                    </ul>
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
        )
    }
}

export default JobDetails;