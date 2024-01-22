const driveTest = require('../models/driveTest');
const appointment = require('../models/appointment');


module.exports = async (req, res) => {
    const userInfo = await driveTest.findById(req.session.userId);
    const date = null;
    let appointmentDetails = null;
    if(userInfo.appointmentId == "Default")
    {
        res.render('g2_page.ejs',{ userInfo,date,appointmentDetails });
    }
    else
    {
        if(userInfo.testType == "G2")
        {
            appointmentDetails = await appointment.findById(userInfo.appointmentId);
        }
        res.render('g2_page.ejs',{ userInfo,date,appointmentDetails });
    }
}