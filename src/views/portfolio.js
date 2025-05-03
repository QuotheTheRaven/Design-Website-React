import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer3 from '../components/footer3'
import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container10">
      <Helmet>
        <title>Portfolio - Design Website</title>
        <meta property="og:title" content="Portfolio - Design Website" />
      </Helmet>
      <div className="portfolio-content1">
        <header data-thq="thq-navbar" className="portfolio-navbar-interactive">
          <Link to="/" className="portfolio-navlink1">
            <img
              alt="image"
              src="/Img/logo_lazy-200h.png"
              className="portfolio-image"
            />
          </Link>
          <div data-thq="thq-navbar-nav" className="portfolio-desktop-menu">
            <nav className="portfolio-links1">
              <Link to="/about" className="portfolio-navlink2">
                About
              </Link>
              <Link to="/resume" className="portfolio-navlink3">
                Resume
              </Link>
              <Link to="/portfolio" className="portfolio-navlink4">
                Portfolio
              </Link>
              <Link to="/sketchbook" className="portfolio-navlink5 Menu">
                Sketchbook
              </Link>
              <span className="portfolio-text10">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="portfolio-burger-menu">
            <svg viewBox="0 0 1024 1024" className="portfolio-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="portfolio-mobile-menu">
            <div className="portfolio-nav">
              <div className="portfolio-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="portfolio-logo"
                />
                <div data-thq="thq-close-menu" className="portfolio-close-menu">
                  <svg viewBox="0 0 1024 1024" className="portfolio-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="portfolio-links2">
                <span className="portfolio-text11">About</span>
                <span className="portfolio-text12">Features</span>
                <span className="portfolio-text13">Pricing</span>
                <span className="portfolio-text14">Team</span>
                <span className="portfolio-text15">Blog</span>
              </nav>
              <div className="portfolio-buttons">
                <button className="portfolio-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="portfolio-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="portfolio-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="portfolio-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="portfolio-show">
          <span className="portfolio-show-title Page_Heading">Portfolio</span>
        </div>
        <div className="portfolio-selection">
          <button type="button" className="button">
            Props
          </button>
          <div>
            <span className="portfolio-props2 Portfolio_selection1">Props</span>
          </div>
          <div className="portfolio-sm Portfolio_selection1 portfolio_selection">
            <span className="portfolio-stage-management Portfolio_selection1">
              Management
            </span>
          </div>
          <div className="portfolio-scenic">
            <span className="portfolio-scene-design Portfolio_selection1 portfolio_selection">
              Design
            </span>
          </div>
          <div className="portfolio-costumes1">
            <span className="portfolio-costumes2 Portfolio_selection1 portfolio_selection">
              Costumes
            </span>
          </div>
          <div className="portfolio-misc1">
            <span className="portfolio-misc2 Portfolio_selection1 portfolio_selection">
              Misc
            </span>
          </div>
        </div>
        <div className="portfolio-gallery3 thq-section-padding">
          <div className="portfolio-max-width thq-section-max-width">
            <div className="portfolio-content2">
              <div className="portfolio-container11 portfolio_props">
                <div className="portfolio-container12">
                  <span className="portfolio-text16">Props</span>
                  <span className="portfolio-text17">Secret in the Wings</span>
                </div>
              </div>
              <div className="portfolio-container13 portfolio_props">
                <div className="portfolio-container14">
                  <span className="portfolio-text18">Stage Management</span>
                  <span className="portfolio-text19">Describe the Night</span>
                </div>
              </div>
              <div className="portfolio-container15">
                <div className="portfolio-container16">
                  <span className="portfolio-text20">Props</span>
                  <span className="portfolio-text21">Othello</span>
                </div>
              </div>
              <div className="portfolio-container17">
                <div className="portfolio-container18">
                  <span className="portfolio-text22">Stage Management</span>
                  <span className="portfolio-text23">Sweeny Todd</span>
                </div>
              </div>
              <div className="portfolio-container19">
                <div className="portfolio-container20">
                  <span className="portfolio-text24">Stage Management</span>
                  <span className="portfolio-text25">The Tempest</span>
                  <span className="portfolio-text26">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container21">
                <div className="portfolio-container22">
                  <span className="portfolio-text27">Drafting</span>
                  <span className="portfolio-text28">Barefoot in the Park</span>
                  <span className="portfolio-text29">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container23">
                <div className="portfolio-container24">
                  <span className="portfolio-text30">Drafting</span>
                  <span className="portfolio-text31">Cuckoo Clock</span>
                  <span className="portfolio-text32">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container25">
                <div className="portfolio-container26">
                  <span className="portfolio-text33">Scenic Design</span>
                  <span className="portfolio-text34">
                    You Can&apos;t Take it With You
                  </span>
                  <span className="portfolio-text35">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container27">
                <div className="portfolio-container28">
                  <span className="portfolio-text36">Props</span>
                  <span className="portfolio-text37">Hairspray</span>
                </div>
              </div>
              <div className="portfolio-container29">
                <div className="portfolio-container30">
                  <span className="portfolio-text38">Props </span>
                  <span className="portfolio-text39">
                    Mother Courage and Her Children
                  </span>
                </div>
              </div>
              <div className="portfolio-container31">
                <div className="portfolio-container32">
                  <span className="portfolio-text40">Costuming</span>
                  <span className="portfolio-text41">Ren Faire Cloak</span>
                </div>
              </div>
              <div className="portfolio-container33">
                <div className="portfolio-container34">
                  <span className="portfolio-text42">Costuming</span>
                  <span className="portfolio-text43">Messenger Bag</span>
                  <span className="portfolio-text44">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container35">
                <div className="portfolio-container36">
                  <span className="portfolio-text45">Scenic Design</span>
                  <span className="portfolio-text46">Kindertransport</span>
                  <span className="portfolio-text47">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container37">
                <div className="portfolio-container38">
                  <span className="portfolio-text48">Props</span>
                  <span className="portfolio-text49">Dragons Eye</span>
                  <span className="portfolio-text50">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container39">
                <div className="portfolio-container40">
                  <span className="portfolio-text51">Props</span>
                  <span className="portfolio-text52">Space Gun</span>
                  <span className="portfolio-text53">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container41">
                <div className="portfolio-container42">
                  <span className="portfolio-text54">Props</span>
                  <span className="portfolio-text55">Foam Hand</span>
                  <span className="portfolio-text56">Class Project</span>
                </div>
              </div>
              <div className="portfolio-container43">
                <div className="portfolio-container44">
                  <span className="portfolio-text57">Stage Management</span>
                  <span className="portfolio-text58">
                    Mother Courage and Her Children
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer3
          text={
            <Fragment>
              <span className="portfolio-text59">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="portfolio-text60">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="portfolio-text61">Resume</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="portfolio-text62">Portfolio</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="portfolio-text63">Sketchbook</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="portfolio-text64">Contact</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="portfolio-text65">About</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="portfolio-text66">Features</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="portfolio-text67">Pricing</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="portfolio-text68">Team</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="portfolio-text69">Blog</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="portfolio-text70">Register</span>
            </Fragment>
          }
          rootClassName="footer3root-class-name3"
        ></Footer3>
      </div>
    </div>
  )
}

export default Portfolio
