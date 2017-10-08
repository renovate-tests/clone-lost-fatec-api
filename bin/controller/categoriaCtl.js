const categoriaRep = require('../repository/categoriaRep');

module.exports = (app) => {
    app.get("/categoria/", (req, res, next) => {
        categoriaRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/categoria/:id", (req, res, next) => {
        categoriaRep.findById(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/categoria/", (req, res, next) => {
        categoriaRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/categoria/", (req, res, next) => {
        categoriaRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/categoria/:id", (req, res, next) => {
        categoriaRep.delete(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}