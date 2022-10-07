const express = require('express');
// const db = require('./config/db')
const cors = require('cors');
const mysql = require("mysql")
const upload = require('express-fileupload')
const app = express();
// const nodemailer = require('nodemailer')
// const transpoter = nodemailer.createTransport({
//     // host:'smtp.gmail.com',
//     // port:'587',
//     // secure:false,
//     service:'gmail',
//     auth:{
//         user:'dcbaraik09@gmail.com',
//         pass:'6200525143'
//     }
// })
// const mailOptions ={
//     from: 'dcbaraik09@gmail.com',
//     to:'dcbaraik09@gmail.com',
//     subject:'just for trst',
//     text:'hello this this dharmendra'

// }
// transpoter.sendMail(mailOptions , function(err ,info){
// if(err){
//     console.log(err);
// }else{
//     console.log("this is for text", info.response);
// }
// })

const db = mysql.createPool({
    host: "0.0.0.0",
    user: "root",
    password: "",
    database: "sriram_construction",

})
console.log("data base is connected asdf rr", db);
const PORT = 3001 || process.env.PORT;
app.use(cors());
app.use(express.json())



// Route to get all posts
// app.get("/api/get", (req,res)=>{
// db.query("SELECT * FROM enquiry", (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
// res.send(result)
// });   });

// Route to get one post
// app.get("/api/getFromId/:id", (req,res)=>{

// const id = req.params.id;
//  db.query("SELECT * FROM enquiry WHERE mobile_number = ? ", id, 
//  (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
//     res.send(result)
//     });   });

// Route for creating the post
app.post('/api/create', (req, res) => {

    const username = req.body.userName;
    const email = req.body.userEmail;
    const mobile = req.body.userMobile;
    const message = req.body.userMessage;


    db.query("INSERT INTO enquiry (name, email, mobile_number, message) VALUES (?,?,?,?)", [username, email, mobile, message], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
})

// Route to like a post
app.post('/api/like/:id', (req, res) => {

    const id = req.params.id;
    db.query("UPDATE enquiry SET likes = likes + 1 WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
});

// Route to delete a post

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM enquiry WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})

app.listen(PORT || process.env.PORT, () => {
    console.log(`Server is running on PORT :`, PORT)
})

// Route to get all apartments list
// app.get("/api/get_apartment", (req,res)=>{
//     db.query("SELECT * FROM apartments_detail", (err,result)=>{
//         if(err) {
//         console.log(err)
//         } 
//     res.send(result)
//     });   });

// Route for Booking Apartment
app.post('/api/book_apt', (req, res) => {

    const username = req.body.userName;
    const email = req.body.userEmail;
    const mobile = req.body.userMobile;
    const message = req.body.userMessage;
    const block = req.body.userBlock;
    const floor = req.body.userFloor;
    const unit = req.body.userUnit;


    db.query("INSERT INTO bookings (name, email, mobile_number, block, floor, unit, message) VALUES (?,?,?,?,?,?,?)", [username, email, mobile, block, floor, unit, message], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
})

// Route for career
app.post('/api/career', (req, res) => {



    const username = req.body.userName;
    const email = req.body.userEmail;
    const mobile = req.body.userMobile;
    const resume = req.body.userResume;


    db.query("INSERT INTO career (name, email, mobile_number, resume) VALUES (?,?,?,?)", [username, email, mobile, resume], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
})

app.post('/api/upload', (req, res) => {

})
