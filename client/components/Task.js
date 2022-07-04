import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch  } from 'react-redux';
import {
  editTaskSubject, deleteTask,
  // editTaskStatus
} from '../redux/slices/tasksSlice';

function Task(props) {
  const { taskId, task } = props;
  const dispatch = useDispatch();

  const handleEditSubject = (e) => {
    const { id } = e.target.parentNode;
    dispatch(editTaskSubject({ id, subject: 'edited' }));
  };

  // const handleEditStatus = (e) => {
  //   const { id } = e.target;
  //   console.log(id);
  //   dispatch(editTaskStatus({ id, subject: 'edited' }));
  // };

  const handleDelete = (e) => {
    const { id } = e.target.parentNode;
    dispatch(deleteTask(id));
  };

  console.log('got into the task comp');
  return (
    <li className='task_li'>
      <p>
        {task.subject}
      </p>
      <section className='taskEditOptions_section' id={taskId}>
        <select className='taskStatus_select'>
          <option>Pending</option>
          <option>Done</option>
          <option>Ongoing</option>
        </select>
        <button className='task_button' onClick={handleEditSubject}>Edit</button>
        <button className='task_button' onClick={handleDelete}>Delete</button>
      </section>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    subject: PropTypes.string
  }),
  taskId: PropTypes.number,
};

export default Task;
