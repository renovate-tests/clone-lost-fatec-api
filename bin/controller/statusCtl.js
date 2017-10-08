const statusRep = require('../repository/statusRep');

module.exports = (app) => {
    app.get("/status/", (req, res, next) => {
        statusRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/status/:id", (req, res, next) => {
        statusRep.findById(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/status/", (req, res, next) => {
        statusRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/status/", (req, res, next) => {
        statusRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/status/:id", (req, res, next) => {
        statusRep.delete(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}