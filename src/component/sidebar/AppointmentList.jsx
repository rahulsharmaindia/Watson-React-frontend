import React from "react";
import Appointment from "./Appointment";
class AppointmentList extends React.Component {
  render() {
    return (
      <div class="row sideBar">
        <Appointment />
      </div>
    );
  }
}
export default AppointmentList;