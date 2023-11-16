const notifier = require('node-notifier');

module.exports = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
    notifier.notify({
        title: 'Alert Notification',
        message: 'Logged Out Successfully...',
    });
}