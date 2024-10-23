const contactModel = require("../../models/contactModel");

const contactController = {
    createContact: async (req, res) => {
        const { name, email, phone, address, descripts } = req.body
        const newContact = new contactModel({
            name, email, phone, address, descripts
        });

        await newContact.save();
        return res.status(200).json({
            message: "Tạo thành công",
            success: true,
            error: false
        });
    },

    getContact: async (req, res) => {
        const data = await contactModel.find({})
        return res.json({data})
    },
    deleteContact: async (req, res) => {
        const { id } = req.params
        await contactModel.deleteOne({ _id: id });
        return res.json({
            message: "Xóa Contact Thành công"
        })
    }

};

module.exports = contactController;
