import { MongoClient } from "mongodb";
import config from "./config";

export async function connectToDatabase() {
  const client = await MongoClient.connect(`${config.urlMongo}`);

  return client;
}
