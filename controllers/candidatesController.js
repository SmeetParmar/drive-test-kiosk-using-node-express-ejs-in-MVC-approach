const appointment = require('../models/appointment');
const driveTest = require('../models/driveTest');

module.exports = async (req, res)  => {
    const data = await driveTest.find({comment:{$ne:"Default"} , userType:"Driver"});    
    res.render('candidates.ejs',{data});
}