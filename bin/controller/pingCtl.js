module.exports = (app) => {
    app.get("/ping", (req, res, next) => res.status(204))
}