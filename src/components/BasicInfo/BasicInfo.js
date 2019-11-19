import React, { useEffect } from 'react'; 
import PropTypes from 'prop-types'
import './BasicInfo.scss';

import BasicInfoConstants from '../../constants/basic-info';

const BasicInfo = (props) => {
  const basicInfoClasses = `basic-info ${(props.infoFixed ? 'basic-info--fixed': '')}`; 
  console.log(basicInfoClasses);
  useEffect(() => {
    console.log(props);
  })
  return (
    <div className = {basicInfoClasses}>
      <div className = "basic-info__col">
        <img alt = "profile" src = {props.image || BasicInfoConstants.defaultImagePath }/>
      </div>
      <div className = "basic-info__col">
        <p className = "basic-info__name"><strong>{props.fullName || ''}</strong></p>
        <p className = "basic-info__meta">
          {props.profession || ''} from {props.location || ''}
        </p>
      </div>
    </div>
  )
}; 

BasicInfo.propTypes = {
  fullName: PropTypes.string, 
  location: PropTypes.string, 
  image: PropTypes.string, 
  infoFixed: PropTypes.bool
}

export default BasicInfo;