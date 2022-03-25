const connectDB = require('./database/datbase');
var DB = require('./model/model')
const axios = require('axios')

connectDB()

// /api/v1/:code/buildCache
DB.find({}).then(dd=>{
  for ( var x in dd ){
    axios.post("https://feeds-gram.up.railway.app/api/v1/"+dd[x]._id+"/buildCache").then(d=>{    
      console.log ("Success :  "+ dd[x]._id)
    }).catch ( err=>{
      console.log ("Error :  "+ dd[x]._id)      
    })
  }
})
