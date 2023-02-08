const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
const jwt = require('jsonwebtoken')
require("dotenv").config()
mongoose.set('strictQuery', true);


// const user = require('./db/model/user')
// const checkAuth = require('./db/middleware/CheckAuth')


const userRouter = require("./routes/userRouter")
const creatorsRouter = require("./routes/creatorsRouter")
const donationRouter = require("./routes/donationRoutes")


app.use(cors());
app.use(express.json())

app.use(creatorsRouter)
app.use(userRouter)
app.use(donationRouter)

// database connection
const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }


    try {
        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.c5dej4c.mongodb.net/duckcart?retryWrites=true&w=majority`, connectionParams)
        // mongoose.connect(`mongodb://localhost:27017/duckcart`, connectionParams)

        console.log('database connected successfully')

    } catch (error) {
        console.log(error)
    }
}
database()







app.get('/', (req, res) => {
    res.send('api running')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})