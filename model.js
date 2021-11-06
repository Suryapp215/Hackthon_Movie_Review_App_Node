const mongoose=require('mongoose')
let mongooseSchema=mongoose.Schema
const loginSchema=new mongooseSchema({
    Name:String,
    email:String,
    UserName:String,
    Password:String,
    ConfirmPassword:String,
    
    
}
    
)
var loginModel=mongoose.model("accounts",loginSchema)
module.exports={loginModel}