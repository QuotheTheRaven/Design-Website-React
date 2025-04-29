import React from 'react'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Design Website</title>
        <meta property="og:title" content="Portfolio - Design Website" />
      </Helmet>
    </div>
  )
}

export default Portfolio
