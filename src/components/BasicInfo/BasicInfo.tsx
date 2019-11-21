import React, { useEffect } from 'react'; 
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './BasicInfo.scss';

import BasicInfoConstants from '../../constants/basic-info';
import { Colors } from '../../constants';

const BasicInfoContainer = styled.section`
  background-color: white;
  border-bottom: 1px solid ${Colors.LIGHT_GREY}
  padding: 3 rem 0 1rem 0; 
`;

const BasicInfoImageContainer = styled.div`
  align-items: center;
  display: flex;
  margin-right: 20px;
`;

const BasicInfoPersonalContainer = styled.div``;

const BasicInfoName = styled.div`
  color: ${Colors.BLACK}
  font-size: 24px;
  margin: 0;
`

interface BasicInfoProps {
  fullName: string,
  profession: string, 
  location: string, 
  image?: string, 
  isInfoFixed: boolean
}

const BasicInfo = (props: BasicInfoProps) => {
  const basicInfoClasses = `basic-info ${(props.isInfoFixed ? 'basic-info--fixed': '')}`; 
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
  profession: PropTypes.string,
  location: PropTypes.string, 
  image: PropTypes.string, 
  infoFixed: PropTypes.bool
}

export default BasicInfo;