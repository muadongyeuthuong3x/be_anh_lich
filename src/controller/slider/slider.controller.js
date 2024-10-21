const sliderModel = require("../../models/sliderModel")

const updateToCreateSlider = async (req, res) => {
    try {
        const sliderList = req?.body?.productImage || [];
        const dataSlider = await sliderModel.findOne({});
        if (dataSlider) {
            const { _id } = dataSlider;
            await sliderModel.findOneAndUpdate(
                { _id: _id },
                { url_image: sliderList },
                { new: true }
            );
        } else {
            const newSlider = new sliderModel(sliderList);
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