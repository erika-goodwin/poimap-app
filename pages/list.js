import NestedLayout from "../components/layout/nestedLayout";
import TopMenu from "../components/parts/TopMenu";
import SignInBar from "../components/parts/SignInBar";
import SerchPoiList from "../components/parts/SerchPoiList";

export default function List() {
  return (
    <>
      <TopMenu />
      <SerchPoiList />
      <SignInBar />
    </>
  );
}

List.getLayout = function getLayout(page) {
  return (
    <layout>
      <NestedLayout>{page}</NestedLayout>
    </layout>
  );
};
