const fs = require('fs')

const news = (req, res) => {
    pageTitle = 'Travlr Getaways - News';
    res.render('news', {title: pageTitle});

};

module.exports = {
    news
}