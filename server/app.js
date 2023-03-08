const express = require("express")
const mongoose = require("mongoose")
const chalk = require("chalk")
const config = require("config")
const initDatabase = require("./startUp/initDatabase")
const routs = require("./routs/index")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = config.get("port") ?? 8080

// if (process.env.NODE_ENV === "production") {
//     console.log(chalk.yellow("Production"));
// } else {
//     console.log(chalk.gray("Development"));
// }
async function start () {
    try {
        mongoose.connection.once('open', () => {
            initDatabase()
        })
        await mongoose.connect(config.get("mongoUri"))
        console.log(chalk.bgGreen("Mongo conected!"))
        app.listen(PORT, () =>
            console.log(chalk.blue(`Server has been started on port ${PORT}...`))
        )
    } catch (e) {
        console.log(chalk.red(e.message))
        process.exit(1)
    }

}
start()


