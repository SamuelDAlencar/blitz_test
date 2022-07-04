import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addTask } from '../redux/slices/tasksSlice';
import '../style/Home.css';
import Tasks from '../components/Tasks';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const [currTask, setCurrTask] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const { token } = useSelector(state => state.user);

  const handleChange = (event) => {
    setCurrTask(event.target.value);
  };

  const handleAddTask = async () => {
    await axios.post('http://localhost:3001/task', {
      content: currTask
    }, {
      headers: { 'Authorization': token }
    }).then((response) => {
      if (response.status === 201) {
        setTaskId(taskId + 1);
        dispatch(addTask({ id: taskId, subject: currTask }));
      }
    });
  };

  return (
    <>
      <Header />
      <main className='app_main'>
        <section className="addTask_section">
          <h3 className="main_h3">New Task</h3>
          <input onChange={handleChange} />
          <button
            onClick={handleAddTask}
            className='task_button'
          >Add task</button>
        </section>
        <Tasks />
      </main>
      <Footer />
    </>
  );
}

export default Home;
