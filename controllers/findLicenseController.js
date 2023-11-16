const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req, res) => {
    const data = { licenseNo: req.body.licenseNo };
    const personalInfo = await driveTest.findOne(data);
    if (personalInfo == null) {
        notifier.notify({
            title: 'Alert Notification',
            message: 'No user found, Please register first....',
        });
        res.render('g2_page.ejs');
    }
    else {
        res.render('g_page.ejs', { personalInfo });
    }
}