const Cost = require('../models/Cost');
const User = require('../models/User');

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

const addCostItem = async (req, res) => {
    try {
        const { userid, description, category, sum, day, month, year } = req.body;

        if (!userid || !description || !category || !sum) {      // Validate required fields
            return res.status(400).json({ error: 'Missing info' });
        }


        const userExists = await User.findOne({ id: userid });  // Check if user exists
        if (!userExists) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const currentDate = new Date();  // Use the current date as default if no date is given
        const costDay = day || currentDate.getDate();
        const costMonth = month || currentDate.getMonth() + 1;
        const costYear = year || currentDate.getFullYear();

        if (day && month && year) {
            if (!isValidDate(costDay, costMonth, costYear)) {
                return res.status(400).json({ error: 'Invalid date provided' });
            }
        }

        const newCost = new Cost({ // Create a new cost item using the request body
            userid,
            description,
            category,
            sum,
            day: costDay,
            month: costMonth,
            year: costYear
        });

        const savedCost = await newCost.save();
        return res.status(201).json(savedCost);
    } catch (error) {
        return res.status(500).json({ error: 'Server error', message: error.message });
    }
};
module.exports = { addCostItem };