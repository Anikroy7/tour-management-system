const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;


// create the tourSchema
const toursSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [30, "Name is too long"],
        unique: [true, "Product name must be unique"]
    },
    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        minLength: [500, "Our all package is more than 500"]
    },
    image: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true,
        maxLength: [60, "You couldn't be travell more than 60 days"],
        minLength: [1, "You need must be 1 day"]
    },

    date: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        required: true,
        enum: {
            values: ['available', "unavailable"],
            message: "Satus shouldn't be this {value}"
        }
    },
    viewCount: Number
}, {
    timestamps: true,
})


// create the model
const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;