// import { MongoClient } from "mongodb";
import { connectToDatabase } from "../../util/mongodb";

export default async function addingOneData(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Hello from the Daily route" }));

  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let data = req.body;
    data = JSON.parse(data);

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.updateOne(data);
    console.log("mongodb result", result);
    client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
