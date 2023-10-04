import mongoose from 'mongoose';

export const startConnection = async () => {
  const url = encodeURI('mongodb+srv://jhojan:lWlKZcPKcMAZrgP3@cluster0.fuzzwmy.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect(url);
};

export default startConnection;
