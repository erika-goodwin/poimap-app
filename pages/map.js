import MapCompo from "../components/parts/MapCompo";
import MapTopMenu from "../components/parts/MapTopMenu";
import NestedMapLayout from "../components/layout/nestedMapLayout";

// import { connectToDatabase } from "../util/mongodb";

function map() {
  return (
    <>
      <MapTopMenu />
      <MapCompo />
    </>
  );
}
export default map;

map.getLayout = function getLayout(page) {
  return (
    <layout>
      <NestedMapLayout>{page}</NestedMapLayout>
    </layout>
  );
};

// export async function getServerSideProps() {
//   console.log("getServerSideProps()");
//   const { db } = await connectToDatabase();
//   const movies = await db
//     .collection("movies")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
//   return {
//     props: {
//       movies: JSON.parse(JSON.stringify(movies)),
//     },
//   };
// }
