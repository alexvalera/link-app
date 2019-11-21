import React, { useEffect } from 'react'; 
import styled from 'styled-components';
import './BasicInfo.scss';

import { Colors, BasicInfoConstants as Constants } from '@constants/index';

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
`; 

const BasicInfoImage = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
`;

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
        <img alt = "profile" src = {props.image || Constants.defaultImagePath }/>
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

export default BasicInfo;