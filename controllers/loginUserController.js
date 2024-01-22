const driveTest = require('../models/driveTest');
const bcrypt = require('bcrypt')
const notifier = require('node-notifier');

module.exports = async (req,res)=>{
    const findUserName = { userName: req.body.userName };
    const password = req.body.password;
    const getData = await driveTest.findOne(findUserName);
    if(getData)
    {
        bcrypt.compare(password, getData.password, (error, matches) =>
        {
            if (matches) 
            { 
                //console.log("Password Matches...");
                // console.log(getData._id);
                if (getData.userType == "Driver")
                {
                    req.session.userId = getData._id;
                }
                else if(getData.userType == "Admin")
                {
                    req.session.adminId = getData._id;
                } 
                else
                {
                    req.session.examinerId = getData._id;
                }  
                notifier.notify({
                    title: 'Alert Notification',
                    message: 'Logged in successfully...',
                });
                res.redirect('/');
            }
            else 
            {
                notifier.notify({
                    title: 'Alert Notification',
                    message: 'Your Password is wrong. Try again...',
                });
                res.render('login.ejs');
            }
        })
    }   
    else
    {
        //console.log("No user found...");
        notifier.notify({
            title: 'Alert Notification',
            message: 'No user found...',
        });
        res.render('register.ejs');
    }
}