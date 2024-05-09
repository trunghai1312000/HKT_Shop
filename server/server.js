const app = require("./src/app");


const PORT = process.env.APP_PORT || 3056

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close( () => {
        console.log('Server closed');
        process.exit(0);
    });
})