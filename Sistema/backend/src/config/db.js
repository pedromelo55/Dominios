import {Sequelize} from 'sequelize';

export const conexao = new Sequelize('geotecnica', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

conexao.authenticate().then(() => {
    console.log('conexão com o banco realizada com sucesso!')
}).catch(() => {
    console.error('Ação não realizada')
})