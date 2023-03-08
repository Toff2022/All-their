//1. У любого пользователя будет как min в БД professions(& qualities) (& relatives)
//2. Первоначальные данные равны mock данным
const professionMock = require("../mock/professions.json")
const relativesMock = require("../mock/relatives.json")
const genusMock = require("../mock/genus.json")
// const colorMock = require("../mock/colors.json")
const Profession = require("../models/Profession")
const Relatives = require("../models/Relatives")
const Genus = require("../models/Genus")


module.exports = async () => {
    const professions = await Profession.find()
    if (professions.length !== professionMock.length) {
        await createInitialEntity(Profession, professionMock)
    }
    const relatives = await Relatives.find()
    if (relatives.length !== relativesMock.length) {
        await createInitialEntity(Relatives, relativesMock)
    }
    const genus = await Genus.find()
    if (genus.length !== genusMock.length) {
        await createInitialEntity(Genus, genusMock)
    }
}

async function createInitialEntity (Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}