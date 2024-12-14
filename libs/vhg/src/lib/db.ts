import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.connect(
  'mongodb+srv://developer:ZALisDKegp2O6rYO@cluster0.v9d4e.mongodb.net/vonherffgallery?retryWrites=true&w=majority&appName=Cluster0'
);
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

  return mongoose.models.Painting || mongoose.model('Painting', schema);
};

export const db = {
  Painting: paintingModel()
};
