const express = require('express');
const db = require('./config/db')
const cors = require('cors');
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sriram_construction",
})

