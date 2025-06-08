const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @typedef {Object} Cost
 * @property {number} userid - ID of the user
 * @property {string} description - Description of the cost
 * @property {string} category - Category of the cost (food, health, housing, sport, education)
 * @property {number} sum - Amount spent
 * @property {number} day - Day of the month
 * @property {number} month - Month number
 * @property {number} year - Year number
 */
const costSchema = new Schema({
    userid: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education'],
        required: true
    },
    sum: {
        type: Number,
        required: true,
        min: 0
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12
    },
    year: {
        type: Number,
        required: true
    }
});

const Cost= mongoose.model('Cost', costSchema);
module.exports = Cost;
