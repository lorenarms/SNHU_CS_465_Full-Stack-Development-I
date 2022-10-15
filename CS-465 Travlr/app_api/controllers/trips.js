const { model } = require("mongoose");
const mongoose = require("mongoose");
const Trip = mongoose.model("trips");
const User = mongoose.model('users');

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// GET: /trips



const getUser = (req, res, callback) => {

    console.log('in #getUser');
    //console.log(req.payload.email);
    
    if (req.auth && req.auth.email) {

    // if (req.payload && req.payload.email) {
        User
            .findOne({ email : req.auth.email })
            .exec((err, user) => {
                if (!user) {
                    return res  
                        .status(404)
                        .json({"message": "Email not found"});
                } else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);

                }
                callback(req, 
                    res.json({"message": "User found"}), 
                    console.log('callback'),
                    console.log(req.auth)
                    
                    );


                });
    } else {
        
        return res
            .status(404)
            .json({"message": "User was not found"});
            console.log(req.payload);
            
    }
};



const getAllTrips = async (req, res) => {
    Trip
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
    Trip
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
    getUser(req, res, 
        (req, res) => {
            Trip
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
                    return

                }
            });
        }
    );

}

const tripsDeleteTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            console.log("inside trips.js on server #tripsDeleteTrip");
            Trip.findOneAndDelete({'code': req.params.tripCode})
            
        
            .then(trip => {
                if (!trip) {
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
        
                }
                return res
                    

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
            })
            console.log("return from delete trip");

        });


}

const tripsUpdateTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            
            Trip  
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
                    return res
                        
        
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
                })
                console.log("completed updateTrip");
        })
}

const tripsFindCode = async (req, res) => {
    Trip.find({ code: req.params.tripCode }).exec((err, trip) => {
      if (!trip) {
        return res.status(404).json({ message: "trip not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trip);
      }
    });
  };


module.exports = {
    getAllTrips,
    getTripByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip,
    tripsFindCode,
    getUser
};

