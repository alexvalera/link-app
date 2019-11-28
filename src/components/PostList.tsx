import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Post from './Post';
import { postSources } from '@constants/index';
import { ProfileState, PostProps } from '@shared/interfaces';
import { connect } from 'react-redux';

const PostListContainer = styled.section`
  height: 100vh;
  // eslint-disable-next-line
  margin-top: ${(props: PostListProps) => (props.isInfoFixed ? '8.7rem' : '')};
  padding: 2rem 0;
`;

type PostListProps = {
  isInfoFixed: boolean;
};

type PostListStateProps = {
  posts: PostProps[];
  isInfoFixed: boolean;
};

const PostList = (props: PostListStateProps): ReactElement => {
  return (
    <>
      <PostListContainer {...props}>
        {
          props.posts.map(post => {
            return <Post key={post.id} {...post} />
          })
        }
      </PostListContainer>
    </>
  );
};

const mapStateToProps = (state: ProfileState, ownProps: PostListProps): PostListStateProps => {
  return {
    posts: state.posts,
    isInfoFixed: ownProps.isInfoFixed,
  };
};

export default connect(mapStateToProps, {})(PostList);
