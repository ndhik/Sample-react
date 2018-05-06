import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    newContent: ''
  }

  updateContent = (event) => {
    this.setState({ newContent: event.target.value });
  }

  onSave = () => {
    if (this.state.newContent) {
      this.props.save({ id: Math.floor(Math.random() * 1000), content: this.state.newContent, completed: false });
      this.setState({ newContent: '' });
    }
  }

  render () {
    return (
      <div className="Form">
        <span>I will </span>
        <input type="text" placeholder="learn React JS" value={this.state.newContent} onChange={(event) => this.updateContent(event)}/>
        <button className="Button" onClick={() => this.onSave()}>later</button>
      </div>
    );
  }
}

export default Form;