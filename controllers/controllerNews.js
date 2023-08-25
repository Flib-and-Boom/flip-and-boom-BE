const { News } = require('../models')

class ControllerNews {

    static async getNews(req, res, next) {
        try {
            const news = await News.findAll()
            res.status(200).json(news)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = { ControllerNews }