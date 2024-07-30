const express=require("express");
const app = express();
const PORT = 5040;
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors =require("cors");
const jwt=require("jsonwebtoken");
const mongoURL = "mongodb://localhost:27017/employee";
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}));

mongoose.connect(mongoURL)
    .then(() => {
        console.log("Connected to mongoose db");
    }).catch((error) =>
        console.error("Failed to connected"));
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
       
    },
    mobile: {
        type: Number,
        
    }
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { username, email, password, mobile } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        
        if (existingUser) { 
            
            
            return res.status(400).json({ message: 'Email address is already registered' });
        }
        
        const newUser = new User({ username, email, password, mobile });
       
      
        await newUser.save();

        console.log('Registration successful:', newUser);
       
        res.status(200).json({ message: 'Registration successful', user: newUser});
    } catch (error) {
        console.error('Failed to register:', error);
        res.status(500).json({ message: 'Failed to register' });
    }
});
app.post('/userLogin', async (req, res) => {
    const { email, password } = req.body;

    try {
       
        const user = await User.findOne({ email, password });


        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        var token= jwt.sign({email},"novacapture");
  
        res.status(200).json({ message: 'Login successful', token});
    } catch (error) {
        console.error('Failed to login:');
        res.status(500).json({ message: 'Failed to login' });
    }
});
app.post('/adminLogin', async (req, res) => {
    const { email, password } = req.body;

    try {
      
        const user = await User.findOne({ email, password });

       
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Failed to login:');
        res.status(500).json({ message: 'Failed to login' });
    }
})

 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



