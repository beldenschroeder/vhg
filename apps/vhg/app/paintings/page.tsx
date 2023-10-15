// 'use client';
// import styled from 'styled-components';
import PaintingCollection from '../../components/painting-collection/painting-collection';

/* eslint-disable-next-line */
// export interface PaintingsProps {}

// const StyledPaintings = styled.div`
//   color: pink;
// `;

export default function Paintings() {
  return (
    // <StyledPaintings>
    <div>
      <h1>Welcome to Paintings!</h1>
      <PaintingCollection />
    </div>
    // </StyledPaintings>
  );
}

// export const getStaticProps: GetStaticProps<PaintingsProps> = async (
//   context
// ) => {
//   return {
//     props: {
//       name: 'Juri',
//     },
//   };
// };

// export default Paintings;
