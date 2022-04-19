import HowItWorks from "../components/parts/index/HowItWorks";
import LineUpList from "../components/parts/index/LineUpList";
import TopMenu from "../components/parts/share/TopMenu";
import { connectToDatabase } from "../util/mongodb";


export default function Home({ datas }) {
  return (
    <>
      <TopMenu />
      <LineUpList dataList={datas} />
      <HowItWorks />
    </>
  );
}

// Home.getLayout = function getLayout(page) {
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