import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { colors, device, basicInfoConstants as Constants } from '@constants/index';

const BasicInfoContainer = styled.section`
  background-color: white;
  display: flex;
  margin: 3rem 0 1rem 0;
`;

const BasicInfoContainerFixed = styled(BasicInfoContainer)`
  border-bottom: 1px solid ${colors.LIGHT_GREY};
  left: 25px;
  margin: 0;
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

const BasicInfoMeta = styled.p`
  color: ${colors.BLACK}
  font-size: 1rem;
  font-weight: 300; 
  margin: 0;
  transition: all 0.3s ease;
`;

const BasicInfoImage = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
`;

export interface BasicInfoProps {
  fullName: string;
  tagline: string;
  image?: string;
  isInfoFixed: boolean;
}

const BasicInfoChild = ({ fullName, tagline }: BasicInfoProps): ReactElement => (
  <>
    <BasicInfoImageContainer>
      <BasicInfoImage src={Constants.defaultImagePath} />
    </BasicInfoImageContainer>
    <BasicInfoPersonalContainer>
      <BasicInfoName>{fullName}</BasicInfoName>
      <BasicInfoMeta>{tagline}</BasicInfoMeta>
    </BasicInfoPersonalContainer>
  </>
);

const BasicInfo = (props: BasicInfoProps): ReactElement => {
  return props.isInfoFixed ? (
    <BasicInfoContainerFixed>
      <BasicInfoChild {...props} />
    </BasicInfoContainerFixed>
  ) : (
    <BasicInfoContainer>
      <BasicInfoChild {...props} />
    </BasicInfoContainer>
  );
};

export default BasicInfo;
