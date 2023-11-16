const driveTest = require('../models/driveTest');
const notifier = require('node-notifier');

module.exports = async (req,res) => {
    let update = false;
    let previousDetails = await driveTest.findById(req.session.userId);

    if(previousDetails.car_details.make != req.body.car_details.make)
    {
        await driveTest.findByIdAndUpdate(req.session.userId,
        {
            $set :{  'car_details.make': req.body.car_details.make }
        });
        update = true;
    }
     

    if(previousDetails.car_details.model != req.body.car_details.model)
    {
        await driveTest.findByIdAndUpdate(req.session.userId,
        {
            $set :{  'car_details.model': req.body.car_details.model }
        });
        update = true;
    }
    

    if(previousDetails.car_details.year != req.body.car_details.year)
    {
        await driveTest.findByIdAndUpdate(req.session.userId,
        {
            $set :{  'car_details.year': req.body.car_details.year }
        });
        update = true;
    }
    
    if(previousDetails.car_details.plateNo != req.body.car_details.plateNo)
    {
        await driveTest.findByIdAndUpdate(req.session.userId,
        {
            $set :{  'car_details.plateNo': req.body.car_details.plateNo }
        });
        update = true;
    }
    
    if(update)
    {
        notifier.notify({
            title: 'Alert Notification',
            message: 'Data Updated Successfully...',
        });
    }
    else
    {
        notifier.notify({
            title: 'Alert Notification',
            message: 'Nothing to update, please update the data...',
        });
    }
    
    res.render('index.ejs');
}