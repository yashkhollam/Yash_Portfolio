const express=require ('express')

const SendEmail = require('../Controller/mailController');

const route=express.Router();

route.post('/sendmail',SendEmail)


module.exports=route