import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';  
import {useNavigate} from 'react-router-dom' 
import {Link} from 'react-router-dom'
import click2 from "../assets/click2.wav"

const playSound = () => {
    let audio1 = new Audio(click2);
    audio1.volume = 0.3; 
    audio1.play()
}
const ViewOne = (prop) => {
    const navigate = useNavigate()
    const [task, setTask] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/findOneTask/${id}`)
            .then((res) => {
                console.log(res);
                setTask(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteTask/${id}`)
        .then(() => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="container">
            <div className="display-all-container">
                <div className="display-all-link">
                    <Link to="/" onClick={playSound}>Home</Link>
                </div>
                <div className="display-all-title">
                    <h1>Details</h1>
                </div>
                <div className="display-all-link">
                    <Link to="/newTask" onClick={playSound}>New Task</Link>
                </div>
            </div>
            <div className="task-card2">
                <h2>  {task.taskTitle} </h2>
                <h3> $ {task.price} </h3>
                <h3>  {task.location} </h3>
                <h3>  {task.description} </h3>
                <button className="button" onClick={deleteHandler} > Delete </button>
            </div>

        </div>
    )
}

export default ViewOne
