import React, { Component } from 'react';
import Form from './Components/Form/Form';
import TaskList from './Components/TaskList/TaskList';
import Overview from './Components/Overview/Overview';
import './App.css';

class App extends Component {
  state = {
    tasks: [],
    errors: [],
    URL: 'http://206.189.44.21:1337/task'
  }

  

  componentDidMount = () => {
    this.fetching();
  }

  fetching = () => {
    fetch(this.state.URL)
    .then(res => {
      return res.json();
    })
      .then(data => {
        const tasks = data.sort(this.sortData)
        this.setState({tasks: tasks});
      })
  } 

  sortData = (a, b) => {
    let c = 0;
    const _a = new Date(a.createdAt);
    const _b = new Date(b.createdAt);
    _a > _b ? c = 1 : c = -1;
    return c * -1;
  }

  addTaskHandler = (event) => {
    fetch(this.state.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: event.content,
        completed: event.completed
      })
    }).then(res => {
      return res.json();
    }).then(data => {
      const tasks = [...this.state.tasks];
      tasks.splice(0, 0, data);
      this.setState({ tasks: tasks });
    })
  }

  deleteTaskHandler = (id) => {
    fetch(`${this.state.URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.fetching();
      })
  }

  completeTaskHandler = (id) => {
    const updatedTask = {...this.state.tasks.find(task => task.id === id)};
    updatedTask.completed = true;
    console.log(updatedTask);
    fetch(`${this.state.URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
      .then(res => res.json())
      .then(data => {
        this.fetching();
      })
  }

  render() {
    const total = this.state.tasks.length;
    const open = this.state.tasks.filter(task => task.completed === false);
    const closed = this.state.tasks.filter(task => task.completed === true);
    return (
      <div className="App">
        <Form save={(event) => this.addTaskHandler(event)}/>
        <Overview total={total} open={open.length} closed={closed.length}/>
        <TaskList tasks={this.state.tasks} delete={(id) => this.deleteTaskHandler(id)} done={(id) => this.completeTaskHandler(id)}/>
      </div>
    );
  }
}

export default App;
