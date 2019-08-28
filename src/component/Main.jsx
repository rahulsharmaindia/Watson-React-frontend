import React from "react";
import SideWindow from "./sidebar/SideWindow";
import ChatWindow from "./chat/ChatWindow";
class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="container app">
        <div class="row app-one">
          <SideWindow />
          <ChatWindow />
        </div>
      </div>
    );
  }
}
export default Main;