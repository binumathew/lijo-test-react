import { useState } from "react";
import { useDrop } from "react-dnd";
import LayoutHolder from "./layout-holder";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

function MainHolder() {
  const [display, setDisplay] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "main",
    drop: (count) => addToLayout(count),
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));

  const addToLayout = (count) => {
    let element = (
      <div className="row no-gutters" style={{border: '1px solid black'}}>
        {Array.from({ length: count.count }).map((ite, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <LayoutHolder />
          </div>
        ))}
      </div>
    );
    setDisplay((display) => [...display, element]);
  };

  return (
    <>
      <div
        ref={drop}
        style={{ border: "1px solid black", height: "100vh", width: "auto" }}
      >
        {display.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <Link to={{pathname: '/export', state: display}}>Export</Link>
      <Button type="primary" className="float-right" onClick={() => setDisplay([])}>Clear</Button>
    </>
  );
}

export default MainHolder;
