import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className="container">
      <div className={`PageHeader relative ${className}`}>
        {backgroundImage && (
          <Image
            background
            resolutions="large"
            src={backgroundImage}
            alt={title}
            size="cover"
          />
        )}

        <div className="container relative">
          <h6 className="PageHeader--Title col-lg-6 mb-5">{title}</h6>
          {subtitle && (
            <Content className="PageHeader--Subtitle" src={subtitle} />
          )}
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
