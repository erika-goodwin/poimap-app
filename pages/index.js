import HowItWorks from "../components/parts/index/HowItWorks";
import NestedLayout from "../components/layout/nestedLayout";
import LineUpList from "../components/parts/index/LineUpList";
import TopMenu from "../components/parts/share/TopMenu";

export default function Home() {
  return (
    <>
      <TopMenu />
      <LineUpList />
      <HowItWorks />
    </>
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <layout>
      <NestedLayout>{page}</NestedLayout>
    </layout>
  )
}