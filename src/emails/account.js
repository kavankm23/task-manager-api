const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
  sgMail.send({
    to:email,
    from:'kavankm1999@gmail.com',
    subject:'thanks for joining task-App',
    text:`welcome to the app, ${name}.`
  })
}

const sendCancelationEmail=(email,name)=>{
  sgMail.send({
    to:email,
    from:'kavankm1999@gmail.com',
    subject:'task-app',
    text:`Goodbye, ${name}.thanks for using task-app .`
  })
}

module.exports={
  sendWelcomeEmail,
  sendCancelationEmail
}
