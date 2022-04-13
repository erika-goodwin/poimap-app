import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function deletingOneOfList(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let id = req.body.id;
    // let titleList = req.body.titleList;
    let deletingName = req.body.deletingName;

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.update(
      { _id: ObjectId(id) },
      { $pull: { list: { name: deletingName } } },
      { multi: true }
    );
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
