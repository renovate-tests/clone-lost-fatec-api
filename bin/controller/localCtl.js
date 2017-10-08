const localRep = require('../repository/localRep');

module.exports = (app) => {
    app.get("/local/", (req, res, next) => {
        localRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/local/:id", (req, res, next) => {
        localRep.findById(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/local/", (req, res, next) => {
        localRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/local/", (req, res, next) => {
        localRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/local/:id", (req, res, next) => {
        localRep.delete(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}