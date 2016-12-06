import React, {Component} from 'react';
import { Link } from 'react-router';
/* eslint-disable */
class TabMenu extends Component {
    render(){
        return (
            <header className="page-header">
                <nav className="navbar mega-menu" role="navigation">
                    <div className="container-fluid">
                        <div className="clearfix navbar-fixed-top">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="toggle-icon">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </span>
                            </button>
                            {/* End Toggle Button */}
                            {/* BEGIN LOGO */}
                            <a id="index" className="page-logo" href="index.html">
                                <img src="assets/images/logo.png" width="120" alt="Logo" /> </a>
                            {/* END LOGO */}
                            {/* BEGIN SEARCH */}
                            <form className="search" action="extra_search.html" method="GET">
                                <input type="name" className="form-control" name="query" placeholder="Search..." />
                                <a href="javascript:;" className="btn submit md-skip">
                                    <i className="fa fa-search"></i>
                                </a>
                            </form>
                            {/* END SEARCH */}
                            
                        </div>
                        {/* BEGIN HEADER MENU */}
                        <div className="nav-collapse collapse navbar-collapse navbar-responsive-collapse">
                            <ul className="nav navbar-nav">
                                <li className="dropdown dropdown-fw dropdown-fw-disabled  ">
                                    <a href="index.html" className="text-uppercase">
                                        <i className="icon-home"></i> Home </a>
                                </li>
                                <li className={this.props.currentPage == "user-profile" ? "open" : ""}>
                                    <Link to="user-profile" className="text-uppercase">
                                        <i className="icon-user"></i> Profile 
                                    </Link>
                                </li>
                                <li className={this.props.currentPage == "user-library" ? "open" : ""}>
                                    <Link to="user-library" className="text-uppercase">
                                        <i className="icon-puzzle"></i> Library </Link>
                                </li>
                                <li className={this.props.currentPage == "job-details" ? "open" : ""}>
                                    <Link to="job-details" className="text-uppercase">
                                        <i className="icon-briefcase"></i> Jobs </Link>
                                </li>
                                {/*<li className="dropdown dropdown-fw dropdown-fw-disabled  active open selected">
                                    <a href="javascript:;" className="text-uppercase">
                                        <i className="icon-layers"></i> Pages </a>
                                    <ul className="dropdown-menu dropdown-menu-fw">
                                        
                                        <li className="dropdown more-dropdown-sub">
                                            <a href="javascript:;">
                                                <i className="icon-docs"></i> Submenu 1 </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-clock"></i> Submenu level 2 </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icon-clock"></i> Submenu level 2 </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown more-dropdown-sub active">
                                            <a href="javascript:;">
                                                <i className="icon-user"></i> User </a>
                                            <ul className="dropdown-menu">
                                                <li className="active">
                                                    <a href="#"> User Profile </a>
                                                </li>
                                                <li className="active">
                                                    <a href="#"> Account Settings </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown more-dropdown-sub">
                                            <a href="javascript:;">
                                                <i className="icon-social-dribbble"></i> General </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="page_general_about.html"> About </a>
                                                </li>
                                                <li>
                                                    <a href="page_general_contact.html"> Contact </a>
                                                </li>
                                                
                                                <li>
                                                    <a href="page_general_pricing.html"> Pricing </a>
                                                </li>
                                                <li>
                                                    <a href="page_general_faq.html"> FAQ </a>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                    
                                    </ul>
                                </li>
                                <li className="dropdown more-dropdown">
                                    <a href="javascript:;" className="text-uppercase"> More </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Link 3</a>
                                        </li>
                                        
                                    </ul>
                                </li>*/}
                            </ul>
                        </div>
                        {/* END HEADER MENU */}
                    </div>
                    {/*/container*/}
                </nav>
            </header>
        );
    }
}

export default TabMenu;