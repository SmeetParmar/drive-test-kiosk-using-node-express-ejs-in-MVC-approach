const appointment = require('../models/appointment');
const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req,res)=>{
    let newDate = req.body.date;
    let newTime = req.body.time;

    let data = await appointment.findOne({ date:newDate , time:newTime});

    await driveTest.findByIdAndUpdate(req.session.userId, {appointmentId:data._id,testType:req.body.testType});

    await appointment.findByIdAndUpdate(data._id, {isTimeSlotAvailable:false});
    
    notifier.notify({
        title: 'Alert Notification',
        message: 'Appointment booked successfully....',
    });
    res.render('index.ejs');
   
 }