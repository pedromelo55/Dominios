import { Sequelize } from "sequelize";
import { conexao } from "../config/db.js";

//Define a tabela de amostras e suas colunas, conforme documentação do sequelize

export const Amostra = conexao.define('amostra', {
    num_rel: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },

    cooX: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    cooY: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    nspt12: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    nspt23: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },

    num_amostra: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },    
},
{
    timestamps: false
});

//Cria tabela
Amostra.sync();

