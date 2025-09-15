const express =require('express')
const dotenv=require('dotenv')
const route=require ('./Router/router.js');
const cors=require('cors')

dotenv.config();
const app=express();
const PORT=process.env.PORT
app.use(express.urlencoded({extended:true}));;
app.use(express.json());


app.use(cors({
    origin:["http://localhost:5173","https://yashkhollamportfolio.vercel.app"],
    methods:["GET","POST"]
}))
 

app.get('/',(req,res)=>{
    try{
        res.json({
        success:true,
        message:"Welcome to the PORTFOLIO"
    })
    }
    catch(err){
        console.log(err)
    }
   
})


app.use('/sendmail',route)

app.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`)
})