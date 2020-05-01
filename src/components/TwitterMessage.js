import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ''};
  }

  handleChange = (e) => {
    if(e.target.value.length < 280){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               name="message"
               id="message"
               onChange={event => this.handleChange(event) }
               value={this.state.message}
               />
             <p>{280 - this.state.message.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
