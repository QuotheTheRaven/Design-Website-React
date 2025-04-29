import React from 'react'

import { Helmet } from 'react-helmet'

import './resume.css'

const Resume = (props) => {
  return (
    <div className="resume-container">
      <Helmet>
        <title>Resume - Design Website</title>
        <meta property="og:title" content="Resume - Design Website" />
      </Helmet>
    </div>
  )
}

export default Resume
