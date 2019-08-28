import React from "react";
class Message extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    if (this.props.message.msgType === 'robot') return (
      <div class="row message-body">
        <div class="col-sm-12 message-main-receiver">
          <div class="receiver">
            <div class="message-text">{this.props.message.msgText}</div>
            <span class="message-time pull-right">Sun</span>
          </div>
        </div>
      </div>
  )
  else if (this.props.message.msgType === 'clientMsg') return (
    <div class="row message-body">
    <div class="col-sm-12 message-main-sender">
      <div class="sender">
        <div class="message-text">{this.props.message.msgText}</div>
        <span class="message-time pull-right">Sun</span>
      </div>
    </div>
  </div>
  );
  }
}
export default Message;