const mongoose = require('mongoose');

const gymworkout = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    date:{
        type: Date,
        default: Date.now,
        required:true
    },
    duration:{
        type: Number,
        required:true
    },
    calories:{
        type: Number,
        required:true
    },
    execrise:{
        type: Array,
        required:true,
    }
}, { timestamps: true });

const workouts = mongoose.model('workout', gymworkout);
module.exports = gymworkout;



