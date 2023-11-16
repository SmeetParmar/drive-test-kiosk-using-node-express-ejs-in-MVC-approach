const driveTest = require('../models/driveTest');


module.exports = async (req, res) => {
    const userInfo = await driveTest.findById(req.session.userId);
    res.render('g2_page.ejs',{ userInfo });
}