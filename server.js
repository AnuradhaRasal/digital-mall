require('dotenv').config()
const express=require('express');
const app=express()
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');
 const mongoose=require('mongoose');
 const session=require('express-session')
 const flash=require('express-flash');
 const MonogoDbStore=require('connect-mongo')(session)



 //database connection
 const url='mongodb://localhost/products';

 mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,
useFindAndModify:true});
const connection=mongoose.connection;
connection.once('open',()=>{
   console.log('database connected');
}).catch(err=>{
   console.log('connection failed')
})


//session store

 let mongostore= new MonogoDbStore({
   mongooseConnection:connection,
   collection:'sessions'
})
//session config

app.use(session({
   secret:process.env.cookie_secret,
   resave:false,
   store:mongostore,

   saveUninitialized:false,
   cookie:{maxAge:1000*60*60*24}
}))
 app.use(flash())
 app.use(express.urlencoded({extended:false}))
 app.use(express.json())

 //global middleware

 app.use((req,res,next)=>
 {
    res.locals.session=req.session
    next()
 })

// set template engine


app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')


//assest
require('./routes/web')(app)

app.use(express.static('public'))



app.listen(3300, ()=>
{
console.log("listening on port 3300");
})