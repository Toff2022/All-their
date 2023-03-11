function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateUserData () {
    return {
        age: getRandomInt(18, 55),
        // birth: getRandomInt(0, 200),
        birthYear: getRandomInt(1960, 2000),
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
    }
}

module.exports = {
    generateUserData
}