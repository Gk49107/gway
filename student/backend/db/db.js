const mongoose = require('mongoose')

const connectdatabase =() => {mongoose.connect(process.env.Mongo_Url, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((data) => {
    console.log(`mongodb connect server : http://${data.connection.host}:${data.connection.port}`)

}).catch((err)=> console.error(err))
}
module.exports = connectdatabase;