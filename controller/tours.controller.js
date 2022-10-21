const { createATourService } = require("../services/tours.service")



module.exports.getAlltours = async (req, res, next) => {
    res.send("get all tours api hitted")
}

module.exports.postAtour = async (req, res, next) => {
    try {

        const result = await createATourService(req.body);

        res.status(200).json({
            status: "Success",
            message: "Create a tour successfully",
            result: result

        })
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create',
            error: error.message
        })
    }

}