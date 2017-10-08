const postRep = require('../repository/postRep');

module.exports = (app) => {
    app.get("/post/", (req, res, next) => {
        postRep.findAll()
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.get("/post/:id", (req, res, next) => {
        postRep.findById(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.post("/post/", (req, res, next) => {
        postRep.insert(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.put("/post/", (req, res, next) => {
        postRep.update(req.body)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })

    app.delete("/post/:id", (req, res, next) => {
        postRep.delete(req.params.id)
            .then(q => res.status(200).send(q))
            .catch(err => next(err))
    })
}