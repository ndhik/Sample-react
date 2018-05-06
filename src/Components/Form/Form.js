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
      this.props.save({ id: Math.floor(Math.random() * 1000), content: this.state.newContent, completed: false, createdAt: new Date().toISOString() });
      this.setState({ newContent: '' });
    }
  }

  onEnter = (keyCode) => {
    if (keyCode === 13) {
      this.onSave();
    }
  }

  render () {
    return (
      <div className="Form">
        <div className="Row">
          <span>I will </span>
          <input type="text" placeholder="learn React JS" onKeyPress={(event) => this.onEnter(event.which)} value={this.state.newContent} onChange={(event) => this.updateContent(event)}/>
        </div>
        <div className="Row">
          <small>Press enter to save</small>
        </div>
      </div>
    );
  }
}

export default Form;