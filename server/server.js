const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin:'http://localhost:5173', credentials:true}))
app.use(express.json(), express.urlencoded({ extended: true }))

const cookieParser = require('cookie-parser')
app.use(cookieParser(process.env.SECRET_KEY))  //secret key

require('dotenv').config();

require('./config/mongoose.config');

require('./routes/task.routes')(app)

const userRoutes = require('./routes/user.routes')
userRoutes(app)

app.listen(8000, () => console.log ('Server is running on port 8000'))