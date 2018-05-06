import React from 'react';
import './TaskList.css';

const tasklist = (props) => {
  return (
    <div className="TaskList">
      {props.tasks.map(task => {
        const classes = ['Task'];
        console.log(task);
        if (task.completed) {
          classes.push('Done')
        }
        return (
          <div className={classes.join(' ')} key={task.id}>
            <span className="Content">{ 'I will ' + task.content}</span>
            { task.completed ? 
              null :
                <div className="Actions">
                  <button className="Button" onClick={(id) => props.done(task.id)}>I did it!</button>
                  <button className="Button" onClick={(id) => props.delete(task.id)}>Nevermind</button>
                </div>
            }
          </div>
        )
      })}
    </div>
  );
}

export default tasklist;