const mongoose = require('mongoose')
const { Schema } = mongoose;

const showSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'Show needs to have a title']
    },
    creator: {
        type: String,
    },
    launched: {
        type: Number
    },
    genre: {
        type: String
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        default: 'No description provided'
    },
}, 
{
    timestamps: true
});

const Show = mongoose.model("Show", showShcema);
module.export = Show;