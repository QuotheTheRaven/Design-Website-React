import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery14.css'

const Gallery14 = (props) => {
  return (
    <div
      className={`gallery14-gallery3 thq-section-padding ${props.rootClassName} `}
    >
      <div className="gallery14-max-width thq-section-max-width">
        <div className="gallery14-content">
          <div className="gallery14-container10">
            <div className="gallery14-container11">
              <span className="gallery14-text10">
                {props.text1 ?? (
                  <Fragment>
                    <span className="gallery14-text34">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text11">
                {props.text11 ?? (
                  <Fragment>
                    <span className="gallery14-text24">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="gallery14-container12">
            <div className="gallery14-container13">
              <span className="gallery14-text12">
                {props.text12 ?? (
                  <Fragment>
                    <span className="gallery14-text32">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text13">
                {props.text111 ?? (
                  <Fragment>
                    <span className="gallery14-text25">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="gallery14-container14">
            <div className="gallery14-container15">
              <span className="gallery14-text14">
                {props.text13 ?? (
                  <Fragment>
                    <span className="gallery14-text27">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text15">
                {props.text112 ?? (
                  <Fragment>
                    <span className="gallery14-text37">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="gallery14-container16">
            <div className="gallery14-container17">
              <span className="gallery14-text16">
                {props.text14 ?? (
                  <Fragment>
                    <span className="gallery14-text35">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text17">
                {props.text113 ?? (
                  <Fragment>
                    <span className="gallery14-text28">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="gallery14-container18">
            <div className="gallery14-container19">
              <span className="gallery14-text18">
                {props.text15 ?? (
                  <Fragment>
                    <span className="gallery14-text29">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text19">
                {props.text114 ?? (
                  <Fragment>
                    <span className="gallery14-text30">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="gallery14-container20">
            <div className="gallery14-container21">
              <span className="gallery14-text20">
                {props.text16 ?? (
                  <Fragment>
                    <span className="gallery14-text33">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text21">
                {props.text115 ?? (
                  <Fragment>
                    <span className="gallery14-text36">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="gallery14-container22">
            <div className="gallery14-container23">
              <span className="gallery14-text22">
                {props.text17 ?? (
                  <Fragment>
                    <span className="gallery14-text31">Props</span>
                  </Fragment>
                )}
              </span>
              <span className="gallery14-text23">
                {props.text116 ?? (
                  <Fragment>
                    <span className="gallery14-text26">Show Title</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery14.defaultProps = {
  text11: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=400',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=400',
  text111: undefined,
  text116: undefined,
  text13: undefined,
  text113: undefined,
  text15: undefined,
  text114: undefined,
  text17: undefined,
  text12: undefined,
  text16: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=400',
  rootClassName: '',
  text1: undefined,
  text14: undefined,
  text115: undefined,
  text112: undefined,
}

Gallery14.propTypes = {
  text11: PropTypes.element,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  text111: PropTypes.element,
  text116: PropTypes.element,
  text13: PropTypes.element,
  text113: PropTypes.element,
  text15: PropTypes.element,
  text114: PropTypes.element,
  text17: PropTypes.element,
  text12: PropTypes.element,
  text16: PropTypes.element,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  text14: PropTypes.element,
  text115: PropTypes.element,
  text112: PropTypes.element,
}

export default Gallery14
