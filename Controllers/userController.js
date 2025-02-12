import User from '../Models/userModel.js'
export const create = async (req, res) => {
    try {
        const userData = new User(req.body)
        if (!userData) {
            return res.status(404).joss({ msg: "User Data not found" })
        }
        const saveData = await userData.save()
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "user data not found" })
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({ error: error })

    }
}
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id)
        if (!userExists) {
            return res.status(404).json({ msg: "User not Found" })
        }
        res.status(202).json(userExists)
    } catch (error) {
        res.status(500).json({ error: error })

    }
}
export const update = async (req, res) => {
    try {
        const id = req.params.id;

        const userExists = await User.findById(id)
        if (!userExists) {
            return res.status(404).json({ msg: "User not Found" })
        }
        const UpdatedData = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ msg: "User Updated Sucessfully" })
    } catch (error) {
        res.status(500).json({ error: error })

    }
}
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id)
        if (!userExists) {
            return res.status(404).json({ msg: "User not exists" })
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({ msg: "User deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: error })

    }
}