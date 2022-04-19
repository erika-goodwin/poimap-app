import MapTopMenu from "../components/parts/map/parts/MapTopMenu";
import MapCreate from "../components/parts/map/mapCreate/MapCreate";
import MapList from "../components/parts/map/mapList/MapList";
import MapBox from "../components/parts/map/mapbox/MapBox";

import { connectToDatabase } from "../util/mongodb";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

function Map({ datas }) {
  const [showCreateList, setShowCreateList] = useState(false);
  const [showList, setShowList] = useState(true);

  const [dataList, setDataList] = useState(datas);

  const router = useRouter();
  const queryKeyword = router.query;

  useEffect(() => {
    console.log("showList", showList);
  }, [showList]);
  useEffect(() => {
    console.log("datas: ", datas);
  }, [datas]);
  useEffect(() => {
    console.log("showCreateList", showCreateList);
  }, [showCreateList]);

  return (
    <>
      <MapBox
        dataList={dataList}
        setDataList={setDataList}
        setShowList={setShowList}
      />

      <MapTopMenu
        setShowCreateList={setShowCreateList}
        setShowList={setShowList}
      />
      {showCreateList && (
        <MapCreate
          dataList={dataList}
          setDataList={setDataList}
          setShowCreateList={setShowCreateList}
          setShowList={setShowList}
        />
      )}

      {showList && dataList && (
        <MapList
          dataList={dataList}
          setDataList={setDataList}
          setShowList={setShowList}
        />
      )}
    </>
  );
}
export default Map;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("locationList")
    .find({})
    // .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      datas: JSON.parse(JSON.stringify(data)),
    },
  };
}
