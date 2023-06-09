const express = require('express')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 5000 

app.use('api/auth',require('./routes/auth.route.js'))
 async function start (){
     try{
      await mongoose.connect('mongodb+srv://user:user@cluster0.kpvcz4q.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser : true,
        useUnifyTopology:true,
        useCreateIndex: true,
        useFindAndModify:true
      })
      app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`)
    })
     }catch(e){
        console.log(e)
   
     }
     start()
}