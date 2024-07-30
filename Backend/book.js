
const express=require("express");
const app = express();
const PORT = 8001;
const mongoose=require("mongoose");
const cors =require("cors");
const bodyParser=require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}))
const mongoURL = "mongodb://localhost:27017/BookNow";
mongoose.connect(mongoURL, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongoose db");
    }).catch((error) =>
        console.error("Failed to connected"));

        // const userSchema = new mongoose.Schema({
        //     fullName: String,
        //     email: String,
        //     eventType: String,
        //     shootPlace: String,
        //     fromDate: String,
        //     toDate: String,
        //     contactNumber: String
        // });
        const userSchema = new mongoose.Schema({
            fullName: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique: true,
                // Validate email format using a regular expression
                match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            },
            eventType: {
                type: String,
                required:true // Accepts only these specified values
            },
            shootPlace: {
                type: String,
                required: true
            },
            fromDate: {
                type: Date,
                required: true
            },
            toDate: {
                type: Date,
                required: true
            },
            contactNumber: {
                type: Number,
                required: true,
                // Additional validation for phone numbers can be added here
            }
        });
        
        
const User = mongoose.model('User', userSchema);

app.post('/booked', async (req, res) => {
    const { fullName, email, eventType, shootPlace, fromDate, toDate, contactNumber } = req.body;
    try {
        // Create a new user document
        const newUser = new User({ fullName, email, eventType, shootPlace, fromDate, toDate, contactNumber });

        // Save the user document to the database
        await newUser.save();
        // const allbookings=await User.find({});
        // res.json(allbookings);
        console.log('Registration successful:', newUser);
        // Respond with a success message
        // res.status(200).json({ message: 'Registration successful', user: newUser });
    } catch (error) {
        console.error('Failed to register:', error);
        res.status(500).json({ message: 'Failed to register' });
    }
});
app.get('/booked', async (req, res) => {
    try {
        // Fetch all bookings from the database
        const allBookings = await User.find({});
        // Respond with the fetched bookings
        res.json(allBookings);
        console.log('Fetched bookings successfully:', allBookings);
    } catch (error) {
        console.error('Failed to fetch bookings:', error);
        res.status(500).json({ message: 'Failed to fetch bookings' });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));