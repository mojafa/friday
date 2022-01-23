import nodemailer , {Transporter} from 'nodemailer';
import * as EmailConfig from '../config/email.config';


export default  class EmailHelper{
    /**
     * getTest_email
     */
    public static async testTransporter() {
        let testAccount  = await nodemailer.createTestAccount();

        return nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: testAccount.user, // generated ethereal user
              pass: testAccount.pass, // generated ethereal password
            },
          });   
    }

    public static async gmailTransporter() {
        return nodemailer.createTransport({
            host: "gmail",
            auth: {
              user: EmailConfig.sender, // generated ethereal user
              pass: EmailConfig.password, // generated ethereal password
            },
          });   
    }

    

    public static async send (
        transporter:Transporter , 
        from:string = '"Fred Foo 👻" <foo@example.com>',
        to:string = "bar@example.com, baz@example.com",
        subject:string = "Hello ✔", 
        html:string = "<b>Hello world?</b>"){
        let info = await transporter.sendMail({
            from: from, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            html: html , // html body
        });

        return info
    }
}
