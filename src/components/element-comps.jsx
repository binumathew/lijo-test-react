import { ListGroup } from "react-bootstrap";
import { list } from "../util/list";
import { useDrag } from "react-dnd";

function ElementComps() {
  return (
    <>
      <ListGroup>
        {list.map((item) => {
          return <SingleElement item={item} key={item.id}></SingleElement>;
        })}
      </ListGroup>
    </>
  );
}

function SingleElement({ item }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "list",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging,
    }),
  }));
  return (
    <ListGroup.Item ref={drag}>
      <img src={item.icon} alt={item.name} width="15px" height="15px" />
      <span>{item.name}</span>
    </ListGroup.Item>
  );
}

export default ElementComps;
