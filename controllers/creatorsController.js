const creator = require("../models/creatorModels")




exports.saveCreators = async (req, res) => {
    const creators = new creator(req.body)

    const result = await creators.save()
    res.send(result)
}

exports.getCreators = async (req, res) => {

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
    let skip = (page - 1) * limit

    const creators = await creator.find().skip(skip).limit(limit)
    res.send({
        page,
        limit,
        creators
    })

}