import React, {Component} from 'react';
/* eslint-disable */
class CompanyRegister extends Component {
    componentDidMount(){
        $script(["assets/global/plugins/select2/js/select2.full.min.js", 
                "assets/global/plugins/jquery-validation/js/jquery.validate.min.js" ,
                "assets/global/plugins/jquery-validation/js/additional-methods.min.js", 
                "assets/global/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js", 
                "assets/global/plugins/jquery-repeater/jquery.repeater.js" ,
                "assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"], 'external-scripts');
        
        $script.ready('external-scripts', function() {
            $script(["assets/pages/scripts/form-wizard.js"]);
        })
        
    }
    render(){
        
    return (

      <div className="wrapper">
        {/* BEGIN HEADER */}
        <header className="page-header">
          <nav className="navbar mega-menu" role="navigation">
            <div className="container-fluid">
              <div className="clearfix navbar-fixed-top">
                {/* BEGIN LOGO */}
                <a id="index" className="page-logo" href="index.html">
                
                  <img src="assets/images/logo.png" width="120" alt="Logo" /> </a>
                {/* END LOGO */}
                {/* BEGIN SEARCH */}
                <form className="search" action="extra_search.html" method="GET">
                  <input type="name" className="form-control" name="query" placeholder="Search..." />
                  <a href="javascript:;" className="btn submit md-skip">
                    <i className="fa fa-search" />
                  </a>
                </form>
                {/* END SEARCH */}
              </div>
            </div>
            {/*/container*/}
          </nav>
        </header>
        {/* END HEADER */}
        <div className="container-fluid">
          <div className="page-content">
            {/* BEGIN BREADCRUMBS */}
            <div className="breadcrumbs">
              <h1>Registration Form Wizard</h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Registration</a>
                </li>
                <li className="active">Human Resource</li>
              </ol>
            </div>
            {/* END BREADCRUMBS */}
            <div className="portlet light bordered" id="form_wizard_1">
              <div className="portlet-title">
                <div className="caption">
                  <i className=" icon-layers font-red" />
                  <span className="caption-subject font-red bold uppercase"> Form Wizard -
                    <span className="step-title"> Step 1 of 4 </span>
                  </span>
                </div>
                {/*<div className="actions">
                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                    <i className="icon-cloud-upload" />
                  </a>
                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                    <i className="icon-wrench" />
                  </a>
                  <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                    <i className="icon-trash" />
                  </a>
                </div>*/}
              </div>
              <div className="portlet-body form">
                <form className="mt-repeater form-horizontal" action="#" id="submit_form" method="POST">
                  <div className="form-wizard">
                    <div className="form-body">
                      <ul className="nav nav-pills nav-justified steps">
                        <li className="active">
                          <a href="#tab1" data-toggle="tab" className="step" aria-expanded="true">
                            <span className="number"> 1 </span>
                            <span className="desc">
                              <i className="fa fa-check" /> Account Setup </span>
                          </a>
                        </li>
                        <li>
                          <a href="#tab2" data-toggle="tab" className="step">
                            <span className="number"> 2 </span>
                            <span className="desc">
                              <i className="fa fa-check" /> Profile Setup </span>
                          </a>
                        </li>
                        <li>
                          <a href="#tab3" data-toggle="tab" className="step active">
                            <span className="number"> 3 </span>
                            <span className="desc">
                              <i className="fa fa-check" /> Billing Setup </span>
                          </a>
                        </li>
                        <li>
                          <a href="#tab4" data-toggle="tab" className="step">
                            <span className="number"> 4 </span>
                            <span className="desc">
                              <i className="fa fa-check" /> Confirm </span>
                          </a>
                        </li>
                      </ul>
                      <div id="bar" className="progress progress-striped" role="progressbar">
                        <div className="progress-bar progress-bar-success" style={{width: '25%'}}> </div>
                      </div>
                      <div className="tab-content">
                        <div className="alert alert-danger display-none">
                          <button className="close" data-dismiss="alert" /> You have some form errors. Please check below. </div>
                        <div className="alert alert-success display-none">
                          <button className="close" data-dismiss="alert" /> Your form validation is successful! </div>
                        <div className="tab-pane active" id="tab1">
                          <h3 className="block">Login details</h3>
                          <div className="form-group">
                            <label className="control-label col-md-3">Username
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="username" />
                              <span className="help-block"> Provide your username </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Password
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="password" className="form-control" name="password" id="submit_form_password" />
                              <span className="help-block"> Provide your password. </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Confirm Password
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="password" className="form-control" name="rpassword" />
                              <span className="help-block"> Confirm your password </span>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab2">
                          <h3 className="block">Company details</h3>
                          <div className="form-group">
                            <label className="control-label col-md-3">Company
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="cname" />
                              <span className="help-block"> Provide company name </span>
                            </div>
                          </div>
                          <h3 className="block">Contact details</h3>
                          <div className="form-group">
                            <label className="control-label col-md-3">Email
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="email" />
                              <span className="help-block"> Provide company email address </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Phone Number
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="phone" />
                              <span className="help-block"> Provide company phone number </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Address
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="address" />
                              <span className="help-block"> Provide street address </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">City/Town
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="city" />
                              <span className="help-block"> Provide city or town </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Country</label>
                            <div className="col-md-4">
                              <select name="country" id="country_list" className="form-control select2-hidden-accessible" tabIndex={-1} aria-hidden="true">
                                <option value />
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia and Herzegowina</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">British Indian Ocean Territory</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">Cocos (Keeling) Islands</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, the Democratic Republic of the</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Cote d'Ivoire</option>
                                <option value="HR">Croatia (Hrvatska)</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Malvinas)</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">French Southern Territories</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">Heard and Mc Donald Islands</option>
                                <option value="VA">Holy See (Vatican City State)</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran (Islamic Republic of)</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">Korea, Democratic People's Republic of</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Lao People's Democratic Republic</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libyan Arab Jamahiriya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia, Federated States of</option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint LUCIA</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia (Slovak Republic)</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SH">St. Helena</option>
                                <option value="PM">St. Pierre and Miquelon</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard and Jan Mayen Islands</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan, Province of China</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania, United Republic of</option>
                                <option value="TH">Thailand</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">Virgin Islands (British)</option>
                                <option value="VI">Virgin Islands (U.S.)</option>
                                <option value="WF">Wallis and Futuna Islands</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Remarks</label>
                            <div className="col-md-4">
                              <textarea className="form-control" rows={3} name="remarks" defaultValue={""} />
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab3">
                          <h3 className="block">Provide your billing and credit card details</h3>
                          <div className="form-group">
                            <label className="control-label col-md-3">Card Holder Name
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="card_name" />
                              <span className="help-block"> </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Card Number
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" className="form-control" name="card_number" />
                              <span className="help-block"> </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">CVC
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" placeholder className="form-control" name="card_cvc" />
                              <span className="help-block"> </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Expiration(MM/YYYY)
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <input type="text" placeholder="MM/YYYY" maxLength={7} className="form-control" name="card_expiry_date" />
                              <span className="help-block"> e.g 11/2020 </span>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Payment Options
                              <span className="required" aria-required="true"> * </span>
                            </label>
                            <div className="col-md-4">
                              <div className="checkbox-list">
                                <label>
                                  <input type="checkbox" name="payment[]" defaultValue={1} data-title="Auto-Pay with this Credit Card." /> Auto-Pay with this Credit Card </label>
                                <label>
                                  <input type="checkbox" name="payment[]" defaultValue={2} data-title="Email me monthly billing." /> Email me monthly billing </label>
                              </div>
                              <div id="form_payment_error"> </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="tab4">
                          <h3 className="block">Confirm your account</h3>
                          <h4 className="form-section">Account</h4>
                          <div className="form-group">
                            <label className="control-label col-md-3">Username:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="username"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Email:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="email"> </p>
                            </div>
                          </div>
                          <h4 className="form-section">Profile</h4>
                          <div className="form-group">
                            <label className="control-label col-md-3">Fullname:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="fullname"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Gender:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="gender"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Phone:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="phone"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Address:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="address"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">City/Town:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="city"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Country:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="country"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Remarks:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="remarks"> </p>
                            </div>
                          </div>
                          <h4 className="form-section">Billing</h4>
                          <div className="form-group">
                            <label className="control-label col-md-3">Card Holder Name:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="card_name"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Card Number:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="card_number"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">CVC:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="card_cvc"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Expiration:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="card_expiry_date"> </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label col-md-3">Payment Options:</label>
                            <div className="col-md-4">
                              <p className="form-control-static" data-display="payment[]"> </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-actions">
                      <div className="row">
                        <div className="col-md-offset-3 col-md-9">
                          <a href="javascript:;" className="btn default button-previous disabled" style={{display: 'none'}}>
                            <i className="fa fa-angle-left" /> Back </a>
                          <a href="javascript:;" className="btn btn-outline green button-next"> Continue
                            <i className="fa fa-angle-right" />
                          </a>
                          <a href="javascript:;" className="btn green button-submit" style={{display: 'none'}}> Submit
                            <i className="fa fa-check" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* BEGIN FOOTER */}
          <p className="copyright"> 2016 © MediSquared. All Rights Reserved.</p>
          <a href="#index" className="go2top">
            <i className="icon-arrow-up" />
          </a>
          {/* END FOOTER */}
        </div>
      </div>
    );
  }
};

export default CompanyRegister;