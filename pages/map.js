import MapTopMenu from "../components/parts/map/parts/MapTopMenu";
import NestedMapLayout from "../components/layout/nestedMapLayout";
import MapCreate from "../components/parts/map/MapCreate";
import MapList from "../components/parts/map/mapList/MapList";
import MapBox from "../components/parts/map/mapbox/MapBox";

import { connectToDatabase } from "../util/mongodb";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Script from "next/script";
import MapBoxex from "../components/parts/map/mapbox/MapBoxEx";

import { SignedIn } from "@clerk/nextjs";

function Map({ datas }) {
  const [showCreateList, setShowCreateList] = useState(false);
  const [showList, setShowList] = useState(true);




  const router = useRouter();
  const queryKeyword = router.query;

  // console.log('dataList', datas)
  return (
    <>
      <MapBox dataList={datas} />
      {/* <MapBoxex dataList={datas} /> */}
      <MapTopMenu
        setShowCreateList={setShowCreateList}
        setShowList={setShowList}
      />
      {showCreateList && <MapCreate />}
      {showList && <MapList dataList={datas} />}
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
