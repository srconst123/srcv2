const {createPool }=require('mysql');

const poolk =createPool({
    host: "sql301.epizy.com",
    user: "epiz_32755854",
    password: "WsFD6hzTjT",
    database: "epiz_32755854_src",
    port:3000 || process.env.PORT,
    connectionLimit: 10
})

poolk.query(`select * from enquiry`, (err, result, fields)=>{
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})
