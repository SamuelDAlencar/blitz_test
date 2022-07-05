import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addTask, selectTasks } from '../redux/slices/tasksSlice';
import '../style/Home.css';
import Task from '../components/Task';
import axios from 'axios';
import { selectToken } from '../redux/slices/userSlice';

function Home() {
  const dispatch = useDispatch();
  const [currTask, setCurrTask] = useState('');
  const [taskId, setTaskId] = useState(1);
  const [renderTasks, setRenderTasks] = useState(false);
  const tasks = useSelector(selectTasks);
  const { token } = useSelector(selectToken);

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
        setRenderTasks(false);
        setTaskId(taskId + 1);
        dispatch(addTask({ id: taskId, subject: currTask }));
      }
    });
  };

  useEffect(() => {
    setRenderTasks(true);
  }, [taskId]);

  return (
    <>
      <Header />
      <main className='app_main'>
        <section className="addTask_section">
          <h2 className="main_h2">New Task</h2>
          <input onChange={handleChange} className='addTask_input' />
          <button
            onClick={() => handleAddTask()}
            className='task_button'
            disabled={currTask === ''}
          >Add task</button>
        </section>
        <ol className='tasks_ol'>
          <li className='tasksHeader_li'>
            <p style={{ borderRight: '1px solid black', width: '50%' }}>Task</p>
            <p style={{ borderLeft: '1px solid black', width: '50%' }}>Status/Options</p>
          </li>
          {renderTasks && tasks.map((task, i) => {
            return <Task key={i} taskId={task.id} task={task} />;
          })}
        </ol>
      </main>
      <Footer />
    </>
  );
}

export default Home;
