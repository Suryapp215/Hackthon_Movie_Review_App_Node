
//import headerfiles
const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const{loginModel}=require('./model')
const{reviewModel}=require('./modelReview')

//initialise
let app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//CORS policy
app.use( (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials',true)
    next()
} )


//Db connection
mongoose.connect("mongodb+srv://suryapp:suryapp@cluster0.qq01r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

//add_account
app.post('/add_account',async(req,res)=>{
    try{
     console.log(req.body)
     let login=new loginModel(req.body)
     let result=await login.save()
     res.json(result)
 
    }
    catch(error)
    {
        res.status(500).send(error)
 
    }
 })

 // account delete
app.post('/account_delete',async(req,res)=>{
    try {
        var result=await loginModel.findByIdAndDelete(req.body)
        res.json({"status":"Successfully deleted"})
    } catch (error) {
      res.send(500).json({"status":"error"})  
    }
})

//review
app.post('/add_review',async(req,res)=>{
    try{
     console.log(req.body)
     let review=new reviewModel(req.body)
     let result=await review.save()
     res.json(result)
 
    }
    catch(error)
    {
        res.status(500).send(error)
 
    }
 })
 // delete review
 app.post('/review_delete',async(req,res)=>{
    try {
        var result=await reviewModel.findByIdAndDelete(req.body)
        res.json({"status":"Successfully deleted"})
    } catch (error) {
      res.send(500).json({"status":"error"})  
    }
})

//view reviews
app.get('/view_review',async(req,res)=>{
    try {
      var result=await reviewModel.find()
      res.json(result)
    } 
    catch (error) {
      res.send(500).send(error)
      
    }
  })

//view accounts
app.get('/view_accounts',async(req,res)=>{
    try {
      var result=await loginModel.find()
      res.json(result)
    } 
    catch (error) {
      res.send(500).send(error)
      
    }
  })

  

//search movie reviews by movie name
app.post('/search_movie_reviews',async(req,res)=>{
    try {
        var result=await reviewModel.find(req.body)
        res.json(result)
        
    } catch (error) {
        res.send(500).send(error)  
        
    }
})


 

 
app.listen(8080,()=>{
    console.log('running.....')
})