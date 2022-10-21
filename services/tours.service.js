const Tour = require('../models/Tours')

exports.getAlltoursService = async () => {

}

exports.createATourService = async (data) => {
    const result = await Tour.create(data);
    return result;
}