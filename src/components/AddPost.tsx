import React, { ReactElement, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { device, colors } from '@constants/index';
import Modal from './Modal';
import { openModal } from 'src/actions';
import { connect } from 'react-redux';
import { ProfileState } from '@shared/interfaces';

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

const AddPost = (props: any): ReactElement => {
  const handleClick = (): void => {
    props.modalOpen ? props.closeModal() : props.openModal();
  };
  return (
    <Fragment>
      <AddPostButton onClick={handleClick}>Add Post</AddPostButton>
      <Modal />
    </Fragment>
  );
};

const mapStateToProps = (state: ProfileState): any => {
  return {
    modalOpen: state.modalOpen,
  };
};

export default connect(mapStateToProps, { openModal })(AddPost);
