const mongoose = require('mongoose');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        min: 1,
        required: true
    },
    referral: {
        type: Number,
        min: 1,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    role: {
        type: String,
        required: true,
        enum: ['customer', 'worker', 'admin'],
        default: 'customer'
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    points: Number,
    createDate: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, id: this.id, role: this.role }, config.secretKey());
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        id: Joi.number().required(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;