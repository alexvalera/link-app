import React, { Fragment, ReactElement } from 'react';
import styled from 'styled-components';
import Post from './Post';
import { postSources } from '@constants/index';

const PostListContainer = styled.section`
  height: 100vh;
  // eslint-disable-next-line
  margin-top: ${(props: PostListProps) => (props.isInfoFixed ? '8.7rem' : '')};
  padding: 2rem 0;
`;

interface PostListProps {
  isInfoFixed: boolean;
}

const mockPostProps = {
  title: `New song "Back To U"`,
  image: {
    src: '',
    meta: '',
  },
  link: '#',
  source: postSources.SPOTIFY,
};

const PostList = (props: PostListProps): ReactElement => {
  return (
    <Fragment>
      <PostListContainer {...props}>
        <Post {...mockPostProps} />
        <Post {...mockPostProps} />
      </PostListContainer>
    </Fragment>
  );
};
export default PostList;
