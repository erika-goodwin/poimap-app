// import { MongoClient } from "mongodb";
import { connectToDatabase, client } from "../../util/mongodb";

export default async function deletingOneDocument(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();

    let title = req.body.title;
    let data = req.body.data;



    const yourCollection = db.collection("locationList");
    const result = await yourCollection.updateOne(
      { title: title },
      { $push: { list: data } }
    );
    console.log("mongodb result", result);
    // client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
    // return;
  }
}

// updateOne(
//   { _id: 1 },
//   { $push: { scores: 89 } }
// )
