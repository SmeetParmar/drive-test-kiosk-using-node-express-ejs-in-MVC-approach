    global.isLoggedIn = null;
    const express = require('express')
    const app = new express()
    const path = require('path');
    const notifier = require('node-notifier');
    const ejs = require('ejs');
    app.set('view engine','ejs');
    const expressSession = require('express-session');

    app.use(express.json());
    app.use(express.urlencoded());
    app.use(expressSession({
        secret: 'Smeet',
        resave: false, 
        saveUninitialized: false,
    }))

    const mongoose = require('mongoose');
    const URI = "mongodb+srv://SmeetParmar:123@cluster0.dmfphfo.mongodb.net/";

    mongoose.connect(URI, {useNewUrlParser:true});

    app.use(express.static('public'))
    app.listen(2500, ()=>{
        console.log("Hi, Running Successfully on 2500....")
    })

    const indexController = require('./controllers/indexController');
    const g_pageController = require('./controllers/g_pageController');
    const g2_pageController = require('./controllers/g2_pageController');
    const appointmentController = require('./controllers/appointmentController');
    const candidatesController = require('./controllers/candidatesController');
    const registerController = require('./controllers/registerController');
    const loginController = require('./controllers/loginController');
    const examinerController = require('./controllers/examinerController');
    const logoutController = require('./controllers/logoutController');
    const updatePersonalInfoController = require('./controllers/updatePersonalInfoController');
    const createUserController = require('./controllers/createUserController');
    const registerUserController = require('./controllers/registerUserController');
    const loginUserController = require('./controllers/loginUserController');
    const addSlotController = require('./controllers/addSlotController');
    const checkDateG2Controller = require('./controllers/checkDateG2Controller');
    const bookG2AppointmentController = require('./controllers/bookG2AppointmentController');
    const checkDateGController = require('./controllers/checkDateGController');
    const bookGAppointmentController = require('./controllers/bookGAppointmentController');
    const addCommentController = require('./controllers/addCommentController');
    const filterDataController = require('./controllers/filterDataController');
    const adminFilterDataController = require('./controllers/adminFilterDataController');

    const authenticationMiddleware = require('./middleware/authenticationMiddleware');
    const adminAuthenticationMiddleware = require('./middleware/adminAuthenticationMiddleware');
    const examinerAuthenticationMiddleware = require('./middleware/examinerAuthenticationMiddleware');
    const redirectMiddleware = require('./middleware/redirectMiddleware');
    
    app.use("*", (req, res, next) => {
        isLoggedIn = req.session.userId;

        isAdminLoggedIn = req.session.adminId;

        isExaminerLoggedIn = req.session.examinerId;
        next()
    });

    app.get('/',indexController);  

    app.get('/g_page',authenticationMiddleware,g_pageController);

    app.get('/g2_page',authenticationMiddleware, g2_pageController);

    app.get('/appointment',adminAuthenticationMiddleware,appointmentController);

    app.get('/candidates',adminAuthenticationMiddleware,candidatesController);

    app.get('/examiner',examinerAuthenticationMiddleware,examinerController);

    app.get('/register',redirectMiddleware,registerController);

    app.get('/login',redirectMiddleware,loginController);

    app.get('/logout',logoutController);

    app.post('/post/update',authenticationMiddleware,updatePersonalInfoController);    

    app.post('/post/create',authenticationMiddleware, createUserController);

    app.post('/post/register', registerUserController);

    app.post('/post/login', loginUserController);

    app.post('/appointment/checkDateG2',authenticationMiddleware, checkDateG2Controller);

    app.post('/appointment/bookG2Appointment',authenticationMiddleware, bookG2AppointmentController);

    app.post('/appointment/checkDateG',authenticationMiddleware, checkDateGController);

    app.post('/appointment/bookGAppointment',authenticationMiddleware, bookGAppointmentController);

    app.post('/appointment/slot',adminAuthenticationMiddleware,addSlotController);

    app.post('/add/comment',examinerAuthenticationMiddleware ,addCommentController);

    app.post('/form/filterData',examinerAuthenticationMiddleware ,filterDataController);

    app.post('/form/admin/filterData',adminAuthenticationMiddleware ,adminFilterDataController);