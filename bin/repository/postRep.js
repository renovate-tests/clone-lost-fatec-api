const post = require('../model/postModel');

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            post.find({})
                .populate('categoria')
                .populate('status')
                .populate('local')
                .exec((err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            post.findOne({ _id: id })
                .exec((err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
        })
    },
    insert: (body) => {
        return new Promise((resolve, reject) => {
            post.create(body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    update: (body) => {
        return new Promise((resolve, reject) => {
            post.findOneAndUpdate({ _id: body._id }, body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            post.find({ _id: id }, (err, body) => {
                if (body.length == 0) {
                    err = new Error('Não foi encontrado');
                }
                if (err) {
                    return reject(err);
                }
                post.remove(body[0], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
            })

        })
    }
}