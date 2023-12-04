import LayoutHolder from "./layout-holder";
import { useDrag } from "react-dnd";

function Holder() {
  return (
    <>
      <div className="container">
        <SingleHolder count={1} />
        <SingleHolder count={2} />
        <SingleHolder count={3} />
      </div>
    </>
  );
}

function SingleHolder({ count }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "main",
    item: { count: count },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  }));
  return (
    <>
      <div className="row no-gutters" ref={drag}>
        {Array.from({ length: count }).map((ite, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div style={{ border: "1px solid black", height: "100px", width: "100px" }}>
              <img width="15px"
              height="15px" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Holder;
