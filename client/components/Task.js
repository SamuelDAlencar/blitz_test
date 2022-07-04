import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editTaskSubject, deleteTask,
  // editTaskStatus
} from '../redux/slices/tasksSlice';
import { selectToken } from '../redux/slices/userSlice';

function Task(props) {
  const { taskId, task } = props;
  const dispatch = useDispatch();
  const { token } = useSelector(selectToken);

  const handleEditSubject = (e) => {
    const { id } = e.target.parentNode;
    dispatch(editTaskSubject({ id, subject: 'edited' }));
  };

  // const handleEditStatus = (e) => {
  //   const { id } = e.target;
  //   console.log(id);
  //   dispatch(editTaskStatus({ id, subject: 'edited' }));
  // };

  const handleDelete = async (e) => {
    const { id } = e.target.parentNode;

    await axios.delete(`http://localhost:3001/task/${parseInt(id)}`, {
      headers: { 'Authorization': token }
    }, {}).then((response) => {
      if (response.status === 204) {
        dispatch(deleteTask(id));
      }
    });
  };

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
