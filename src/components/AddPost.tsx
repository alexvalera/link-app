import React, { ReactElement } from 'react';
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

type AddPostStateProps = {
  modalOpen: boolean;
};

type AddPostDispatchProps = {
  openModal: Function;
};

const AddPostForm = (
  <form>
    <div>
      <label>Post Title</label>
      <input type="text" name="title" />
    </div>
    <div>
      <label>Post URL</label>
      <input type="text" name="post-url" />
    </div>
  </form>
);

const AddPost = (props: AddPostStateProps & AddPostDispatchProps): ReactElement => {
  const handleClick = (): void => {
    !props.modalOpen && props.openModal();
  };
  const modalProps = {
    title: 'Add a post',
    content: AddPostForm,
  };
  return (
    <>
      <AddPostButton onClick={handleClick}>Add Post</AddPostButton>
      <Modal {...modalProps} />
    </>
  );
};

const mapStateToProps = (state: ProfileState): AddPostStateProps => {
  return {
    modalOpen: state.modalOpen,
  };
};

export default connect(mapStateToProps, { openModal })(AddPost);
