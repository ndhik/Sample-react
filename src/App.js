import React, { Component } from 'react';
import Form from './Components/Form/Form';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { id: '123908aaa', content: 'take a bath', completed: false },
      { id: '123908aba', content: 'shave my beard', completed: false }
    ]
  }

  addTaskHandler = (event) => {
    const tasks = [...this.state.tasks];
    console.log(event);
    tasks.splice(0, 0 , event);
    this.setState({ tasks: tasks });
  }

  deleteTaskHandler = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks.splice(taskIndex, 1);
    this.setState({ tasks: tasks });
  }

  completeTaskHandler = (id) => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === id);
    const task = {...this.state.tasks[taskIndex]};
    task.completed = true;
    console.log(task);
    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;
    console.log(tasks);
    this.setState({ tasks: tasks });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className="App">
        <Form save={(event) => this.addTaskHandler(event)}/>
        <TaskList tasks={this.state.tasks} delete={(id) => this.deleteTaskHandler(id)} done={(id) => this.completeTaskHandler(id)}/>
      </div>
    );
  }
}

export default App;
