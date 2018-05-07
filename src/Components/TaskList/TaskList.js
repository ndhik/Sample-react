import React from 'react';
import Moment from 'react-moment';
import './TaskList.css';

const tasklist = (props) => {
  return (
    <div className="TaskList">
      { props.tasks.length > 0 ? props.tasks.map(task => {
        const classes = ['Task'];
        if (task.completed) {
          classes.push('Done')
        }
        return (
          <div className={classes.join(' ')} key={task.id}>
            <span className="Content">{ 'I would ' + task.content} { task.createdAt ? (<Moment fromNow>{task.createdAt}</Moment>) : null}</span>
            { task.completed ? 
              null :
                <div className="Actions">
                  <button className="Button" onClick={(id) => props.done(task.id)}>I did it!</button>
                  <button className="Button" onClick={(id) => props.delete(task.id)}>Nevermind</button>
                </div>
            }
            { task.completed.length > 0 ? 
              <div>waw</div> : null
            }
          </div>
        )
      }) : 
      <div className="Empty">Add new task</div> }
    </div>
  );
}

export default tasklist;