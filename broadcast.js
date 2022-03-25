const connectDB = require('./database/database');
var DB = require('./model/model')
const axios = require('axios')

connectDB()


DB.find({}).then(dd=>{
  for ( var x in dd ){
    axios.post("https://api.telegram.org/bot"+dd[x].token+"/sendMessage?").then(d=>{    
      console.log ( d.data.toString()+""+dd[x]._id)
    }).catch ( err=>{
      console.log ("Error :  "+ dd[x]._id)      
    })
  }
})

return
