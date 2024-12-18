import { create } from 'zustand';
import { useFetch } from '../helpers/use-fetch';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../.env'),
})

interface IFileName {
  original: string;
  thumbnail: string;
}

interface IPainting {
  title: string;
  medium: string;
  category: string;
  widthInch: string;
  heightInch: string;
  description: boolean;
  fileName: IFileName;
}

interface IPaintingStore {
  paintings?: IPainting[];
}

interface IPaintingService extends IPaintingStore {
  getAll: () => Promise<void>;
}

// Paintings state store
const initialState = {
  paintings: undefined
};
const paintingStore = create<IPaintingStore>(() => initialState);

export const usePaintingService = (): IPaintingService => {
  const fetch = useFetch();
  const { paintings } = paintingStore();
  const baseUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.VERCEL_ENV === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return {
    paintings,
    getAll: async () => {
      const p = await fetch.get(`${baseUrl}/api/hello`);

      // TODO: Remove later
      console.log('p: ', p);

      // TODO: Replace with "/ai/paintings" endpoint
      paintingStore.setState({ paintings: p });
    }
  };
};
