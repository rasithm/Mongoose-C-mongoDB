const mongoose = require("mongoose");
const addressdata = new mongoose.Schema({
        Street : String,
        city : String
})
const userdata = new mongoose.Schema({
    name:String,
    age:{
        type : Number,
        min:1,
        max:100,
        // validate : {
        //     validate : v => v%2 !== 0,
        //     message: props => `${props.value} not an even number`
        // },
    },
    email:{
        type : String,
        requried : true,
        lowercase : true,
        minlenght: 10
    },
    createdAt : {
        type : Date,
        default : () => Date.now(),
        immutable : true
    },
    updatedAt : {
        type : Date,
        default : () => Date.now()
    },
    bestfriend  : {
        type : mongoose.Schema.ObjectId,
        ref : 'user',
    },
    hobbies : [String],
    address : addressdata, 
})

userdata.methods.sayHi = function(){
    console.log(`hi! my name is ${this.name} kindly requested to say hi`)
}
userdata.statics.findByName = function(name){
    return this.where({name : new RegExp(name , 'i')})
}
userdata.query.findName = function(name){
    return this.where({name : new RegExp(name , 'i')})
}
userdata.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}`
})
userdata.pre("save", function(next){
    this.updatedAt = Date.now()
    next()
})
userdata.post("save", function(doc,next){
    doc.sayHi()
    next()
})

module.exports = mongoose.model("User" , userdata)