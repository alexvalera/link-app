import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, postSources } from '@constants/index';
import { ModalProps } from '@shared/interfaces';
import { closeModal, addPost } from 'src/actions';
import { connect } from 'react-redux';
import { ProfileState } from 'src/reducers';

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props: ModalProps) => (props.isOpen ? '1' : '-99')};
  opacity: ${(props: ModalProps) => (props.isOpen ? '1' : '0')};
`;

const Content = styled.div`
  background-color: white;
  border: 1px solid ${colors.LIGHT_GREY};
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1rem 2rem;
  max-width: 600px;
  min-height: 300px;
  width: 80%;
  position: relative;
`;

const Title = styled.h3`
  border-bottom: 1px solid ${colors.LIGHT_GREY};
  padding-bottom: 1rem;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 15px;
  width: calc(100% - 4rem);
`;

const Button = styled.button`
  background-color: ${colors.BLACK};
  color: white;
  cursor: pointer;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: 48%;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

const CancelButton = styled(Button)`
  background-color: ${colors.LIGHT_GREY};
  color: ${colors.BLACK};
`;

const AcceptButton = styled(Button)``;

const Modal = (props: any): ReactElement => {
  const closeModal = (): void => {
    props.closeModal();
  };
  const handlePost = (): void => {
    props.addPost({
      title: 'test title',
      link: 'https://spotify.com',
      source: postSources.SPOTIFY,
    });
  };
  return (
    <Container isOpen={props.modalOpen}>
      <Content>
        <Title>Add a post</Title>
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
        <CTAContainer>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <AcceptButton onClick={handlePost}>Post</AcceptButton>
        </CTAContainer>
      </Content>
    </Container>
  );
};
const mapStateToProps = (state: ProfileState): any => {
  return {
    modalOpen: state.modalOpen,
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { closeModal, addPost })(Modal);
