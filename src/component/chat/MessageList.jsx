import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
  
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="row message" id="conversation">
      {
          this.props.loading && <p>Loading...</p>
        }
        {
          this.props.messages.map((message, index) => <Message key={index} message={message} buttonPress={this.props.buttonPress} />)
        }
      </div>
    );
  }
}
export default MessageList;