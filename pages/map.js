import MapCompo from "../components/parts/MapCompo";
import MapTopMenu from "../components/parts/MapTopMenu";
import NestedMapLayout from "../components/layout/nestedMapLayout";
import MapAddingNewList from "../components/parts/MapAddingNewList";
import MapList from "../components/parts/MapList";

import { connectToDatabase } from "../util/mongodb";
import MapBox from "../components/parts/MapBox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function Map({ datas }) {
  const [showCreate, setShowCreate] = useState(false);
  const [showList, setShowList] = useState(true);

  const router = useRouter();
  const queryKeyword = router.query;

  return (
    <>
      <MapTopMenu setShowCreate={setShowCreate} setShowList={setShowList} />
      {showCreate && <MapAddingNewList />}
      {showList && <MapList dataList={datas} />}
    </>
  );
}
export default Map;

Map.getLayout = function getLayout(page) {
  return (
    <layout>
      <NestedMapLayout>{page}</NestedMapLayout>
    </layout>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("locationList")
    .find({})
    // .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  console.log("data", data);

  return {
    props: {
      datas: JSON.parse(JSON.stringify(data)),
    },
  };
}
