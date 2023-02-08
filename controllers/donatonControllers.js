const donation = require("../models/donationModels")

exports.saveDonation = async (req, res) => {

    const donations = new donation(req.body)

    const result = await donations.save()
    res.send(result)

}

exports.getDonation = async (req, res) => {
    let { Fromcreator, Tocreator } = req.body;
    let query = {
        Fromcreator: Fromcreator,
        Tocreator: Tocreator
    }
    const donations = await donation.find(query)

    if (donations.length === 0) {
        res.status(404).send({ message: "no donation found" })
    }

    console.log(donations)
    res.send(donations)

}