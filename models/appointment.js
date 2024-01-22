const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        require:true
    },
    isTimeSlotAvailable:{
        type:Boolean,
        require:true,
        default:true
    }
});

const appointment = mongoose.model('appointmentSchema',appointmentSchema);
module.exports = appointment;