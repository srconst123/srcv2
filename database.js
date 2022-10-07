const {createPool }=require('mysql');

const poolk =createPool({
    host:"0.0.0.0",
    user:"root",
    password:"",
    database:"datasrc",
    port:3000 || process.env.PORT,
    connectionLimit: 10
})

poolk.query(`select * from enquiry`, (err, result, fields)=>{
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})
