const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req, res) => {
    const userInfo = await driveTest.findById(req.session.userId);
    // console.log(userInfo);
    if(userInfo.licenseNo == "Default")
    {
        notifier.notify({
            title: 'Alert Notification',
            message: 'Please add your information first...',
        });
        res.render('g2_page.ejs',{ userInfo });
    }
    else
    {
        res.render('g_page.ejs',{ userInfo });
    }
}