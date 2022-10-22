const Tour = require("../models/Tours");

let count = 0;
const viewCount = async (req, res, next) => {
    count++;
    const { id } = req.params;
    const doc = { viewCount: parseInt(count) }
    console.log(count);
    await Tour.updateOne({ _id: id }, { $set: doc })

    // call next function
    next()

}

module.exports = viewCount;