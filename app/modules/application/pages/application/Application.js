import React from "react";
import {connect} from "react-redux";
import "./application.styl";
import io from "socket.io-client";

import {
  setMessage,
  setId,
  initNewChat,
} from '../../actions';

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.io = io("http://localhost:3000", {
      transports: [ 'websocket', 'polling' ],
    });

  }

  componentDidMount() {
    this.io.once('your_data', (data) => this.props.setId(data.id));
  }

  renderMessages() {
    return null;
  }

  handleChange(e) {
    const value = e.target.value;
    const id = e.target.id;
    const state = this.state;
    
    state[id] = value;

    this.setState(state);
  }

  submit(e) {
    e.preventDefault();
    const state = this.state;
    state["main"] = "";

  }

  render() {
    console.log('this', this);
    return (
      <section className="chose-role-body">
        <h1>CHAT_ID: {this.props.my_id}</h1>
        <main>
          <div>
            {this.renderMessages()}
          </div>
        </main>
        <form onSubmit={this.submit}>
          <input id="main" value={this.state.main} onChange={this.handleChange} />
        </form>
      </section>
    );
  }
}

const MAP = state => {
  return {
    my_id: state.data.my_id
  };
}

const ACTIONS = {
  setMessage,
  setId,
  initNewChat,
};

export default connect(MAP, ACTIONS)(Application)