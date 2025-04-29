import React from 'react'

import { Helmet } from 'react-helmet'

import './props.css'

const Props = (props) => {
  return (
    <div className="props-container">
      <Helmet>
        <title>Props - Design Website</title>
        <meta property="og:title" content="Props - Design Website" />
      </Helmet>
    </div>
  )
}

export default Props
