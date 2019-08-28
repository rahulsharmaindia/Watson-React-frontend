import React from "react";
class Reply extends React.Component {
  state = {
    text: ""
  };
  submit(e) {
    e.preventDefault();
    this.props.submitInput(this.state.text);
    this.setState({ text: "" });
  }
  render() {
    return (
      <div class="row reply">
        <div class="col-sm-1 col-xs-1 reply-emojis">
          <i class="fa fa-image fa-2x" />
        </div>
        <div class="col-sm-9 col-xs-9 reply-main">
          <form onSubmit={this.submit.bind(this)} autoComplete="off">
            <input
              class="form-control"
              rows="1"
              id="comment"
              disabled={this.props.prevent} 
              placeholder={
                this.props.prevent
                  ? "Please Wait..."
                  : "Please Enter your message."
              }
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </form>
        </div>
        <div class="col-sm-1 col-xs-1 reply-recording">
          <i class="fa fa-microphone fa-2x" aria-hidden="true" />
        </div>
        <div
          class="col-sm-1 col-xs-1 reply-send"
          onClick={this.submit.bind(this)}
        >
          <i class="fa fa-send fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
export default Reply;
