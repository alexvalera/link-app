import React, { ReactElement, useState, SyntheticEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import UUID from 'uuid/v4'; 
import { device, colors } from '@constants/index';
import Modal from './Modal';
import { openModal, addPost, closeModal } from 'src/actions';
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

const Container = styled.form`
  display: flex;
`;

const InputContainer = styled.div`
  margin: 1rem 0;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  display: none;
`;

type AddPostStateProps = {
  modalOpen: boolean;
};

type AddPostDispatchProps = {
  openModal: Function;
  closeModal: Function;
  addPost: Function;
};

const AddPost = (props: AddPostStateProps & AddPostDispatchProps): ReactElement => {
  const [postTitle, setPostTitle] = useState('');
  const [postLink, setPostLink] = useState('');

  const onPostTitleChange = (e: SyntheticEvent) => {
    setPostTitle((e.target as HTMLInputElement).value);
  };

  const onLinkChange = (e: SyntheticEvent) => {
    setPostLink((e.target as HTMLInputElement).value);
  }

  const handleClick = (): void => {
    !props.modalOpen && props.openModal();
  };

  const handlePost = (e: SyntheticEvent): void => {
    e.preventDefault();
    console.log('submit');
    props.addPost({
      id: UUID(),
      title: postTitle,
      link: postLink,
    });
    props.closeModal();
  };

  useEffect(() => {
    if (!props.modalOpen) {
      setPostTitle(''); 
      setPostLink('');
    }
  },[props.modalOpen])

  const AddPostForm = (
    <Container onSubmit={handlePost}>
      <InputContainer>
        <Label>Post Title</Label>
        <Input 
          onChange={onPostTitleChange} 
          name="title"
          value={postTitle}
        />
      </InputContainer>
      <InputContainer>
        <Label>Post URL</Label>
        <Input 
          onChange={onLinkChange}
          name="post-url"
          value={postLink}
        />
      </InputContainer>
      <SubmitButton type="submit" />
    </Container>
  );

  return (
    <>
      <AddPostButton onClick={handleClick}>Add Post</AddPostButton>
      <Modal 
        title="Add a post"
        content={AddPostForm}
        cancelButtonText="Cancel"
        acceptButtonText="Post"
        acceptButtonCallBack={handlePost}
      />
    </>
  );
};

const mapStateToProps = (state: ProfileState): AddPostStateProps => {
  return {
    modalOpen: state.modalOpen,
  };
};

export default connect(mapStateToProps, { openModal, closeModal, addPost })(AddPost);
