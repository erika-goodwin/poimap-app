import HowItWorks from "../components/parts/HowItWorks";
import NestedLayout from "../components/layout/nestedLayout";
import LineUpList from "../components/parts/LineUpList";
import TopMenu from "../components/parts/TopMenu";

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