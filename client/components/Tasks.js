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
    <ol className='tasks_ol'>
      <li className='tasksHeader_li'>
        <p>Task</p>
        <p>Status/Options</p>
      </li>
      {tasks.map((task, i) => {
        return (
          <li key={i} className='task_li'>
            <p onClick={() => handleEditTask(i + 1)}>
              {task.subject}
            </p>
            <section className='taskEditOptions_section'>
              <select className='taskStatus_select'>
                <option>Pending</option>
                <option>Done</option>
                <option>Ongoing</option>
              </select>
              <button className='task_button'>Edit</button>
              <button className='task_button'>Delete</button>
            </section>
          </li>
        );
      })}
    </ol>
  );
}

export default Tasks;
