const { updateATourByIdService } = require("../services/tour.services");

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