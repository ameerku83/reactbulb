const express= require("express")
const mongoose=require("mongoose")
const app=express()
const cors = require("cors")
const morgan=require("morgan")

// const router = require("./routes/router")
require('dotenv').config()
app.use(morgan("dev"))
const PORT= process.env.PORT;
// app.use('/', router)
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://ameerku83:ameerku@cluster0.x6akll7.mongodb.net/signup')
.then(()=> {
    console.log('db conected');
})


const UserModel = require("./model");



app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        
        const user = new UserModel({ name, email, password });
        await user.save();

        

        res.status(201).json({  });
    } catch (error) {
        res.status(500).json({ message: 'Server error'+error});
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = (password=== user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'not credentials' });
        }

        
    } catch (error) {
        res.status(500).json({ message: 'Server error' +error});
    }
});






app.listen(PORT,()=>{   
    console.log(`server running on ${PORT}`);
})
