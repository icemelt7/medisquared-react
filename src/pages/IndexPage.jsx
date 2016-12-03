import React, {Component} from 'react';
class IndexPage extends Component {
  render() {
    return (

      <div id="main-wrapper"> 
        {/* Top Toolbar */}
        <div className="toolbar">
          <div className="uou-block-1a blog">
            <div className="container">
              <div className="search"> <a href="#" className="toggle fa fa-search" />
                <form action="#">
                  <input type="text" className="search-input" placeholder="Search ..." />
                  <input type="submit" defaultValue="" />
                </form>
              </div>
              {/* ul class="social">
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-twitter"></a></li>
          <li><a href="#" class="fa fa-google-plus"></a></li>
        </ul */}
              {/* ul class="authentication">
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul */}
              <div className="language"> <a href="#" className="toggle"><img src="images/flags/32/US.png" alt /> ENG</a>
                <ul>
                  <li><a href="#"><img src="images/flags/32/PT.png" alt /> ENG</a></li>
                  <li><a href="#"><img src="images/flags/32/FR.png" alt /> FR</a></li>
                  <li><a href="#"><img src="images/flags/32/ES.png" alt /> ES</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* end .uou-block-1a */} 
        </div>
        {/* end toolbar */}
        <div className="box-shadow-for-ui">
          <div className="uou-block-2b">
            <div className="container"> <a href="#" className="logo"><img src="images/Logo.png" alt /></a> 
              {/* a href="#" class="mobile-sidebar-button mobile-sidebar-toggle"><span></span></a */}
              <nav className="nav">
                <ul className="sf-menu">
                  {/* li><a href="blog.html">Latest Articles</a></li */}
                </ul>
              </nav>
            </div>
          </div>
          {/* end .uou-block-2b */} 
        </div>
        {/* HOME PRO*/}
        <div className="home-pro"> 
          {/* PRO BANNER HEAD */}
          <div className="banr-head">
            <div className="container">
              <div className="row"> 
                {/* CONTENT */}
                <div className="col-sm-7">
                  <div className="text-area">
                    <div className="position-center-center col-md-10">
                      <h1>MediSquared increases connectivity, collaboration and career development.</h1>
                      <h1>Exclusive platform for verified healthcare professionals, and healthcare providers globally.</h1>
                      <h6>We look forward to welcoming you to our community.</h6>
                    </div>
                  </div>
                </div>
                {/* FORM SECTION */}
                <div className="col-sm-5">
                  <div className="login-sec"> 
                    {/* TABS */}
                    <div className="uou-tabs accordion-xs">
                      <ul className="tabs">
                        <li className="active"><a href="#register">Register Now</a></li>
                        <li><a href="#log-in">Login</a></li>
                      </ul>
                      {/* REGISTER */}
                      <div className="content">
                        <div id="register" className="active">
                          <form>
                            <p><a href="./register.html" className="btn btn-large btn-success">Join Now!</a></p>
                            {/* <input type="text" name="fullname" placeholder="Full Name" required>
                      <input type="email" name="email" placeholder="Email Address" required>
                      <input type="text" name="title" placeholder="Job Title" required>
                      <input type="text" name="company" placeholder="Company / Organization" required>
                      <button type="submit">Sign Up</button> */}
                            <div className="login-with"> <span>Please note, we employ a two stage verification process, and only verifiable medical professionals are offered membership to MediSquared.</span> </div>
                          </form>
                        </div>
                        {/* LOGIN */}
                        <div id="log-in">
                          <form>
                            {/* <input type="email" placeholder="Email Address">
                      <input type="password" placeholder="Password">
                      <button type="submit">Login</button>
                      <div class="login-with"> <span>Or login with:</span> <a href="#."><i class="fa fa-facebook"></i></a> <a href="#."><i class="fa fa-google"></i></a> <a href="#."><i class="fa fa-linkedin"></i></a> </div>
                      <div class="forget">Forgot your password? <a href="#.">Click Here</a></div> */}
                            <p><a href="./user-login.html" className="btn btn-large btn-success">Login</a></p>
                          </form>
                        </div>
                        <div id="forget">
                          <form>
                            <input type="email" placeholder="Email Address" />
                            <button type="submit">Login</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SERVICES */}
          <section className="services"> 
            {/* SERVICES ROW */}
            <ul className="row">
              {/* SECTION */}
              <li className="col-md-4">
                <div className="ser-inn">
                  <i className="fa fa-globe" />
                  <h4>Stay in touch with your
                    colleagues</h4>
                  <i className="fa fa-globe big" />
                  <p>Connect with colleagues and peers locally, regionally and internationally. Directly and securely.</p>
                </div>
              </li>
              {/* SECTION */}
              <li className="col-md-4">
                <div className="ser-inn">
                  <i className="fa fa-book" />
                  <h4>Get the latest news
                    in your industry</h4>
                  <i className="fa fa-book big" />
                  <p>Search, review and contribute to specific and specialised papers, as well as publish new papers utilising innovative peer review methodology.
                    Gain CME credits from programmes contributed by leading global healthcare academia.
                  </p>
                </div>
              </li>
              {/* SECTION  */}
              <li className="col-md-4">
                <div className="ser-inn">
                  <i className="fa fa-arrow-right" />
                  <h4>Further Your Career</h4>
                  <i className="fa fa-arrow-right big" />
                  <p>Engage with organisations and employers globally. Learn more about employment opportunities and care providers, and apply directly with no middle men.</p>
                </div>
              </li>
            </ul>
          </section>
          {/* sponsors */}
          <div className="sponsors" style={{background: 'url(images/sponser-bg.jpg) no-repeat'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">Founder Members &amp; Partners</h3>
                  {/*div class="sponsors-slider">
              <div class="item"><img src="images/sponsor_logo1.png" alt="" class="img-responsive"></div>
              <div class="item"><img src="images/sponsor_logo2.png" alt="" class="img-responsive"></div>
              <div class="item"><img src="images/sponsor_logo3.png" alt="" class="img-responsive"></div>
              <div class="item"><img src="images/sponsor_logo4.png" alt="" class="img-responsive"></div>
              <div class="item"><img src="images/sponsor_logo5.png" alt="" class="img-responsive"></div>
              <div class="item"><img src="images/sponsor_logo6.png" alt="" class="img-responsive"></div>
              <div class="item"><img src="images/sponsor_logo4.png" alt="" class="img-responsive"></div>
            </div */}
                </div>
              </div>
            </div>
          </div>
          {/* section>
          <div class="blog-content pt60">
              <div class="container">
                  <div class="row">
                      <div class="col-md-9">
                          <h1>Library & News</h1>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-9">
                          <article class="uou-block-7f"> <img src="img/blog-image-1.jpg" alt="" class="thumb">

                              <h1><a href="#">Perspiciatis Sint Pariatur Velit Corrupti</a></h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.</p>
                              <a href="#" class="btn btn-small btn-primary">Read More</a> </article>
                          

                          <article class="uou-block-7f"> <img src="img/blog-image-1.jpg" alt="" class="thumb">

                              <h1><a href="#">Perspiciatis Sint Pariatur Velit Corrupti</a></h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.</p>
                              <a href="#" class="btn btn-small btn-primary">Read More</a> </article>
                          

                          <article class="uou-block-7f"> <img src="img/blog-image-1.jpg" alt="" class="thumb">

                              <h1><a href="#">Perspiciatis Sint Pariatur Velit Corrupti</a></h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.</p>
                              <a href="#" class="btn btn-small btn-primary">Read More</a> </article>
                          

                      </div>

                  </div>
                  

              </div>
              

          </div>
      </section */}
          {/* PRO SECTION */}
          <section className="pro-content">
            <div className="container-fluid">
              <div className="row"> 
                {/* PRO IMAGE */}
                <div className="col-md-6 pro-inside" style={{background: 'url(images/pro-img-1.jpg) center center no-repeat'}} />
                {/* PRO CONTENT */}
                <div className="col-md-6 pro-inside">
                  <div className="position-center-center col-md-10">
                    <h1>Connectivity, Collaboration &amp; Innovation</h1>
                    <p>Our global community focuses on providing the platform for improved knowledge transfer internationally. Our users are able to review, publish and contribute to thought leadership across the healthcare industry, as well as leverage off of a much wider pool of available specialists to learn from and develop. Our users can also develop CME credits via leading global academic partners. All for free.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* PRO SECTION */}
            <div className="container-fluid">
              <div className="row"> 
                {/* PRO TEXT */}
                <div className="col-md-6 pro-inside">
                  <div className="position-center-center col-md-10">
                    <h1>Unique Careers Platform</h1>
                    <p> Connect with healthcare providers locally, regionally and internationally with the ability to not only apply to relevant career opportunities directly, yet also register interest in the event a suitable role may arise, or an opportunity can be created.</p>
                    <p>With no recruiters or search firms, MediSquared enables greater connectivity directly with potential employers and leading providers. Leverage your wider network and develop your profile to gain more understanding of the provider from current employees, as well as highlight your core skills and expertise. </p>
                  </div>
                </div>
                {/* PRO BACKGROUND */}
                <div className="col-md-6 pro-inside" style={{background: 'url(images/pro-img-2.jpg) center center no-repeat'}} />
              </div>
            </div>
          </section>
          {/* APP IMAGE */}
          {/* section class="app-images">
      <div class="container">
        <div class="row"> 
          
          
          <div class="col-md-6 text-center text-area">
            <h1>Healthcare professional recruitment on your finger tips</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto 
              beatae vitae dicta sunt explicabo. </p>
            <a href="#."><i class="fa fa-apple"></i> App Store</a> </div>
          
          
          <div class="col-md-6 text-right"><img src="images/app-img.png" alt="" > </div>
        </div>
      </div>
    </section */}
        </div>
      </div>
    );
  }
};

export default IndexPage;