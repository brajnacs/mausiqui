import {model, Model, Schema, Document} from 'mongoose';

interface IAlbumSchema extends Document {
  name: string,
  releaseYear: number,
  director: string,
  musicDirector: string
}

const AlbumSchema = new Schema({
  name: {type: String, required: true},
  releaseYear: {type: Number, required: true},
  director: {type: String, required: true},
  musicDirector: {type: String, required: true}
});

export default model<IAlbumSchema>('Album', AlbumSchema);
