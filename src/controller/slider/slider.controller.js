const sliderSchema = require("../../models/sliderModel")

const updateToCreateSlider = async (req, res) => {
    try {
        const sliderList = req?.body?.sliders || [];

        const dataSlider = await sliderSchema.find({})
        if (dataSlider) {
            const { _id } = dataSlider;
            await sliderModel.findOneAndUpdate(
                { _id: _id }, // Condition to find the document by ID
                { url_image: dataSlider }, // New data to update
                { new: true } // Return the updated document
            );
        } else {
            const newSlider = new sliderSchema(sliderList);
            await newSlider.save();
        }


        res.json({
            data: [],
            message: "Tạo sản phẩm nổi bật thành công",
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


module.exports = updateToCreateSlider