import { Sequelize } from "sequelize";
import { conexao } from "../config/db.js";

//Define a tabela de amostras e suas colunas, conforme documentação do sequelize

export const Amostra = conexao.define('amostra', {
    num_rel: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },

    num_furo: {
        type: Sequelize.STRING(10),
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

    nspt1: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    nspt2: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
});

//Cria tabela
Amostra.sync();

