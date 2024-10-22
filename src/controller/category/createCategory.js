const categoryModel = require("../../models/categoryModel");

const categoryController = {
    createCategory: async (req, res) => {
        const { categoryName } = req.body; // Extract from req.body

        // Check if the category already exists
        const checkExistCategory = await categoryModel.findOne({ categortyName : categoryName });
        if (checkExistCategory) {
            return res.status(200).json({
                message: "Tồn tại dữ liệu này",
                success: false,
                error: true
            });
        }

        const newCategory = new categoryModel({
            categortyName : categoryName
        });

        await newCategory.save();
        return res.status(200).json({
            message: "Tạo thành công",
            success: true,
            error: false
        });
    },
    getCategory : async (req , res) =>{
     const data = await categoryModel.find({})
     return res.json({data})
    },
    deleteCategory : async (req , res) =>{
        const { id } = req.params
        const data = await categoryModel.deleteOne({ _id: id });
        return res.json({
            message : "Delete category success"
        })
       }
};

module.exports = categoryController; // Use CommonJS export if not using ES modules
