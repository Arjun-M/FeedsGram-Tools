const connectDB = require('./database/database');
var DB = require('./model/model')
const axios = require('axios')

connectDB()

const API = async (id , token , payload) => {
  try{
    let resp = await axios.post("https://api.telegram.org/bot"+token+"/sendPhoto" , payload)
    console.log ("➢ "+resp.data.ok+" from "+id)
  }catch(err){
    console.log (`Error ${err.data} from ${id}`)
  }
}
 

DB.find({}).then(dd=>{
  for ( var x in dd ){  
    API("01010", , {chat_id:2087092793, photo:"https://t.me/itz_Arjun_M/4" , caption:"*😁 Need Help With FeedsGram ?*\n\nWatch this quick [tutorial](https://youtu.be/rstQ6fleK5g) for help .\n\nJoin @FeedsGram to stay in touch with us ." , parse_mode:"Markdown"}) 
  }
})

return

