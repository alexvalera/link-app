import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PostProps } from '@shared/interfaces';
import { colors } from '@constants/index';

export const Container = styled.article`
  border: 1px solid ${colors.LIGHT_GREY}
  border-radius: 5px; 
  display: flex;
  margin-bottom: 20px;
  padding: 0.5rem 1rem;
`;

const Source = styled.div``;

const SourceImage = styled.img`
  display: block;
  heigh: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Title = styled.h3`
  align-self: center;
  margin: 0;
`;

const Post = (props: PostProps): ReactElement => {
  return (
    <Container>
      <Source>
        <SourceImage src={props.source.icon} />
      </Source>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default Post;
