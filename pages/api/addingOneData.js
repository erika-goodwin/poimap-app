// import { MongoClient } from "mongodb";
import { connectToDatabase } from "../util/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    const data = req.body;
    // const client = await MongoClient.connect(process.env.MONGODB_URI);
    // const db = client.db();

    const yourCollection = db.collection(process.env.MONGODB_DB);
    const result = await yourCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
