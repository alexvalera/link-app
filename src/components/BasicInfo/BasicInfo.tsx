import React, { Fragment, useEffect } from 'react'; 
import styled from 'styled-components';
import './BasicInfo.scss';

import { colors, device, basicInfoConstants as Constants } from '@constants/index';

const BasicInfoContainer = styled.section`
  background-color: white;
  border-bottom: 1px solid ${colors.LIGHT_GREY}
  display: flex;
  padding: 3rem 0 1rem 0; 
`;

const BasicInfoContainerFixed = styled(BasicInfoContainer)`
  left: 25px;
  padding: 1rem 0; 
  position: fixed;
  right: 25px; 
  top: 0; 
  @media ${device.mobile} {
    left: 50px;
    right: 50px;
  }

  @media ${device.tablet} {
    left: auto; 
    right: auto; 
    width: 600px; 
  }
`;

const BasicInfoImageContainer = styled.div`
  align-items: center;
  display: flex;
  margin-right: 20px;
`;

const BasicInfoPersonalContainer = styled.div``;

const BasicInfoName = styled.p`
  color: ${colors.BLACK}
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`; 

const BasicInfoMeta= styled.p`
  color: ${colors.BLACK}
  font-size: 1rem;
  font-weight: 300; 
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

const BasicInfoChild = ({ fullName, profession, location } : BasicInfoProps) => (
  <Fragment>
    <BasicInfoImageContainer>
      <BasicInfoImage src = {Constants.defaultImagePath}/>
    </BasicInfoImageContainer>
    <BasicInfoPersonalContainer>
      <BasicInfoName>{ fullName }</BasicInfoName>
      <BasicInfoMeta>{ `${profession} from ${location}`}</BasicInfoMeta>
    </BasicInfoPersonalContainer>
  </Fragment>
);

const BasicInfo = (props: BasicInfoProps) => {
  return props.isInfoFixed
  ? (
    <BasicInfoContainerFixed>
      <BasicInfoChild {...props}/>
    </BasicInfoContainerFixed>
  ) 
  : (
      <BasicInfoContainer>
        <BasicInfoChild {...props}/>
      </BasicInfoContainer>
    )
}; 

export default BasicInfo;