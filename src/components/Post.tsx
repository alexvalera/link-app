import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { PostProps } from '@shared/interfaces';
import { colors } from '@constants/index';
import { useSource } from '@hooks/index';
import { slideUp } from 'src/styles/keyframes';

export const Container = styled.article`
  border: 1px solid ${colors.LIGHT_GREY}
  border-radius: 5px; 
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
  transition: all 0.3s ease;
  animation: ${slideUp} 0.3s ease-in; 
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
  const source = useSource(props.link);
  return (
    <Container>
      <Source>
        <SourceImage src={source.icon} />
      </Source>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default Post;
