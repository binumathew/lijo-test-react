import ElementComps from "./element-comps";
import Holder from "./holder";
import MainHolder from "./main-holder";

function Main() {
  return (
    <>
      <div className="row">
        <div className="col" style={{ border: "1px solid black" }}>
          <Holder />
        </div>
        <div className="col" style={{ border: "1px solid black" }}>
          <MainHolder />
        </div>
        <div className="col" style={{ border: "1px solid black" }}>
          <ElementComps />
        </div>
      </div>
    </>
  );
}
export default Main;
