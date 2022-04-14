import Image from "next/image";
import Link from "next/link";
import LineUpListCard from "./LineUpListCard";

function LineUpList({ dataList }) {
  return (
    <div className="bg-soft-gray p-4">
      <Link href="/list" passHref>
        <div className="bg-white rounded-3xl p-2 font-confortaa md:w-2/3 mx-auto lg:w-[43rem]">
          <div className="relative ">
            <h2 className="p-10 font-lato font-medium text-2xl">Lineup</h2>
            <div className="absolute right-0 top-0">
              <Image
                src="/dreamer.svg"
                alt="dreamer Logo"
                width={200}
                height={130}
              />
            </div>
          </div>
          <div className="p-2">
            <LineUpListCard item={dataList[0]} />
            <LineUpListCard item={dataList[1]} />
          </div>
          <div className="p-1 text-center">
            
            <a src="" alt="" className="font-lato">
              show more
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LineUpList;
