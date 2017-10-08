const usuarioRep = require('../repository/usuarioRep');

module.exports = (app) => {
    app.get("/usuario/", (req, res, next) => {
        usuarioRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/usuario/:ra", (req, res, next) => {
        usuarioRep.findById(req.params.ra)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/usuario/", (req, res, next) => {
        usuarioRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/usuario/", (req, res, next) => {
        usuarioRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/usuario/:ra", (req, res, next) => {
        usuarioRep.delete(req.params.ra)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}