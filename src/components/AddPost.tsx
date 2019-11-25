import React, { ReactElement, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { device, colors } from '@constants/index';
import Modal from './Modal';

const AddPostButton = styled.button`
  background-color: ${colors.BLACK};
  border-radius: 5px;
  bottom: 25px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  position: fixed;
  max-width: 600px;
  width: 80%;
  right: 25px;
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

const AddPost = (): ReactElement => {
  const [isClicked, setClicked] = useState(false);
  const click = (): void => {
    setClicked(!isClicked);
  };
  useEffect(() => {
    console.log(isClicked);
  });
  return (
    <Fragment>
      <AddPostButton onClick={click}>Add Post</AddPostButton>
      <Modal isOpen={isClicked} />
    </Fragment>
  );
};

export default AddPost;
