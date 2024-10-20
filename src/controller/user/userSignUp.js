const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');


async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body
        console.log(545, email, password)

        const user = await userModel.findOne({ email })

        console.log("user", user)

        if (user) {
            throw new Error("Tài khoản đã tồn tại trong hệ thống")
        }

        if (!email) {
            throw new Error("Vui lòng nhập đúng định dạng email")
        }
        if (!password) {
            throw new Error("Vui lòng nhập đúng password")
        }
        if (!name) {
            throw new Error("Vui lòng nhập tên")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Mật khẩu không đúng")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "Tạo tài khoản thành công"
        })


    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignUpController