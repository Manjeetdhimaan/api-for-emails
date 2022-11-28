const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-mail',  (req, res, next) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'manjeetdhimaan60@gmail.com',
          pass: 'lpaqbtmffjmepylc'
        }
      });
      
      const mailOptions = {
        from: 'youremail@gmail.com',
        to: 'manjeetdhimaan80@gmail.com',
        subject: 'Code from ' + req.body.domain,
        text: 'code: ' + req.body.code
      };
      
       transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send({error: error})
        } else {
            console.log('Email sent: ' + info.response);
            res.send({res: info.response, message: 'E-mail sent successfully'})
          
        }
      });
});

router.post('/send-mail-everday-sol',  (req, res, next) => {
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manjeetdhimaan60@gmail.com',
        pass: 'lpaqbtmffjmepylc'
      }
    });
    
    const mailOptions = {
      from: 'youremail@gmail.com',
      to: 'manjeetdhimaan80@gmail.com',
      subject: 'Email from ' + req.body.domain,
      text: `Name: ${req.body.name ? req.body.name : ''} ,
              Email: ${req.body.email ? req.body.email : ''}
              Subject: ${req.body.sub ? req.body.sub : ''}
              Message: ${req.body.msg ? req.body.msg : ''}
      `
    };
    
     transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send({error: error})
      } else {
          console.log('Email sent: ' + info.response);
          res.send({res: info.response, message: 'E-mail sent successfully'})
        
      }
    });
});

module.exports = router;