// import Typography from '@mui/material/Typography';
// import ImageGrid from './components/ImageGrid';
import { query } from '@/lib/db';
import React, { FC } from 'react';

type Painting = {
  id: number;
  title: string;
  medium: string;
  category: string;
  widthinch: number;
  heightinch: number;
  description: string;
};

// const Paintings = () => {
//   return (
//     <>
//       <Typography component="p">Painting content.</Typography>
//       <ImageGrid />
//     </>
//   );
// };

const PaintingCard: FC<{ painting: Painting }> = ({ painting }) => (
  <li className="border p-4 rounded shadow">
    <h2 className="text-xl font-semibold">{painting.title}</h2>
    <p>
      <strong>Medium:</strong> {painting.medium}
    </p>
    <p>
      <strong>Category:</strong> {painting.category}
    </p>
    <p>
      <strong>Dimensions:</strong> {painting.widthinch}&quot; x{' '}
      {painting.heightinch}
      &quot;
    </p>
    <p className="mt-2">{painting.description}</p>
  </li>
);

// Functional Component for the page (async Server Component)
const Paintings: FC = async () => {
  const paintings = await query<Painting>`SELECT * FROM paintings`;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Paintings</h1>
      <ul className="space-y-4">
        {paintings.map((painting) => (
          <PaintingCard key={painting.id} painting={painting} />
        ))}
      </ul>
    </main>
  );
};

export default Paintings;
