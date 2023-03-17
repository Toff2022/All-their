const { Schema, model } = require("mongoose")

const schema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    profession: [{
        type: Schema.Types.ObjectId, ref: "Profession",
        required: true
    }],
    // age: {
    //     type: Number,
    //     required: true
    // },
    alive: {
        type: Boolean,
        required: true,
    },
    genus: {
        type: Schema.Types.ObjectId, ref: "Genus",
        required: true
    },
    // birthDay: {
    //     type: String,
    //     required: true
    // },
    adress: {
        type: Object,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    bookmark: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model("Relatives", schema)