const Tour = require("../models/Tours");

exports.updateATourByIdService = async (id, doc) => {
    const result = await Tour.updateOne({ _id: id }, { $set: doc });
    return result;
}

exports.getTrendingTourService = async () => {
    const result = await Tour
        .find({ viewCount: { $gt: 0 } })
        .sort({ viewCount: -1 })
        .limit(3)

    return result;
}


exports.getCheapestTourService = async () => {
    const result = await Tour
        .find({ viewCount: { $gt: 0 } })
        .sort({ viewCount: 1 })
        .limit(3)

    return result;
}