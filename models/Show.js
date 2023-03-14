const { Schema, model } = require("mongoose");

const showSchema = new Schema(

    {
        title: "The Simpsons",
        creator: "Matt Groening",
        launched: 1989,
        genre: "comedy",
        image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
        description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
    },
    {
        timestamps: true
    }
)

const Show = model("Show", showShcema);
module.export = Show;