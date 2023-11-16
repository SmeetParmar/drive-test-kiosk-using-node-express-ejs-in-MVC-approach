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
    const registerController = require('./controllers/registerController');
    const loginController = require('./controllers/loginController');
    const logoutController = require('./controllers/logoutController');
    const updatePersonalInfoController = require('./controllers/updatePersonalInfoController');
    const createUserController = require('./controllers/createUserController');
    const registerUserController = require('./controllers/registerUserController');
    const loginUserController = require('./controllers/loginUserController');

    const authenticationMiddleware = require('./middleware/authenticationMiddleware');
    const redirectMiddleware = require('./middleware/redirectMiddleware');
    
    app.use("*", (req, res, next) => {
        isLoggedIn = req.session.userId;
        next()
    });

    app.get('/',indexController);  

    app.get('/g_page',authenticationMiddleware,g_pageController);

    app.get('/g2_page',authenticationMiddleware, g2_pageController);

    app.get('/register',redirectMiddleware,registerController);

    app.get('/login',redirectMiddleware,loginController);

    app.get('/logout',logoutController);

    app.post('/post/update',authenticationMiddleware,updatePersonalInfoController);    

    app.post('/post/create',authenticationMiddleware, createUserController);

    app.post('/post/register', registerUserController);

    app.post('/post/login', loginUserController);