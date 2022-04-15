import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function deletingWholeList(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let id = req.body.id;
 console.log('id', id)

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.deleteOne(
      { _id: ObjectId(id) }
    );
    console.log("mongodb result", result);
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
