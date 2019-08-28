import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import Reply from "./Reply";
import format from 'date-fns/format';

var io = require('socket.io-client')
let socket = undefined
const socketUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : ""
socket = io.connect(socketUrl, { forceNew: true })

class ChatWindow extends React.Component {

  state = {
    messages: [],
    inputText: "",
    preventInput: false,
    context: {},
    initialLoad: true
  }
  componentDidMount() {
    socket.on('serverMessage', (response) => {
      this.setState({
        context: response.context,
        preventInput: response.context.preventInput ? true : false,
        initialLoad:false
      })
      if (response.output.text.length > 1) {
        this.newRobotMessageList(response)
      }
      else {
        this.newRobotMessage(response.output.text[0])
      }
    })
    socket.on('connect', () => {
      socket.emit('greeting')
    })
  }
  newClientMessage(msgText = "test") {
    socket.emit('clientMessage', {
      msgText: msgText,
      msgType: 'clientMsg',
      context: this.state.context || {}
    },
      this.setMessage.bind(this)
    )
  }
  setMessage(msgOb) {
    this.scrollToBottom()
    this.setState({
      messages: [
        ...this.state.messages,
        msgOb
      ],
      text: ""
    })
    this.scrollToBottom()
  }
  submitMsg(msgText) {
    this.newClientMessage(msgText)
  }
  newRobotMessage(msgText, delay = 800) {
    setTimeout(() => {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            msgText: msgText,
            timestamp: format(new Date(), 'x'),
            msgType: 'robot',
            buttons: this.state.context.buttons || undefined,
            link: this.state.context.link || undefined
          }
        ],

      })
      this.scrollToBottom()
    }, delay);
  }
  newRobotMessageList(response, delay = 800) {
    const newMessages = response.output.text.map((text, index, arr) => {
      if (index === arr.length - 1) return {
        msgText: text,
        timestamp: format(new Date(), 'x'),
        msgType: 'robot',
        buttons: this.state.context.buttons || undefined,
      }
      else return {
        msgText: text,
        timestamp: format(new Date(), 'x'),
        msgType: 'robot',
        buttons: undefined,
        link: this.state.context.link || undefined
      }
    })
    console.log(newMessages)
    newMessages.forEach((message, i) => {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            message
          ],
        })
        this.scrollToBottom()
      }, 500 + (1000 * i));
    })
  }
  submitInput(text) {
    this.newClientMessage(text)
  }
  scrollToBottom(){
    const chatWindowEl = document.getElementsByClassName('message')[0]
        if(chatWindowEl) {
          chatWindowEl.scrollTop = chatWindowEl.scrollHeight
        }
}
  render() {
    return (
      <div class="col-sm-8 conversation">
        <ChatHeader />
        <MessageList messages={this.state.messages} buttonPress={this.submitInput.bind(this)} loading={this.state.initialLoad}/>
        <Reply text={this.state.inputText} submitInput={this.submitInput.bind(this)} prevent={this.state.preventInput}/>
      </div>
    );
  }
}
export default ChatWindow;