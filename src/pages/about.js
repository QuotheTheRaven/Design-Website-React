import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Design Website</title>
        <meta property="og:title" content="About - Design Website" />
      </Helmet>
    </div>
  )
}

export default About
