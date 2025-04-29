import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer3.css'

const Footer3 = (props) => {
  return (
    <footer
      className={`footer3-footer4 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer3-max-width thq-section-max-width">
        <div className="footer3-content">
          <div className="footer3-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer3-text1">Link 1</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer3-text3">Link 2</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer3-text2">Link 3</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer3-text5">Link 4</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer3-text4">Link 5</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer3-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer3-row">
            <div className="footer3-footer-links">
              <span className="thq-body-small">
                Copyright Katherine Sitton 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer3.defaultProps = {
  link1: undefined,
  link3: undefined,
  link2: undefined,
  link5: undefined,
  link4: undefined,
  rootClassName: '',
}

Footer3.propTypes = {
  link1: PropTypes.element,
  link3: PropTypes.element,
  link2: PropTypes.element,
  link5: PropTypes.element,
  link4: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Footer3
