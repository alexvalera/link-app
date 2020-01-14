import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '@constants/index';

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.LIGHT_GREY}; 
  display: flex; 
  justify-content: center;
  min-height: 200px;
`;

// const Source = styled.div``;

// const SourceImage = styled.img`
//   display: block;
//   heigh: 50px;
//   width: 50px;
//   margin-right: 10px;
//   border-radius: 50%;
// `;

// const Title = styled.h3`
//   align-self: center;
//   margin: 0;
// `;

// const Post = (props: PostProps): ReactElement => {
//   const source = useSource(props.link);
//   return (
//     <Container>
//       <Source>
//         <SourceImage src={source.icon} />
//       </Source>
//       <Title>{props.title}</Title>
//     </Container>
//   );
// };

const BlankPostsLists = (): ReactElement => {
  return (
    <Container>Enter Your Posts</Container>
  )
}

export default BlankPostsLists;
