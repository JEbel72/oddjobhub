const mongoose = require ('mongoose');

const TaskSchema = mongoose.Schema({
    taskTitle:{
        type:String,
        required: [true, "Title is required"],
        minLength: [1, "Title must be at least 1 character long"],
        maxLength: [25, "Title cannot be more that 25 characters long"]
    },
    description:{
        type:String,
        required: [true, "Last Name is required"],
        minLength: [10, "Description must be at least 10 character long"],
        maxLength: [150, "Description cannot be more than 150 characters long"]
    },
    price: {
        type:Number,
        required: [true, "Price is required"],
        minLength: [1, "Price must be at least $1 or more"]
    },
    location: {
        type:String,
        required: [true, "Location is required"],
        minLength: [10, "Address must be at least 10 characters long"]
    },
    
    // For created at and updated at
}, {timestamps:true} )

module.exports = mongoose.model('Task', TaskSchema);