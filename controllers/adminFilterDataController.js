const appointment = require('../models/appointment');
const driveTest = require('../models/driveTest');

module.exports = async (req, res)  => {
    let finalResult = req.body.submitButton;

    const data = await driveTest.find({comment:{$ne:"Default"} , userType:"Driver", result:finalResult});    
    res.render('candidates.ejs',{data});
}