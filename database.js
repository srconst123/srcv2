const {createPool }=require('mysql');

const poolk =createPool({
    host: "constsrc.000webhostapp.com",
    user: "id19652907_sriramconst",
    password: "ztI0PXiuCe7IGR#>",
    database: "id19652907_sriram_const",
    port:3000 || process.env.PORT,
    connectionLimit: 10
})

poolk.query(`select * from enquiry`, (err, result, fields)=>{
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})
