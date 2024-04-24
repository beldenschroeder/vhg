import dotenv from 'dotenv';
import path from 'path';

// This file is used to replace `server.ts` when ejecting i.e. `yarn eject`
// See `../eject.ts` for exact details on how this file is used
// See `./README.md#eject` for more information

dotenv.config({
  path: path.resolve(__dirname, '../../../.env'),
})
// import styled from 'styled-components';

/* eslint-disable-next-line */
// export interface PaintingCollectionProps {}

// const StyledPaintingCollection = styled.div`
//   color: pink;
// `;

async function getPaintings() {
  // TODO: Change `http` protocol to `https` when deploying to production when that's set up.
  const res = await fetch('https://' + process.env.VERCEL_URL + '/api/hello', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  } else {
    console.log('res', res);
  }

  const data = await res.json();

  return data;
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
