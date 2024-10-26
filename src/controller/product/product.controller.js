const productModel = require("../../models/productWebModel");

const productController = {
    createProduct: async (req, res) => {
        const { productName, brandName, productImage,id_category, description, price, sellingPrice } = req.body
        const newProduct = new productModel({
            productName, brandName, productImage, description, price, sellingPrice, category : id_category
        });

        await newProduct.save();
        return res.status(200).json({
            message: "Tạo thành công",
            success: true,
            error: false
        });
    },

    getProduct: async (req, res) => {
        const { id } = req.params;
        const data = await productModel.find({ category : id })
        return res.json({ data })
    },
    noActiveProduct: async (req, res) => {
        const { id } = req.params
        await productModel.findOneAndUpdate(
            { _id: id },
            updateData,
            { new: true, isActive: true }
        );
        return res.json({
            message: "Ẩn sản phẩm thành công"
        })
    },

    updateProduct: async (req, res) => {
        await productModel.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true, isActive: true }
        );

        return res.json({
            message: "Update sản phẩm thành công"
        })
    },
    getProductDetail : async (req, res) => {
        const { id , productId } = req.body;
        const data = await productModel.findOne({ category : id , _id : productId })
        return res.json({ data })
    },

};

module.exports = productController;
