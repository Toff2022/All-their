const { Schema, model } = require("mongoose")

const schema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    patronomic: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthYear: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    profession: [{
        type: Schema.Types.ObjectId, ref: "Profession",
        required: true
    }],
    adress: {
        type: Object,
    },
    genus: [{
        type: Schema.Types.ObjectId, ref: "Genus",
        required: true
    }],
}, {
    timestamps: true
})

module.exports = model("User", schema)