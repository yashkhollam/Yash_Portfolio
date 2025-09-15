
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

         await transpoter.verify();
         console.log("✅ SMTP server ready");

        const mailoption={
            from:process.env.Yashmail,
            replyTo:email,
            to:process.env.Yashmail,
            subject:`Portfolio Contact from - ${name}`,
            text:`You have a new contact request from your portfolio: 
            
             Name:${name}
             Email:${email}
             Message:${message}`,
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