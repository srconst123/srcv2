const {createPool }=require('mysql');

const poolk =createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"datasrc",
    port:3000,
    connectionLimit: 10
})

poolk.query(`select * from enquiry`, (err, result, fields)=>{
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})