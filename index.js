const express = require('express')
const mailer = require('./nodemailer')

const app = express()
app.use(express.json())

app.post('/mail', (req, res) => {
    const message = {
        from: 'jadyn.halvorson@ethereal.email',
        to: req.body.to,
        subject: req.body.subject,
        text: 'New order'
    }
    mailer(message)
    res.json({
        message
    })
})

app.listen(3001, () => {
    console.log('Server is running');
})