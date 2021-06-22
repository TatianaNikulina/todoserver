module.exports = {
    HOST: '127.0.0.1',
    PORT: '8889',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'profile_app',
    dialect: 'mysql',
    pool: { //тонкости подключения к базе данных
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}