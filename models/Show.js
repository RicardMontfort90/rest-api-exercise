const mongoose = require('mongoose')
const { Schema } = mongoose;

const showSchema = new Schema ({
    
})
const Show = mongoose.model("Show", showShcema);
module.export = Show;