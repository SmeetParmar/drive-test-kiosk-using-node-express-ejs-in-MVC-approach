const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const driveTestSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        default:"Default"
    },
    lastName:{
        type:String,
        required:true,
        default:"Default"
    },
    licenseNo:{
        type:String,
        required:true,
        default:"Default"
    },
    age:{
        type:Number,
        required:true,
        default:"0"
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    dob: {
        type: Date,
        default: Date.now 
    },
    car_details:
    { 
        make: {
            type:String,
            required:true,
            default:"Default"
        }, 
        model: {
            type:String,
            required:true,
            default:"Default"
        }, 
        year: {
            type:String,
            required:true,
            default:"0"
        }, 
        plateNo: {
            type:String,
            required:true,
            default:"Default"
        }, 
    }
});

// driveTestSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10, (error, hash) => {
//         this.password = hash

//         if (this.licenseNo != "Default") 
//         {
//             bcrypt.hash(this.licenseNo, 10, (error, hashed) => {
//                 if(error)
//                 {
//                     console.log(error);
//                 }
//                 this.licenseNo = hashed;
//                 next();
//             });
//         } 
//         else 
//         {
//             next();
//         }
//     })

    driveTestSchema.pre('save', function (next) {
    
        bcrypt.hash(this.password, 10, (error, hash) => {
            this.password = hash;
            next();
        });
    
    });

    
    // driveTestSchema.pre('updateOne',function (next) {
    //     bcrypt.hash(this.licenseNo, 10, (error, hashed) => {
    //         if (error) {
    //             return next(error);
    //         }
    //         console.log("license No :  " + this.licenseNo);
    //         this.licenseNo = hashed;
    //         next();
    //     });
    // })



const driveTest= mongoose.model('driveTestSchema',driveTestSchema);
module.exports = driveTest;