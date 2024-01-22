const appointment = require('../models/appointment');
const driveTest = require('../models/driveTest');

module.exports = async (req, res)  => {
    const data = await driveTest.find({appointmentId:{$ne:"Default"} , userType:"Driver"});
    let allData = [];
    let appointmentDetails;

    for(singleData of data)
    {
        appointmentDetails = await appointment.findById(singleData.appointmentId);
        const userData = {
            userDetails: singleData,
            dateTime: appointmentDetails
        };
        
        allData.push(userData);
    };
    
    res.render('examiner.ejs',{allData});
}