import React from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-title thq-heading-2">{props.heading1}</h2>
          <h3 className="banner1-text thq-heading-3">{props.content1}</h3>
        </div>
        <button type="button" className="banner1-button thq-button-filled">
          {props.action1}
        </button>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  action1: 'Stage Manager/Props Supervisor',
  heading1: 'Katherine Sitton',
  rootClassName: '',
  content1: 'Theatre Design and Technology',
}

Banner1.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner1
