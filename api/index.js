import express from 'express'
import Mongoose from 'mongoose';
import dotenv from 'dotenv'
import User_Router from './routes/user.route.js'

// dotenv file connected-3
dotenv.config();

// mongose db connected-2
Mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("mongoDB connected!!")
})
    .catch((err) => {
        console.log(err)
    })


// express db connected-1
const app = express();
app.listen(3000, () => {
    console.log('DB is running on port 3000')

})


// api file conneted with browser-4

// app.get('/api/user', (req, res) => {
//     res.json({ message: "Api working and connnected!!" })
// });

app.use('/api/user',User_Router)