import { useState } from "react";
import { useDrop } from "react-dnd";
import LayoutHolder from "./layout-holder";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function MainHolder() {
  const [display, setDisplay] = useState([]);
  const [plus, setPlus] = useState(true);
  const [item, setItem] = useState(0);

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "main",
  //   drop: (count) => addToLayout(count),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver,
  //   }),
  // }));

  // const addToLayout = (count) => {
  //   let element = (
  //     <div className="row no-gutters" style={{ border: "1px solid black" }}>
  //       {Array.from({ length: count.count }).map((ite, index) => (
  //         <div className="col d-flex justify-content-center" key={index}>
  //           <LayoutHolder />
  //         </div>
  //       ))}
  //     </div>
  //   );
  //   setDisplay((display) => [...display, element]);
  // };

  const selectItem = (count) => {
    if (item === count) {
      setItem(0);
    } else {
      setItem(count);
    }
  };

  function addToDisplayArray() {
    if (item !== 0) {
      let element = (
        <div className="row no-gutters" style={{ border: "1px solid black" }}>
          {Array.from({ length: item }).map((ite, index) => (
            <div className="col d-flex justify-content-center" key={index}>
              <LayoutHolder />
            </div>
          ))}
        </div>
      );
      setDisplay((display) => [...display, element]);
    }
  }

  return (
    <>
      <div
        // ref={drop}
        className="container"
        style={{ border: "1px solid black", height: "100vh", width: "auto" }}
      >
        {display.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        <div className="row">
          {plus && (
            <div
              className="col d-flex justify-content-center"
              onClick={() => setPlus(false)}
            >
              <img
                src="https://static-00.iconduck.com/assets.00/plus-icon-2048x2048-z6v59bd6.png"
                alt="plus-sign"
                height="100px"
                width="100px"
              />
            </div>
          )}
          {!plus && (
            <div className="col">
              <div className="row">
                <div className="col" onClick={() => selectItem(1)}>
                  <SingleHolder count={1} select={item} />
                </div>
                <div className="col" onClick={() => selectItem(2)}>
                  <SingleHolder count={2} select={item} />
                </div>
                <div className="col" onClick={() => selectItem(3)}>
                  <SingleHolder count={3} select={item} />
                </div>
              </div>
            </div>
          )}
        </div>
        {!plus && (
          <div className="row">
            <Button
              className="col"
              variant="secondary"
              onClick={addToDisplayArray}
            >
              Add
            </Button>
            <Button
              className="col"
              variant="danger"
              onClick={() => setPlus(true)}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
      <Link to={{ pathname: "/export", state: display }}>Export</Link>
      <Button
        variant="primary"
        className="float-right"
        onClick={() => setDisplay([])}
        style={{zIndex: 1000000}}
      >
        Clear
      </Button>
    </>
  );
}

function SingleHolder({ count, select }) {
  return (
    <>
      <div className="row no-gutters">
        {Array.from({ length: count }).map((ite, index) => (
          <div
            className="col d-flex justify-content-center"
            key={index}
            style={{ border: select === count ? "1px solid blue" : null }}
          >
            <div
              style={{
                border: "1px solid black",
                height: "50px",
                width: "50px",
              }}
            >
              <img width="15px" height="15px" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainHolder;
