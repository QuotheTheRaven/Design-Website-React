import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Design Website</title>
        <meta property="og:title" content="Design Website" />
      </Helmet>
      <div className="home-content">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="image"
            src="/Img/logo_lazy-200h.png"
            className="home-image1"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links1">
              <span className="home-text10">About</span>
              <span className="home-text11">Resume</span>
              <span className="home-text12">Portfolio</span>
              <span className="home-text13 Menu">Sketchbook</span>
              <span className="home-text14">Contact</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links2">
                <span className="home-text15">About</span>
                <span className="home-text16">Features</span>
                <span className="home-text17">Pricing</span>
                <span className="home-text18">Team</span>
                <span className="home-text19">Blog</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-show1">
          <span className="home-show-title1">Secret in The Wings</span>
          <div className="home-buttons2">
            <button type="button" className="home-button1 button">
              View Design
            </button>
            <button type="button" className="home-button2 button">
              Portfolio
            </button>
          </div>
        </div>
        <div className="home-quick-page">
          <div className="home-props card_selection">
            <span className="home-text20">Props</span>
          </div>
          <div className="card_selection">
            <span className="home-text21">Stage Management</span>
          </div>
          <div className="home-model-craft card_selection">
            <span className="home-text22">Model Making</span>
          </div>
        </div>
        <div className="home-bio1">
          <img
            alt="image"
            src="/Img/img20250302094112%20(1)-400h.jpg"
            className="home-image2"
          />
          <div className="home-text23">
            <h1 className="home-text24 Heading">Katherine Sitton</h1>
            <p className="home-bio2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ut ligula ornare, posuere dolor bibendum, aliquet dui. Proin vel
              suscipit arcu. Aenean in mauris id elit tristique faucibus. Mauris
              at eros sem. Aenean gravida, nisi ut finibus maximus, sapien leo
              pharetra ligula, quis fermentum urna eros id lacus. Integer
              blandit erat eget ex lacinia tincidunt. Curabitur vel aliquam
              tortor. Nunc accumsan nisi non lorem imperdiet cursus. Duis
              laoreet dolor metus, quis facilisis lacus accumsan id. Quisque nec
              urna augue. Nullam vestibulum mi eu bibendum dictum. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className="home-show2">
          <span className="home-show-title2">Describe The Night</span>
          <div className="home-buttons3">
            <button type="button" className="home-button3 button">
              View Work
            </button>
            <button type="button" className="home-button4 button">
              Portfolio
            </button>
          </div>
        </div>
        <Footer3
          link1={
            <Fragment>
              <span className="home-text25">Link 1</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text26">Link 2</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text27">Link 3</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text28">Link 4</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text29">Link 5</span>
            </Fragment>
          }
          rootClassName="footer3root-class-name"
        ></Footer3>
      </div>
    </div>
  )
}

export default Home
