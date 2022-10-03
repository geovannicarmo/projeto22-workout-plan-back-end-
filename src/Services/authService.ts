import sgMail from '@sendgrid/mail'
import {generate} from 'generate-password'
import bcrypt from 'bcrypt'

function signUpService(le:string){

    const password = generate({
        length: 6,
        numbers: true
    })
    
    const salt = 10
    
    const passworCrypt =  bcrypt.hashSync(password, salt)
    console.log(passworCrypt
        )


const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

if(!SENDGRID_API_KEY){
    throw "mio"
}


sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
    to: 'geovannidocarmo@outlook.com',
  from: 'geovannidocarmo@gmail.com', // Use the email address or domain you verified above
  subject: '555656563',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
    
    if (error.response) {
        console.error(error.response.body)
    }
});
}



function signInService(le:string){

    console.log(le)  
}


const authService = {
    signUpService,
    signInService
}

export default authService