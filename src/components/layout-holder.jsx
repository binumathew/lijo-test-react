import { useDrop } from "react-dnd";
import { list } from "../util/list";
import { useState } from "react";

function LayoutHolder() {
  const [singleList, setSingleList] = useState({});
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "list",
    drop: (item) => addToLayout(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));

  const addToLayout = (id) => {
    const compList = list.filter((item) => id === item.id);
    setSingleList(compList[0]);
  };
  return (
    <>
      <div
        ref={drop}
        style={{ border: "1px solid black", height: "100px", width: "100px" }}
      >
        {
          <>
            <img
              src={singleList.icon}
              alt={singleList.name}
              width="15px"
              height="15px"
            />
            <span>{singleList.name}</span>
          </>
        }
      </div>
    </>
  );
}

export default LayoutHolder;
