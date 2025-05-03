import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery5.css'

const Gallery5 = (props) => {
  return (
    <div className="gallery5-gallery3 thq-section-padding">
      <div className="gallery5-max-width thq-section-max-width">
        <div className="gallery5-section-title">
          <h2 className="gallery5-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery5-text3">Photo Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery5-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery5-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery5-container1">
          <div className="gallery5-content">
            <div className="gallery5-container2">
              <div className="gallery5-container3">
                <img
                  alt={props.image1Alt}
                  src={props.image1Src}
                  className="gallery5-image1 thq-img-ratio-4-3"
                />
              </div>
              <img
                alt={props.image2Alt}
                src={props.image2Src}
                className="gallery5-image2 thq-img-ratio-1-1"
              />
            </div>
            <div className="gallery5-container4">
              <img
                alt={props.image3Alt}
                src={props.image3Src}
                className="gallery5-image3 thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src={props.image4Src}
                className="gallery5-image4 thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery5.defaultProps = {
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
  content1: undefined,
  image2Src:
    'https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Alt: 'image',
  image1Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image4Alt: 'image',
  image3Alt: 'image',
  image1Alt: 'PlaceholderImage1302',
}

Gallery5.propTypes = {
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  image2Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery5
