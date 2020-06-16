const Sequelize = require('sequelize');
const { DatabaseError } = require('sequelize');

const sequelize = new Sequelize ('database', process.env.DB_USER,
process.env.DB_PASS, {
    host:'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: 'database.sqlite'
});

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/database.sqlite'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
        Top = sequelize.define('top', {
            username: {
                type: Sequelize.STRING
            },
        score: {
            type: Sequelize.INTEGER
        }
        });
    })
    .catch(err =>{
        console.error('Unable to connect to the database', err);
    });

function InfAdd(username, score){
    Top.create({ username: "Bot", score:100}).then(top =>{
        console.log("Auto-generated ID", top.id);
    });
}

function InfTotheTop(num){
    return Top.findAll({
        limit: num,
            order:[
                ['score','DESC']
            ]
    }).then(tops =>{
        console.log(tops);
    });
}