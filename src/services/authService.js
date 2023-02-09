const User = require("../models/User");
const config = require("../configs/config");
const jwt = require("../lib/jsonWebToken");

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    //validation should be here not in the models !!!

    const isValid = await user.checkPass(password);

    if (!user || isValid) {
        throw "Invalid username/password!";
    }

    const payload = { username: user.username };
    const token = await jwt.sign(payload, config.SECRET, { expiresIn: "2h" });
    return token;
};
