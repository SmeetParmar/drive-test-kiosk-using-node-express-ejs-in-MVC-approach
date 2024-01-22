const appointment = require('../models/appointment');
const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req,res)=>{
    const userInfo = await driveTest.findById(req.session.userId);
    const findDate = req.body.date;
    let appointmentDetails = null;
    const date = await appointment.find({ date: findDate });
    if(date == null)
    {
        notifier.notify({
            title: 'Alert Notification',
            message: 'No time slot exist for selected date, please select other date....',
        });
        res.render('g2_page.ejs',{ userInfo , date, appointmentDetails });
    }
    else
    {
        res.render('g2_page.ejs',{ userInfo , date , findDate, appointmentDetails });
        // console.log(date,findDate);
    }
}