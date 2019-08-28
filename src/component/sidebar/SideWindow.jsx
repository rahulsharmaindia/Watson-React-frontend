import React from "react";
import SideHeader from "./SideHeader";
import SearchBox from "./SearchBox";
import AppointmentList from "./AppointmentList";
class SideWindow extends React.Component {
  render() {
    return (
      <div class="col-sm-4 side">
        <div class="side-one">
          <SideHeader />
          <SearchBox />
          <AppointmentList />
        </div>
      </div>
    );
  }
}
export default SideWindow;