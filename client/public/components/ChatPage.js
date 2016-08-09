import React, { Component } from 'react';
import socket from 'socket.io-client';

export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      socket: io()
    }

  }

  componentDidMount() {
    // const socket= io()
    // console.log(socket, 'this is socket')
    
  }

  handleSubmit(e) {
    e.preventDefault()
      this.state.socket.emit('new message', this.state.value);
    this.setState({
      value: ''
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return(
      <div className='chat'>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input id="m" value={this.state.value} onChange={this.handleChange.bind(this)} type='text'/>
          </form>
        </div>
      </div>
    )
  }
}