const { createATourService, getAlltoursService, getAtourByIdService } = require("../services/tours.service")


// get all data
module.exports.getAlltours = async (req, res, next) => {
    try {
        //find by query
        const queries = {}
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");

            queries.fields = fields;
        }

        if (req.query.sort) {
            const sortby = req.query.sort
            queries.sortby = sortby;
        }

        const data = await getAlltoursService(queries);

        res.status(200).json({
            status: "Success",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Can't get the data",
            error: error.message
        })
    }

}


// post a data
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


// get a tour by id 
module.exports.getAtourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const data = await getAtourByIdService(id);
        res.status(200).json({
            message: "Get the data successfully",
            data: data
        })

    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Cann't get the data by id",
            error: error.message
        })
    }

}

