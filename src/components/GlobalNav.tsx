import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '@constants/index';

const GlobalNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Share = styled.button``;

const Logo = styled.div`
  background-color: ${colors.BLACK};
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`;

const GlobalNav = (): ReactElement => (
  <GlobalNavContainer>
    <Logo>
      <p>SS</p>
    </Logo>
    <Share>Share</Share>
  </GlobalNavContainer>
);

export default GlobalNav;
