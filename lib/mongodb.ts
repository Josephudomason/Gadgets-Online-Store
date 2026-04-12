import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

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

export const getMongoClient = async () => {
  if (mongoCache.client) {
    return mongoCache.client;
  }

  if (!mongoCache.promise) {
    mongoCache.promise = new MongoClient(uri, options).connect();
  }

  mongoCache.client = await mongoCache.promise;
  return mongoCache.client;
};

export const getDatabase = async () => {
  const client = await getMongoClient();
  return client.db(process.env.MONGODB_DB_NAME || "store");
};
