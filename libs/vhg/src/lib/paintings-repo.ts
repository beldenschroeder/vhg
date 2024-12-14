import { db } from './db';

const Painting = db.Painting;

export const paintingsRepo = {
  getAll: async () => {
    return await Painting.find();
  },
  getById: async (id: string) => {
    return await Painting.findById(id);
  }
};