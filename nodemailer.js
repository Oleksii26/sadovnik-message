const nodemailer = require('nodemailer')
const trtansporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'jadyn.halvorson@ethereal.email',
        pass: '1477SpZ35kbkPQ7uEY'
    }
})

const mailer = m => {
    trtansporter.sendMail(m, (e, i) => {
        if(e) return console.log(e.message)
        return console.log(i);
    })
}
module.exports = mailer