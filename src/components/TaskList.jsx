// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, selectTasks } from '../features/taskSlice';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
