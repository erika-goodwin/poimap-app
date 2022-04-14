import NestedLayout from "../components/layout/nestedLayout";
import TopMenu from "../components/parts/share/TopMenu";
import SignInBar from "../components/parts/list/SignInBar";
import SerchPoiList from "../components/parts/list/SerchPoiList";
import { connectToDatabase } from "../util/mongodb";

export default function List({ datas }) {
  return (
    <>
      <TopMenu />
      <SerchPoiList dataList={datas} />
      <SignInBar />
    </>
  );
}

// List.getLayout = function getLayout(page) {
//   return (

//       <layout>
//         <NestedLayout>{page}</NestedLayout>
//       </layout>

//   );
// };

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
