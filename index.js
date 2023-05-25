const express = require('express')
const mailer = require('./nodemailer')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

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
app.get('/', (req, res) => {
    res.json('Hello')
})

app.listen(3001, () => {
    console.log('Server is running');
})