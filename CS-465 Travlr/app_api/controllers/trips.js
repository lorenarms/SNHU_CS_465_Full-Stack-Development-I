const mongoose = require('mongoose');
const model = mongoose.model('trips');

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// GET: /trips

const getAllTrips = async (req, res) => {
    model
        .find({})
        .exec((err, trips) => {
            if(!trips) {
                return res
                    .status(404)
                    .json({ "message": "trips not found"});

            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res 
                    .status(200)
                    .json(trips);
            }
        });
};


const getTripByCode = async (req, res) => {
    model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res  
                    .status(404)
                    .json({"message": "That trip was not found"});

            } else if (err) {
                return res  
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip)

            }
        });
};


const tripsAddTrip = async (req, res) => {
    model
    .create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    },
    (err, trip) => {
        if (err) {
            return res
                .status(400) // bad request, invalid content
                .json(err);
        } else {
            return res  
                .status(201) // created
                .json(trip);
        }
    });
}

const tripsDeleteTrip = async (req, res) => {

    console.log("inside trips.js on server #tripsDeleteTrip");
    model.findOneAndDelete({'code': req.params.tripCode})
    

    .then(trip => {
        if (!trip) {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });

        }
        res.send(trip);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res
                .status(404)
                .send({
                    message: "Trip not found with code " + req.params.tripCode
                });
        }
        return res
            .status(500) // server error
            .json(err);
    });

}

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model  
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, {new: true})
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with cod " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}


module.exports = {
    getAllTrips,
    getTripByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};

