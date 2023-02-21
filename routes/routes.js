const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-mail', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'api.send.emails@gmail.com',
      pass: 'ixhdjeydflotrpqn'
    }
  });

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: process.env.ADMIN_EMAIL || 'Shushantsocial@gmail.com',
    subject: 'Code from ' + req.body.domain,
    html: `<h2>Someone sent code on ${req.body.domain}</h2> 
        <h3> code:  <strong><i>${req.body.code}</i></strong></h3>`,
    text: 'code: ' + req.body.code
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({
        error: error
      })
    } else {
      console.log('Email sent: ' + info.response);
      res.send({
        res: info.response,
        message: 'E-mail sent successfully'
      })


    }
  });
});

router.post('/send-mail-everday-sol', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'api.send.emails@gmail.com',
      pass: 'ixhdjeydflotrpqn'
    }
  });

  const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'Shushantsocial@gmail.com',
    subject: 'Email from ' + req.body.domain,
    html: `<h3>Name: ${req.body.name ? req.body.name : ''}</h3> 
      <h3>Email: ${req.body.email ? req.body.email : ''}</h3>
      <h3>Subject: ${req.body.sub ? req.body.sub : ''}</h3>
      <h3>Message: ${req.body.msg ? req.body.msg : ''}</h3>
`,
    text: `Name: ${req.body.name ? req.body.name : ''} ,
              Email: ${req.body.email ? req.body.email : ''}
              Subject: ${req.body.sub ? req.body.sub : ''}
              Message: ${req.body.msg ? req.body.msg : ''}
      `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({
        error: error
      })
    } else {
      console.log('Email sent: ' + info.response);
      res.send({
        res: info.response,
        message: 'E-mail sent successfully'
      })

    }
  });
});

router.post('/send-contact-growing-bricks', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'api.send.emails@gmail.com',
      pass: 'ixhdjeydflotrpqn'
    }
  });
  let mailOptions
  if (req.body.form === "contact") {
    mailOptions = {
      from: 'youremail@gmail.com',
      to: req.body.sendToEmail,
      subject: 'Email from ' + req.body.domain,
      html: `<h3>Name: ${req.body.Name ? req.body.Name : ''}</h3> 
        <h3>Email: ${req.body.Email ? req.body.Email : ''}</h3>
        <h3>Mobile: ${req.body.Mobile ? req.body.Mobile : ''}</h3>
        <h3>StateCity: ${req.body.StateCity ? req.body.StateCity : ''}</h3>
        <h3>Subject: ${req.body.Subject ? req.body.Subject : ''}</h3>
        <h3>Message: ${req.body.Message ? req.body.Message : ''}</h3>
  `
    };
  }
  if (req.body.form === "enquiry") {
    mailOptions = {
      from: 'youremail@gmail.com',
      to: req.body.sendToEmail,
      subject: 'Email from ' + req.body.domain,
      html: `<h3>Name: ${req.body.FullName ? req.body.FullName : ''}</h3> 
        <h3>Email: ${req.body.Email ? req.body.Email : ''}</h3>
        <h3>Mobile: ${req.body.MobileNo ? req.body.MobileNo : ''}</h3>
        ${req.body.OngoingProject ? '<h3>Project:'+ req.body.OngoingProject + '</h3>': ''} 
  `
    };
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({
        error: error
      })
    } else {
      console.log('Email sent: ' + info.response);
      return res.send({
        res: info.response,
        message: 'E-mail sent successfully',
        Message: 'Success'
      })

    }
  });
});

router.post('/send-query-maaplog', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'api.send.emails@gmail.com',
      pass: 'ixhdjeydflotrpqn'
    }
  });
  let mailOptions
  if (req.body.form === "query") {
    mailOptions = {
      from: 'youremail@gmail.com',
      to: req.body.sendToEmail,
      subject: 'Email from ' + req.body.domain,
      html: `<h3>Name: ${req.body.name ? req.body.name : ''}</h3> 
        <h3>Phone: ${req.body.phone ? req.body.phone : ''}</h3>
        <h3>Load: ${req.body.load ? req.body.load : ''}</h3>
        <h3>Freight Type: ${req.body.freightType ? req.body.freightType : ''}</h3>
        <h3>Miles: ${req.body.miles ? req.body.miles : ''}</h3>
  `
    };
  }
  if (req.body.form === "contact") {
    mailOptions = {
      from: 'youremail@gmail.com',
      to: req.body.sendToEmail,
      subject: 'Email from ' + req.body.domain,
      html: `<h3>Name: ${req.body.name ? req.body.name : ''}</h3> 
        <h3>Email: ${req.body.email ? req.body.email : ''}</h3>
        <h3>Mobile: ${req.body.phone ? req.body.phone : ''}</h3>
        <h3>Message: ${req.body.message ? req.body.message : ''}</h3>
        <h3>Company: ${req.body.company ? req.body.company : ''}</h3>
  `
    };
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({
        error: error
      })
    } else {
      console.log('Email sent: ' + info.response);
      return res.send({
        res: info.response,
        message: 'E-mail sent successfully',
        Message: 'Success'
      })

    }
  });
});

module.exports = router;