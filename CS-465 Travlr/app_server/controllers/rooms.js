const fs = require('fs')

const rooms = (req, res) => {
    pageTitle = 'Travlr Getaways - Rooms';
    res.render('rooms', {title: pageTitle});

}

module.exports = {
    rooms
}