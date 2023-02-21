const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true,
        trim: true
    },
    surname : {
        type : String,
        required : true,
        trim: true
    },
    user_name : {
        type : String,
        trim: true,
        default : null
    },
    secondary_name   : {
        type : String,
        trim: true,
        default : ""
    },
    email  : {
        type : String,
        trim: true,
        default : ""
    },
    phone   : {
        type : String,
        trim: true,
        default : null
    },
    password  : {
        type : String,
        required : true,
        trim: true
    },
    gender  : {
        type : String,
        enum : ['Male', 'Famale', 'Custom'],
    },
    gender_custom : {
        type : String,
        trim : true,
        default : null
    },
    gender_pronoun : {
        type : String,
        trim : true,
        default : null
    },
    birth_date  : {
        type : String,
        required: true
    },
    birth_month: {
        type : String,
        required: true
    },
    birth_year: {
        type : String,
        required: true
    },
    profile_photo  : {
        type : String,
        default: null

    },
    cover_photo  : {
        type : String,
        default : null
    },
    bio  : {
        type : String,
        default : ''
    },
    category :{
        type : Object,
        default : {
            cat: '',
            show: true,
        }
    },
    work  : {
        type : Array,
        default : []
    },
    education  : {
        type : Array,
        default : []
    },
    featured  : {
        type : Array,
        default : []
    },
    living  : {
        type : String,
        default : null
    },
    home_toun  : {
        type : String,
        default : null
    },
    relationship  : {
        type : String,
        enam : ['Married', 'Single', 'In a Relationship'],
        default : null
    },
    hobbies  : {
        type : String,
        default : null
    },
    isActivate  : {
        type : Boolean,
        default : false
    },
    isAdmin  : {
        type : Boolean,
        default : false
    },

    website  : {
        type : Array,
        default : []
    },
    social_links  : {
        type : Array,
        default : []
    },
    join  : {
        type : Date,
        default : null
    },

    friends  : {
        type : Array,
        default : []
    },
    flowing  : {
        type : Array,
        default : []
    },
    fllowers  : {
        type : Array,
        default : []
    },
    request : {
        type : Array,
        default : []
    },
    block : {
        type : Array,
        default : []
    },
    posts : {
        type : Array,
        default : []
    },
    trash : {
        type : Array,
        default : []
    },
    status : {
        type : Array,
        default : []
    },
    access_token : {
        type: String,
        default: null
    },
    access_code : {
        type: String,
        default: null
    },


},
{
    timestamps : true
})



const User = mongoose.model('User', userSchema);

module.exports  = User;
