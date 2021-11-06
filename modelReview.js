const mongoose=require('mongoose')
let mongooseSchema=mongoose.Schema
const reviewSchema=new mongooseSchema({
    UserName:String,
    MovieName:String,
    Rating:Number,
    Comment:String
    
    
    
})
var reviewModel=mongoose.model("reviews",reviewSchema)
module.exports={reviewModel}