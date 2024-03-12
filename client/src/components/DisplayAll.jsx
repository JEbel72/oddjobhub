import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import click2 from "../assets/click2.wav"

const playSound = () => {
    let audio1 = new Audio(click2);
    audio1.volume = 0.3; 
    audio1.play()
}



const DisplayAll = (props) => {
    const { taskList, setTaskList } = props;
        


    useEffect(() => {
        axios.get('http://localhost:8000/api/findAllTasks')
            .then((response) => {
                console.log(response.data);
                setTaskList(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="display-all-container">
                <div className="display-all-link">
                    <Link to="/" onClick={playSound}>Home</Link>
                </div>
                <div className="display-all-title">
                    <h1>Odd Job Hub</h1>
                </div>
                <div className="display-all-link">
                    <Link to="/newTask" onClick={playSound}>New Task</Link>
                </div>
            </div>
            <div className='alltasks'>

            
            {taskList.map((task) => (
                <div key={task._id} className="task-card">
                    <h4>{task.taskTitle}</h4>
                    <h5>{task.location}</h5>
                    <h5>{task.price}</h5>
                    <h6>{task.description}</h6>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="button2"><Link to={`/edit/${task._id}`} onClick={playSound}>Edit</Link></div>
                        <div className="button2"><Link to={`/task/${task._id}`} onClick={playSound}>Details</Link></div>
                    </div>
                </div>
            ))}

            </div>
        </div>
    );
};



export default DisplayAll