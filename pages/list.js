import NestedLayout from "../components/layout/nestedLayout";
import TopMenu from "../components/parts/share/TopMenu";
import SignInBar from "../components/parts/list/SignInBar";
import SerchPoiList from "../components/parts/list/SerchPoiList";


export default function List() {
  return (
    <>
      <TopMenu />
      <SerchPoiList />
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
