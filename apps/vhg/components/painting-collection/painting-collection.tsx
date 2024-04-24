import 'dotenv/config';
// import styled from 'styled-components';

/* eslint-disable-next-line */
// export interface PaintingCollectionProps {}

// const StyledPaintingCollection = styled.div`
//   color: pink;
// `;

async function getPaintings() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/hello`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  } else {
    console.log('res', res);
  }

  return res.json();
}

export default async function PaintingCollection() {

  const paintings = await getPaintings();

  return (
    // <StyledPaintingCollection>
    <div>
      <h1>Welcome to PaintingCollection!</h1>
      <ul>
        {paintings.map((painting: { id: number, title: string }) => (
          <li key={painting.id}>Post: {painting.title}</li>
        ))}
      </ul>
    </div>
    // </StyledPaintingCollection>
  );
}
