import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../redux/slices/tasksSlice';

function Tasks() {
  const tasks = useSelector(selectTasks);
  console.log(tasks);

  return (
    <ol>
      {tasks.map((task, i) => <li key={ i }>{task.subject}</li>)}
    </ol>
  );
}

export default Tasks;
