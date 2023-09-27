import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5001;
export default PORT;
export const {
  MONGO_URI, MINIO_HOST, MINIO_ACCESS_KEY, MINIO_SECRET_KEY,
} = process.env;
