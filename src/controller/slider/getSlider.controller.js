const sliderModel = require("../../models/sliderModel")

const getSliders = async (req, res) => {
    try {
        const data = await sliderModel.findOne({});
        res.json({
            data: data,
            message: "success",
            error: false,
            success: true
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = getSliders