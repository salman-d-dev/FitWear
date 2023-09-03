import mongoose from 'mongoose';

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.MONGO_URL; // Replace 'myDatabaseName' with your actual database name

let cachedConnection = null;

export async function connectToDatabase() {
  
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  try {
    const dbConnection = await mongoose.connect(uri, connectionOptions);
    cachedConnection = dbConnection;
    console.log('Database connection established: success');
    return dbConnection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error; // Rethrow the error so it can be handled elsewhere if needed
  }
}
