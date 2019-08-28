import React from "react";
class SideHeader extends React.Component {
  render() {
    return (
      <div className="row heading">
        <div className="col-sm-3 col-xs-3 heading-avatar">
          <div className="heading-avatar-icon">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
          </div>
        </div>
        <div className="col-sm-1 col-xs-1  heading-dot  pull-right">
          <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
        </div>
        <div className="col-sm-2 col-xs-2 heading-compose  pull-right">
          <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
export default SideHeader;