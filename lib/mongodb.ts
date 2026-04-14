import { MongoClient, ServerApiVersion } from "mongodb";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

type GlobalMongoCache = {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
};

const globalForMongo = globalThis as typeof globalThis & {
  _mongo?: GlobalMongoCache;
};

const mongoCache = globalForMongo._mongo ?? {
  client: null,
  promise: null,
};

if (!globalForMongo._mongo) {
  globalForMongo._mongo = mongoCache;
}

const getMongoUri = () => {
  const uri =
    process.env.MONGODB_URI ??
    process.env.MONGODB_URL ??
    process.env.DATABASE_URL;

  if (!uri) {
    throw new Error(
      "Missing MongoDB connection string. Set MONGODB_URI, MONGODB_URL, or DATABASE_URL."
    );
  }

  return uri;
};

export const getMongoClient = async () => {
  if (mongoCache.client) {
    return mongoCache.client;
  }

  if (!mongoCache.promise) {
    mongoCache.promise = new MongoClient(getMongoUri(), options).connect();
  }

  mongoCache.client = await mongoCache.promise;
  return mongoCache.client;
};

export const getDatabase = async () => {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB_NAME || "store");
};
