import { MongoClient, ObjectId } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function deletingOneOfList(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let id = req.body.id;

    let deletingName = req.body.deleteName;
    let idOfList = req.body.idOfList;
    console.log('deletingName', deletingName)
    console.log('idOfList', idOfList)

    const yourCollection = db.collection("locationList");
    const result = await yourCollection.update(
      { _id: ObjectId(id) },
      { $pull: { list: { name: deletingName } } },
      // { $pull: { list: { _id: idOfList } } },
      { multi: true }
    );
    console.log("mongodb result", result);
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
