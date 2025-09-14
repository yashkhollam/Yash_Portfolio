
const nodemailer=require('nodemailer')

const SendEmail=async(req,res)=>{
const {name,email,subject,message}=req.body;

    try{
        const transpoter=await nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.Yashmail,
                pass:process.env.Apppassword
            }
        })

        const mailoption={
            from:process.env.Yashmail,
            replyTo:email,
            to:email,
            subject:subject,
            text:`${name} (${email})\n\n${message}`,
        };

        await transpoter.sendMail(mailoption);

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