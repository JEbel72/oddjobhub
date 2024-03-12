import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom'; 
import {Link} from 'react-router-dom'
import click2 from "../assets/click2.wav"

const playSound = () => {
    let audio1 = new Audio(click2);
    audio1.volume = 0.3; 
    audio1.play()
}

const Edit = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [location, setLocation] = useState("");
    const [errors, setErrors] = useState({})

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/findOneTask/${id}`)
            .then((res) => {
                console.log(res);
                setTaskTitle(res.data.taskTitle)
                setDescription(res.data.description)              
                setPrice(res.data.price)
                setLocation(res.data.location)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        const updatedTask = {taskTitle, description, price, location}
        axios.put(`http://localhost:8000/api/updateTask/${id}`, updatedTask)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err)=> {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <div className="display-all-container">
                <div className="display-all-link">
                    <Link to="/" onClick={playSound}>Home</Link>
                </div>
                <div className="display-all-title">
                    <h1>Edit</h1>
                </div>
                <div className="display-all-link">
                    <Link to="/newTask" onClick={playSound}>New Task</Link>
                </div>
            </div>
            <div className="task-card2">
                <form onSubmit={submitHandler} >
                    <div style={{ padding: '10px', margin: '10px', fontSize: '24px' }}>
                        <label> Title: </label>
                        <br />
                        <input type="text" onChange={(e)=> setTaskTitle(e.target.value)} value={taskTitle}/>
                    {
                        errors.taskTitle?
                        <p> {errors.taskTitle.message} </p>:
                        null
                    }
                    </div>
                    <div style={{ padding: '10px', margin: '10px' , fontSize: '24px'}}>
                        <label> Description: </label>
                        <br />
                        <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description}/>
                        {
                            errors.description?
                            <p> {errors.description.message} </p>:
                            null
                        }
                    </div>
                    <div style={{ padding: '10px', margin: '10px' , fontSize: '24px'}}>
                        <label> Price: </label>
                        <br />
                        <input type="number" onChange={(e)=> setPrice(e.target.value)} value={price}/>
                        {
                            errors.price?
                            <p> {errors.price.message} </p>:
                            null
                        }
                    </div>
                    <div style={{ padding: '10px', margin: '10px' , fontSize: '24px'}}>
                        <label> Location: </label>
                        <br />
                        <input type="text" onChange={(e)=> setLocation(e.target.value)} value={location}/>
                        {
                            errors.location?
                            <p> {errors.location.message} </p>:
                            null
                        }
                    </div>
                    <div>
                        <button class="button" type="submit" onClick={playSound}> Submit </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Edit