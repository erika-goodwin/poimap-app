import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function deletingOneOfList(req, res) {
  if (req.method === "POST") {
    console.log("delete log: ", req.body);
    const { db } = await connectToDatabase();

    let id = req.body.id;
    // let titleList = req.body.titleList;
    let deletingName = req.body.deletingName;
    console.log("id, deletingName", deletingName);

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.update(
      { _id: ObjectId(id) },
      { $pull: { list: { name: deletingName } } },
      { multi: true }
    );
    console.log("mongodb result", result);
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
