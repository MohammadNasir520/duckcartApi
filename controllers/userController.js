const user = require("../models/userModels")
const jwt = require("jsonwebtoken")

exports.signUp = async (req, res) => {
    console.log(req.body)
    const { username, password, confirmpassword } = req.body;
    const existingUser = await user.findOne({ username: username })
    console.log(existingUser)
    if (existingUser?.username === username) {
        return res.status(400).send({ message: 'username already exist' })
    }
    if (password === "" || confirmpassword === "") {
        return res.status(404).send({ message: 'password should not be empty' })
    }
    else if (password !== confirmpassword) {
        return res.status(404).send({ message: 'password does not match' })
    }
    else if (password.length < 6 || confirmpassword.length < 6) {
        return res.status(404).send({ message: 'password must be at least 6 character' })
    }
    delete req.body.confirmpassword;
    console.log(req.body)
    console.log('signUp')
    let newUser = new user(req.body);
    let result = await newUser.save()
    console.log(result)
    result = result.toObject();
    delete result.password;

    const token = jwt.sign(
        {
            username: result.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1h"
        }
    )

    res.send({ result, token, message: "signup successful" })


}


exports.login = async (req, res) => {

    let result = await user.findOne({ username: req.body.username })
    if (!result) {
        return res.status(404).send('user does not exist')
    }
    else if (result.password !== req.body.password) {
        return res.status(404).send('password does not matched')
    }
    const token = jwt.sign(
        {
            username: result.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1h"
        }
    )
    result = result.toObject()
    delete result.password
    res.send({ result, token })
}