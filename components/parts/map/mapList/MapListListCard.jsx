import { useState, useRef, useEffect } from "react";
import MapListNestedCard from "./MapListNestedCard";
import axios from "axios";

function MapListListCard({ item, setDataList }) {
  const [deleteName, setDeleteName] = useState("");

  useEffect(() => {
    const deleteHandler = async () => {
      const id = item._id;
      // const titleList = item.title;
      const deletingName = deleteName;

      const deleteData = {
        id,
        deletingName
      };

      setDataList((prev) => {
        return prev.map((itemList) => {
          if(itemList._id === id){
            const filteredList =  itemList.list.filter(item => {
              if(item.name === deleteName){
                return false
              }
              return true
            })
            return { ...itemList, list: filteredList }
          }
          return itemList
        });

      });

      await axios
        .post("/api/deletingOneOfList", deleteData)
        .then((res) => {
          console.log(res.status);
          alert("Success");
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save");
        });
    };

    if (deleteName) {
      deleteHandler();
    }
  }, [deleteName]);

  return (
    <>
      {/* cursor-pointer */}
      <div className="p-2 mb-2  ">
        {item?.list.map((item) => (
          <MapListNestedCard
            item={item}
            key={item.name}
            setDeleteName={setDeleteName}
          />
        ))}
      </div>
    </>
  );
}

export default MapListListCard;
