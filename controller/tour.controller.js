const { updateATourByIdService, getTrendingTourService, getCheapestTourService } = require("../services/tour.services");

module.exports.updateATourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateATourByIdService(id, req.body);
        res.status(200).json({
            message: "Successfully update the data",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed",
            error: error.message
        })
    }
}


module.exports.getTrendingTour = async (req, res, next) => {

    try {
        const result = await getTrendingTourService();
        res.status(200).json({
            message: "Successfully get the trending tours",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed",
            error: error.message
        })
    }
}


module.exports.getCheapestTour = async (req, res) => {
    try {
        const result = await getCheapestTourService();
        res.status(200).json({
            message: "Successfully get the cheapest tours",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            message: "Failed",
            error: error.message
        })
    }
}