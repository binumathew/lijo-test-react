import { useLocation } from "react-router-dom";

function ExportComponent() {
  const location = useLocation();
  const state_display = location.state;
  return (
    {...state_display}
  )
}

export default ExportComponent;
