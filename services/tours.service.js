const Tour = require('../models/Tours')

exports.getAlltoursService = async (queries) => {
    const result = await Tour
        .find({})
        .select(queries.fields)
        .sort(queries.sortby)
    return result;
}

exports.createATourService = async (data) => {
    const result = await Tour.create(data);
    return result;
}