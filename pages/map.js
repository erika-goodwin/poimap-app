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



function Map({ datas }) {
  const [showCreateList, setShowCreateList] = useState(false);
  const [showList, setShowList] = useState(true);

  const router = useRouter();
  const queryKeyword = router.query;

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

Map.getLayout = function getLayout(page) {
  return (

    <layout>
      <NestedMapLayout>{page}</NestedMapLayout>
      <Script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></Script>
      <Script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js" />
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

  return {
    props: {
      datas: JSON.parse(JSON.stringify(data)),
    },
  };
}
