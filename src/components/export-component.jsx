import { useLocation } from "react-router-dom";

function ExportComponent() {
  const location = useLocation();
  const state_display = location.state;
  return (
    <div dangerouslySetInnerHTML={state_display}></div>
  )
}

export default ExportComponent;
