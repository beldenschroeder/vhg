// This file is used to replace `server.ts` when ejecting i.e. `yarn eject`
// See `../eject.ts` for exact details on how this file is used
// See `./README.md#eject` for more information


// import styled from 'styled-components';

/* eslint-disable-next-line */
// export interface PaintingCollectionProps {}

// const StyledPaintingCollection = styled.div`
//   color: pink;
// `;

async function getPaintings() {
  console.log('process.env.NEXT_PUBLIC_URL', process.env.NEXT_PUBLIC_URL);

  // TODO: Change `http` protocol to `https` when deploying to production when that's set up.
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hello`, {
    headers: {
      // 'Content-Type': 'application/json'
      accept: 'application/json'
    }
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');
  // } else {
  //   console.log('res', res);
  // }

  const data = await res.json();

  console.log('data: ', data);

  return data;
}

export default async function PaintingCollection() {

  const paintings = await getPaintings();

  console.log('paintings', paintings);

  return (
    // <StyledPaintingCollection>
    <div>
      <h1>Welcome to PaintingCollection!</h1>
      {/* <ul>
        {paintings.map((painting: { id: number, title: string }) => (
          <li key={painting.id}>Post: {painting.title}</li>
        ))}
      </ul> */}
    </div>
    // </StyledPaintingCollection>
  );
}
