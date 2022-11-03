const nodemailer = require("nodemailer")
const { google } = require("googleapis")

const OAuth2 = google.auth.OAuth2

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const message = req.body

      const createTransporter = async () => {
        const oauth2Client = new OAuth2(
          process.env.CLIENT_ID,
          process.env.CLIENT_SECRET,
          "https://developers.google.com/oauthplayground"
        )
    
        oauth2Client.setCredentials({
          refresh_token: process.env.REFRESH_TOKEN
        })
    
        const accessToken = await new Promise((resolve, reject) => {
          oauth2Client.getAccessToken((err, token) => {
            if (err) {
              reject("Failed to create access token")
            }
            resolve(token) 
          })
        })
    
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.FROM_EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
          }
        
        
        })
      
        return transporter
      }

      const sendMail = async (emailOptions) => {
        let emailTransporter = await createTransporter()
        await emailTransporter.sendMail(emailOptions)
      }

      sendMail({
        subject: "Portfolio App",
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        html: `
          <div>
            <p>Nimi: ${message.name}</p>
            <p>Sähköposti: ${message.mail}</p>
            <p>Puhelin: ${message.phone}</p>
            <p>Viesti: ${message.msg}</p>
          </div>
        `
      })

      res.status(200).json({ "success": true })
    } catch (err) {
      res.status(400).send({ "message": "bad request", "success": false })
    }
  } else {
    res.status(400).send({ "message": "bad request" })
  }
}