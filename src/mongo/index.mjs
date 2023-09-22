import mongoose from 'mongoose';

export const startConnection = async () => {
  const url = encodeURI('mongodb+srv://jhojan:<password>@iso2.awvwv7y.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect(url);
};

export default startConnection;
