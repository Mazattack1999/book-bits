const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Review extends Model {}

// define table columns and configuration
Review.init(
    {
        //define an id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define a book_title column
        book_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define review_text column
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // define star_rating column
        star_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        // define user_id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // define book_id column
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;