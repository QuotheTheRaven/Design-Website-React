import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Gallery7 from '../components/gallery7'
import Footer3 from '../components/footer3'
import './sketchbook.css'

const Sketchbook = (props) => {
  return (
    <div className="sketchbook-container">
      <Helmet>
        <title>Sketchbook - Design Website</title>
        <meta property="og:title" content="Sketchbook - Design Website" />
      </Helmet>
      <div className="sketchbook-content">
        <header data-thq="thq-navbar" className="sketchbook-navbar-interactive">
          <Link to="/" className="sketchbook-navlink1">
            <img
              alt="image"
              src="/Img/logo_lazy-200h.png"
              className="sketchbook-image"
            />
          </Link>
          <div data-thq="thq-navbar-nav" className="sketchbook-desktop-menu">
            <nav className="sketchbook-links1">
              <Link to="/about" className="sketchbook-navlink2">
                About
              </Link>
              <Link to="/resume" className="sketchbook-navlink3">
                Resume
              </Link>
              <Link to="/portfolio" className="sketchbook-navlink4">
                Portfolio
              </Link>
              <Link to="/sketchbook" className="sketchbook-navlink5 Menu">
                Sketchbook
              </Link>
              <span className="sketchbook-text10">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="sketchbook-burger-menu">
            <svg viewBox="0 0 1024 1024" className="sketchbook-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="sketchbook-mobile-menu">
            <div className="sketchbook-nav">
              <div className="sketchbook-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="sketchbook-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="sketchbook-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="sketchbook-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="sketchbook-links2">
                <span className="sketchbook-text11">About</span>
                <span className="sketchbook-text12">Features</span>
                <span className="sketchbook-text13">Pricing</span>
                <span className="sketchbook-text14">Team</span>
                <span className="sketchbook-text15">Blog</span>
              </nav>
              <div className="sketchbook-buttons">
                <button className="sketchbook-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sketchbook-icon14"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="sketchbook-icon16"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="sketchbook-icon18"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="sketchbook-show">
          <span className="sketchbook-show-title Page_Heading">Sketchbook</span>
        </div>
        <Gallery7
          content1={
            <Fragment>
              <span className="sketchbook-text16">
                Here is a selection of my collected drawings and sketches. These
                are from various projects and classes, as well as just for fun.
              </span>
            </Fragment>
          }
        ></Gallery7>
        <Footer3
          text={
            <Fragment>
              <span className="sketchbook-text17">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="sketchbook-text18">Login</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="sketchbook-text19">Resume</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="sketchbook-text20">Portfolio</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="sketchbook-text21">Sketchbook</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="sketchbook-text22">Contact</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="sketchbook-text23">About</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="sketchbook-text24">Features</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="sketchbook-text25">Pricing</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="sketchbook-text26">Team</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="sketchbook-text27">Blog</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="sketchbook-text28">Register</span>
            </Fragment>
          }
          rootClassName="footer3root-class-name1"
        ></Footer3>
      </div>
    </div>
  )
}

export default Sketchbook
