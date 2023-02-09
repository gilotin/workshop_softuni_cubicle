const User = require("../models/User");

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });

exports.login = async ( username, password) => {
    const user = await this.getUserByUsername(username);

    
    //validation should be here not in the models !!!
    
    const isValid = await user.checkPass(password);

    if(!user || isValid){
        throw "Invalid username/password!";
    }

    return user;
}

