import { useState, useRef, useEffect } from "react";
import MapListNestedCard from "./MapListNestedCard";
import axios from "axios";
import { useUser, SignIn } from "@clerk/clerk-react";

function MapListListCard({ item, setData }) {
  // console.log("MapListCardNested // item ", item);
  const [deleteName, setDeleteName] = useState("");

    const { isSignedIn, user } = useUser();
    const userCheck = user.id == item.createdUser && isSignedIn


  useEffect(() => {
    const deleteHandler = async () => {
      const id = item._id;
      // const titleList = item.title;
      const deletingName = deleteName;

      const deleteData = {
        id,
        deletingName,
      };

      await axios
        .post("/api/deletingOneOfList", deleteData)
        .then((res) => {
          console.log(res.status);
          alert("Success");
          setData((prev) => {
            return prev.map((item) => {
              if (item._id === id) {
                return item.list.filter((subItem) => {
                  console.log("TTT", subItem.name);
                  console.log("XXX", deleteName);
                  return subItem.name !== deleteName;
                });
              }

              return item;
            });
          });
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
            userCheck={userCheck}
          />
        ))}
      </div>
    </>
  );
}

export default MapListListCard;
