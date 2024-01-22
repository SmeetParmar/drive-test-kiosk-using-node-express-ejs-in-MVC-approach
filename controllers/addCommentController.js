const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req,res)=>{
    let userId = req.body.userId;
    let comment = req.body.comment;
    let result = req.body.result;

    await driveTest.findByIdAndUpdate( userId, { comment:comment, result:result } );
    notifier.notify({
        title: 'Alert Notification',
        message: 'Comment added successfully....',
    });
    res.render('index.ejs')
 }