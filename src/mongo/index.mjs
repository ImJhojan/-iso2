import mongoose from "mongoose";

export const startConnection = async () => {
<<<<<<< HEAD
const url = encodeURI("mongodb+srv://jhojan:lWlKZcPKcMAZrgP3@iso2.awvwv7y.mongodb.net/?retryWrites=true&w=majority");
=======
const url = encodeURI("mongodb+srv://jhojan:lWlKZcPKcMAZrgP3@cluster0.nwfgq30.mongodb.net/?retryWrites=true&w=majority");
>>>>>>> 5cf39b010afc0f8446a886e066ce423dfaf68290
await mongoose.connect(url);
};
