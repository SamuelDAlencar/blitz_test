import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTaskSubject, deleteTask } from '../redux/slices/tasksSlice';
import { selectToken } from '../redux/slices/userSlice';

function Task(props) {
  const { taskId, task } = props;
  const dispatch = useDispatch();
  const { token } = useSelector(selectToken);

  const handleEditSubject = (e) => {
    const { id } = e.target.parentNode;
    dispatch(editTaskSubject({ id, subject: 'edited' }));
  };

  const handleEditStatus = async (e) => {
    const { id } = e.target.parentElement;
    const { value } = e.target;

    await axios.put(`http://localhost:3001/task/${parseInt(id)}`, {
      type: 'status',
      update: value
    }, {
      headers: { 'Authorization': token }
    });
  };

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
        <select className='taskStatus_select' onChange={handleEditStatus}>
          <option value='pending'>Pending</option>
          <option value='done'>Done</option>
          <option value='ongoing'>Ongoing</option>
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
