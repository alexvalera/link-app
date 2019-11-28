import React, { ReactElement, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { colors } from '@constants/index';
import { ProfileState, PostProps } from '@shared/interfaces';
import { closeModal, addPost } from 'src/actions';
import { connect } from 'react-redux';

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props: ModalStateProps) => (props.modalOpen ? '1' : '-99')};
  opacity: ${(props: ModalStateProps) => (props.modalOpen ? '1' : '0')}; 
`;

const Content = styled.div`
  background-color: white;
  border: 1px solid ${colors.LIGHT_GREY};
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1rem 2rem;
  max-width: 600px;
  min-height: 355px;
  width: 80%;
  position: relative;
  transition: all 0.3s ease;
  opacity: ${(props: ModalStateProps) => (props.modalOpen ? '1' : '0')};
  transform: ${(props: ModalStateProps) => (props.modalOpen ? 'translateY(0px)' : 'translateY(10px)')};

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

type ModalProps = {
  content: ReactElement;
  title: string;
  cancelButtonText: string;
  acceptButtonText: string;
  acceptButtonCallBack: Function;
};

type ModalStateProps = {
  modalOpen: boolean;
  posts: PostProps[];
  content: ReactElement;
  title: string;
  cancelButtonText: string;
  acceptButtonText: string;
  acceptButtonCallBack: Function;
};

type ModalDispatchProps = {
  closeModal: Function;
  addPost: Function;
};

const Modal = (props: ModalStateProps & ModalDispatchProps): ReactElement => {
  const handleCancel = (e: SyntheticEvent): void => {
    (e.target as HTMLElement).classList.contains('modal-container') && props.closeModal();
  };

  const handleAccept = async (): Promise<any> => {
    await props.acceptButtonCallBack();
    props.closeModal();
  };

  return (
    <Container 
      className="modal-container"
      onClick={handleCancel} 
      {...props}
    >
      <Content {...props}>
        <Title>{props.title}</Title>
        {props.content}
        <CTAContainer>
          {/* <CancelButton onClick={handleCancel}>{props.cancelButtonText}</CancelButton> */}
          <AcceptButton onClick={handleAccept}>{props.acceptButtonText}</AcceptButton>
        </CTAContainer>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state: ProfileState, ownProps: ModalProps): ModalStateProps => {
  return {
    modalOpen: state.modalOpen,
    posts: state.posts,
    content: ownProps.content,
    title: ownProps.title,
    cancelButtonText: ownProps.cancelButtonText,
    acceptButtonText: ownProps.acceptButtonText, 
    acceptButtonCallBack: ownProps.acceptButtonCallBack,
  };
};

export default connect(mapStateToProps, { closeModal, addPost })(Modal);
