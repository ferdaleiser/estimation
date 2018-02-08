'use strict';

var config = require('../../config/secrets');

module.exports = function(db, DataTypes) {
    var Story = db.define('stories', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        description: Sequelize.STRING,
        jiraID: Sequelize.STRING,
        points: Sequelize.STRING,
    }, {
        tableName: 'stories',
        timestamps: true
    });

    return Story;
};
