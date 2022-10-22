const Tour = require("../models/Tours");

exports.updateATourByIdService = async (id, doc) => {
    const result = await Tour.updateOne({ _id: id }, { $set: doc });
    return result;
}