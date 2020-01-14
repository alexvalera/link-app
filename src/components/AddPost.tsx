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
    width: 800px;
  }

  @media ${device.desktop} {
    left: auto;
    right: auto;
    width: 800px;
  }
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin: 0 0 1.5rem 0; 
`;

const Label = styled.label`
  display: block;
  font-size: 14px; 
  color: #424242;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 1rem;
  width: calc(100% - 32px);
  border: 1px solid #dedede;
  border-radius: 5px;
  color: #424242;
  padding: 1rem;
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
        <Label>Description</Label>
        <Input 
          onChange={onPostTitleChange} 
          name="title"
          value={postTitle}
          placeholder="What's your post about?"
        />
      </InputContainer>
      <InputContainer>
        <Label>URL</Label>
        <Input 
          onChange={onLinkChange}
          name="post-url"
          value={postLink}
          placeholder="www.example.com"
        />
      </InputContainer>
      <SubmitButton type="submit" />
    </Container>
  );

  return (
    <>
      <AddPostButton onClick={handleClick}>Add Post</AddPostButton>
      <Modal 
        title="Share your creation"
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
