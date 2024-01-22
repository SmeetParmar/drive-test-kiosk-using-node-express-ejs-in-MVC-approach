const appointment = require('../models/appointment');
const notifier = require('node-notifier');

module.exports = async (req,res)=>{

    if(await appointment.findOne({ date:req.body.date, time:req.body.time}))
    {
        notifier.notify({
            title: 'Alert Notification',
            message: 'Time already exits, please select other time....',
        });
        res.render('appointment.ejs')
    }
    else
    {
        await appointment.create(req.body);
        notifier.notify({
             title: 'Alert Notification',
             message: 'Slot added successfully....',
         });
        res.render('index.ejs')
    }
   
 }