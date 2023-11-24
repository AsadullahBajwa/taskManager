// src/components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), text: taskText }));
    setTaskText('');
  };

  return (
    <div>
      <input type="text" value={taskText} onChange={e => setTaskText(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
