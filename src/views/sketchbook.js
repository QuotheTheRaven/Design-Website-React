import React from 'react'

import { Helmet } from 'react-helmet'

import './sketchbook.css'

const Sketchbook = (props) => {
  return (
    <div className="sketchbook-container">
      <Helmet>
        <title>Sketchbook - Design Website</title>
        <meta property="og:title" content="Sketchbook - Design Website" />
      </Helmet>
    </div>
  )
}

export default Sketchbook
