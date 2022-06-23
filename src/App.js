import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { addTask } from './redux/slices/tasksSlice';
import './style/App.css';
import Tasks from './components/Task';

function App() {
  const dispatch = useDispatch();
  const [currTask, setCurrTask] = useState([]);

  const handleChange = (event) => {
    setCurrTask(event.target.value);
  };

  const handleAddTask = () => {
    dispatch(addTask({ id: 1, subject: currTask }));
  };

  return (
    <>
      <Header />
      <main>
        <section className="addTask_section">
          <h3>New Task</h3>
          <input onChange={handleChange} />
          <button
            onClick={() => handleAddTask()}
          >Add task</button>
        </section>
        <section className="ongoingTasks_section">
          <h4>Ongoing</h4>
          <Tasks />
        </section>
        <section className="doneTasks_section">
          <h4>Done</h4>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
