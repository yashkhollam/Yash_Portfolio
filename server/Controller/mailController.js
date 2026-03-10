
const axios=require('axios')

const SendEmail=async(req,res)=>{
const {name,email,subject,message}=req.body;
 console.log("req.body",req.body)

    try{
       
        await axios.post("https://api.brevo.com/v3/smtp/email",{
           sender:{
            email:process.env.Yashmail,
            name:"Yash Khollam"
           },
           to:[{email:process.env.Yashmail}],
           subject:subject,

           replyTo:{
             email:email,
             name:name
           },
           htmlContent:`  
           <h1>Portfolio Inquery</h1>
           <P>${message}</p>
           `
        },{
            headers:{
                "api-key":process.env.BREVO_API_KEY,
              "Content-Type":"application/json"  
            }
        })

        res.status(200).json({
            success:true,
            message:"Email sent Successfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
             success:false,
             message:err.message
        })
    }
}

module.exports=SendEmail;