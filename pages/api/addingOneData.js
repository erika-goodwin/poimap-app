// import { MongoClient } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function addingOneData(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let data = req.body;
    console.log("mongo sending data", data);

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.insertOne(data);
    console.log("mongodb result", result);
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
    // return;
  }
}
