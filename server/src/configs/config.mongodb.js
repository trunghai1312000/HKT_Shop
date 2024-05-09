'use-strict'

const config = {
    app: {
        port:  process.env.APP_PORT
    }, 
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
    }
}

module.exports = config