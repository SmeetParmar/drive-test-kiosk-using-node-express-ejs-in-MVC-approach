const driveTest = require('../models/driveTest');
const appointment = require('../models/appointment');
const notifier = require('node-notifier');

module.exports = async (req, res) => {
    const userInfo = await driveTest.findById(req.session.userId);
    const date = null;
    let appointmentDetails = null;
    // console.log(userInfo);
    if(userInfo.licenseNo == "Default")
    {
        notifier.notify({
            title: 'Alert Notification',
            message: 'Please add your information first...',
        });
        res.render('g2_page.ejs',{ userInfo, date, appointmentDetails });
    }
    else
    {
        if (userInfo.appointmentId == "Default") 
        {
            res.render('g_page.ejs', { userInfo, date, appointmentDetails });
        }
        else 
        {
            if(userInfo.testType=="G")
            {
                appointmentDetails = await appointment.findById(userInfo.appointmentId);
            }
            res.render('g_page.ejs',{ userInfo,date,appointmentDetails });
        }
    }
}