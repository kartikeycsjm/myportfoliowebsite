import { NextResponse } from "next/server";
import transporter from "@/emailconfig.js"

const POST=async(req,res)=>{
    const {email,message}=await req.json();
    console.log(email,message);
    try {
        await transporter.sendMail({
          from: 'kartikeymishracsjm@gmail.com',
          to: 'kartikeymgkp@gmail.com',
          subject: 'New Contact Form Submission',
          text: `Email: ${email}\nMessage: ${message}`,
        });
        return NextResponse.json({msg:'message recieved'})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({msg:'error in sending message'})
    }
    
}
export {POST};