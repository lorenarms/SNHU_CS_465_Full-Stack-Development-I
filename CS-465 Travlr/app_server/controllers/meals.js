const fs = require('fs')

const meals = (req, res) => {
    pageTitle = 'Travlr Getaways - Meals';
    res.render('meals', {title: pageTitle});

};

module.exports = {
    meals
}