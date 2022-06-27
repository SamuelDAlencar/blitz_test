import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, editTask } from '../redux/slices/tasksSlice';

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const handleEditTask = (id) => {
    dispatch(editTask({ id, subject: 'edited' }));
  };

  return (
    <ol>
      {tasks.map((task, i) => {
        return (
          <li key={i}>{task.subject}
            <button onClick={() => handleEditTask(i + 1)}>
              Edit
            </button>
            <input type="checkbox" />
          </li>
        );
      })}
    </ol>
  );
}

export default Tasks;
