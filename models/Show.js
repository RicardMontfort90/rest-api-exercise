const mongoose = require('mongoose')
const { Schema } = mongoose;

const showSchema = new Schema ({
    title: {
        type: String,
        required: [true, 'Need a title']
    },
    creator: {
        type: String,
        required: [true, "Who created?"]
    },
    launched: {
        type: Number,
        required: [true, "When was Make it?"]
    },
    genre: {
        type: String,
        required: [true, "the Gender is"]
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