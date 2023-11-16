const driveTest = require('../models/driveTest');
const bcrypt = require('bcrypt')
const notifier = require('node-notifier');


module.exports = async (req, res) => {
    await driveTest.findByIdAndUpdate(req.session.userId,{
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        licenseNo : req.body.licenseNo,
        age : req.body.age,
        dob : req.body.dob,
        car_details : {
            make : req.body.car_details.make,
            model : req.body.car_details.model,
            year : req.body.car_details.year,
            plateNo : req.body.car_details.plateNo,
        }
    });
    notifier.notify({
        title: 'Alert Notification',
        message: 'Details Added Successfully...',
    });
   res.redirect('/');
}