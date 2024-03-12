import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import click2 from "../assets/click2.wav"

const playSound2 = () => {
    let audio1 = new Audio(click2);
    audio1.volume = 0.3; 
    audio1.play()
}
const CreateForm = (props) => {
    const navigate = useNavigate() // redirection
    const {taskList, setTaskList} = props;
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState({})





    const submitHandler = (e) => {
        e.preventDefault()
        const newTask = {taskTitle, description, price, location}
        axios.post('http://localhost:8000/api/addTask', newTask)
            .then((res) => {
                console.log(res);
                setTaskList([...taskList, res.data])
                navigate('/')
                
            })
            .catch((err)=> {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    };


    return (
        <div>
            <div className="display-all-container">
                <div className="display-all-link">
                    <Link to="/" onClick={playSound2}>Home</Link>
                </div>
                <div className="display-all-title">
                    <h1> New Task </h1>
                </div>
                <div className="display-all-link">
                    <Link to="/newTask" onClick={playSound2}>New Task</Link>
                </div>
            </div>
            <form onSubmit={submitHandler} className="task-card2">
                <div style={{ padding: '10px', margin: '10px', fontSize: '24px'}}>
                    <label> Title: </label>
                    <br />
                    <input type="text" onChange={(e)=> setTaskTitle(e.target.value)} value={taskTitle}/>
                    {
                        errors.taskTitle?
                        <p> {errors.taskTitle.message} </p>:
                        null
                    }
                </div>
                <div style={{ padding: '10px', margin: '10px', fontSize: '24px'}}>
                    <label> Description: </label>
                    <br />
                    <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description}/>
                    {
                        errors.description?
                        <p> {errors.description.message} </p>:
                        null
                    }
                </div>
                <div style={{ padding: '10px', margin: '10px', fontSize: '24px'}}>
                    <label> Price: </label>
                    <br />
                    <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/>
                    {
                        errors.price?
                        <p> {errors.price.message} </p>:
                        null
                    }
                </div>
                <div style={{ padding: '10px', margin: '10px', fontSize: '24px'}}>
                    <label> Location: </label>
                    <br />
                    <input type="text" onChange={(e)=> setLocation(e.target.value)} value={location}/>
                    {
                        errors.location?
                        <p> {errors.location.message} </p>:
                        null
                    }
                </div>

                <button className="button" type="submit" onClick={playSound2} > Submit </button>

            </form>

        </div>
    )
}
export default CreateForm