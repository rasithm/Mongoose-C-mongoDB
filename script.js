const mongoose = require("mongoose");
const user = require('./userschema');
main().catch(err => {console.log(err.message)});

async function main() {
    await mongoose.connect("mongodb://localhost/testdb")
    // const userdata = await user.create({
    //     name : "rasith" ,
    //     age : 18,
    //     email:"MohamedrasITH",
    //     hobbies : ["coding" , "play cricket" , "reel"],
    //     address : {
    //         Street : "vadaka street",
    //         city : "thanjur"
    //     }
    //      })

    
    //console.log(userdata)
    // const userdata2 = await user.findById('676c0614b92d0acc2e6446df')
    // console.log(userdata2)
    // const userdata3 = await user.find({
    //     name : "rasith"
    // })
    // console.log(userdata3)
    // const userdata4 = await user.findOne({
    //     name : "rasith"
    // })
    // console.log(userdata4)
    // const userdata5 = await user.where("name").equals("rasith").where("age").lt(20).limit(2)
    // console.log(userdata5)
    // const userdata6 = await user.where("name").equals("rasith").where("age").lt(20).limit(2).select("age")
    
    // const userdata7 = await user.findById('676bfb35dfe489039fde4067')
    // user[0].bestfriend  = '676bfb35dfe489039fde4067'
    // await user[0].save()
      
    // console.log(userdata7)
    
    // console.log(userdata6)
    // userdata7.name = "hasan"
    // console.log(userdata7)
    // const userdata8 = await user.where("name").equals("rasith").where("age").lt(20).limit(2)
    // console.log(userdata8)

    // const userdata9 = await user.findOne({name : "rasith"})
    // // user.sayHi()
    // console.log(userdata9)
    // const userdata10 = await user.findByName("rasith")
    // console.log(userdata10)
    // const userdata11 = await user.findName("rasith")
    const userdata12 = await user.findOne({
        name : "rasith",
        
        
        
    })
    // console.log(user.namedEmail)
    console.log(userdata12)
    userdata12.save()
    console.log(userdata12)
}

