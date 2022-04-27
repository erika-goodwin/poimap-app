import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function deletingOneOfList(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let id = req.body.id;
    let collectionId = req.body.collectionId;
    let deleteName = req.body.deleteName;

    console.log("collection id:", collectionId);
    console.log("delete id:", id);

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.update(
      { _id: ObjectId(collectionId) },
      // { $pull: { list: { name: deletingName } } },
      { $pull: { list: { _id: ObjectId(id) } } },
      { multi: true }
    );
    console.log("mongodb result", result);
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
