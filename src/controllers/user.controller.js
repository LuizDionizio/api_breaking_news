const UserService = require('../services/user.service')
const mongoose = require('mongoose');

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {

        res.status(400).send({ message: "Submit all fields for registration" });
    };

    const user = await UserService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating User" });
    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    });
};

const findAll = async (req, res) => {
    const users = await UserService.findAllService();

    if (users.length === 0) {
        return res.status(400).send({ Message: "There are no registered users" });
    }

    res.send(users);
};

const findById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ Message: "Ivalid id" });
    }

    const user =  await UserService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ Message: "User not found" });
    }

    res.send(user);

};

module.exports = { create, findAll, findById };