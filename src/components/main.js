import React from 'react'

import PropTypes from 'prop-types'

import './main.css'

const Main = (props) => {
  return <div className={`main-container ${props.rootClassName} `}></div>
}

Main.defaultProps = {
  rootClassName: '',
}

Main.propTypes = {
  rootClassName: PropTypes.string,
}

export default Main
