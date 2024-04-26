import PaintingCollection from '../../components/painting-collection/painting-collection';

// TODO: This is needed to get around issue where Vercel deploys can't fetch data with
// VERCEL_URL environment variable, even though it works fine locally. See
// [this discusssion](https://github.com/vercel/next.js/issues/44062). It seems to work
// fine in Node 16, according to someone there in the discussion. :(
export const dynamic = 'force-dynamic';

export default function Paintings() {
  return (
    <div>
      <h1>Welcome to Paintings!</h1>

      <PaintingCollection />
    </div>
  );
}
