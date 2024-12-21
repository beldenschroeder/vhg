import mongoose, { Schema, connect, model, models } from 'mongoose';

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../../.env')
});

connect(`${process.env.DB_CONN_STRING}`);
mongoose.Promise = global.Promise;

const paintingModel = () => {
  const schema = new Schema({
    title: { type: String, required: true },
    medium: { type: String, required: true },
    category: { type: String, required: true },
    widthInch: { type: Number, required: true },
    heightInch: { type: Number, required: true },
    description: { type: String, required: true },
    fileName: {
      original: { type: String, required: true },
      thumbnail: { type: String, required: true }
    }
  });

  schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
    }
  });

  return models.Painting || model('Painting', schema);
};

export const db = {
  Painting: paintingModel()
};
