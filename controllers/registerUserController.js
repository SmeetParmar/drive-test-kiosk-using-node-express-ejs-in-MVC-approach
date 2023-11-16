const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req,res)=>{
    await driveTest.create(req.body);
    notifier.notify({
         title: 'Alert Notification',
         message: 'You are registered successfully....',
     });
    res.render('login.ejs')
 }