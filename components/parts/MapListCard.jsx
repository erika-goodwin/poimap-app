function MapListCard({ item }) {
  console.log("MapListCard // item ", item);
  return (
    <div className="p-2 ?">
      <div className="w-full mb-2 p-1 flex items-center border border-cream-yellow rounded-md">
        <div className="mr-2 ml-2 p-1">icon</div>
        <div className="w-full p-2">
          <h2 className="font-confortaa text-lg font-semibold">{item.title}</h2>
          <p className="font-lato">{item.list.length} pins, Location</p>
        </div>
      </div>
    </div>
  );
}

export default MapListCard;
