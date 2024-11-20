const mongoose=require('mongoose');
const express=require('express');
const session=require('express-session');
const connectMongo = require('connect-mongo');
const cors=require('cors'); 
require("dotenv").config();
const approute=require('../backend/Allroutes');
const app=express();



app.use(cors({
    origin: "*", 
    methods: "GET,POST,PUT,DELETE", 
    credentials: true 
  }));


const uri=process.env.MONGO_URI;
mongoose.connect(uri);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb connected");
})
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-default-secret',
    resave: false,
    saveUninitialized: false,
    store: new connectMongo({
        mongoUrl: process.env.MONGO_URI, // Use your MongoDB URI for session storage
        collectionName: 'sessions', // Specify the collection name to store sessions
        ttl: 14 * 24 * 60 * 60, // Session time-to-live (TTL) in seconds, e.g., 14 days
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies only in production (HTTPS)
        maxAge: 1000 * 60 * 60 * 24, // Session expiry in 1 day
    }
}));


app.use(express.json());
app.use("/en",approute);


app.listen(3000,()=>{
    console.log("server is running");
})
