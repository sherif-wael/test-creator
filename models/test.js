const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    questions: [
        {
            header: {type: String},
            choices: [{type: String}],
            answer: {type: String}
        }
    ]
})

module.exports = Test = mongoose.model("test", testSchema)
