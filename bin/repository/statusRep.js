const status = require('../model/statusModel');

module.exports = {
    findAll: () => {
        return new Promise((resolve, reject) => {
            status.find({}, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    findById: (id) => {
        return new Promise((resolve, reject) => {
            status.findOne({ _id: id }, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    insert: (body) => {
        return new Promise((resolve, reject) => {
            status.create(body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    update: (body) => {
        return new Promise((resolve, reject) => {
            status.findOneAndUpdate({ _id: body._id }, body, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            status.find({ _id: id }, (err, body) => {
                if (body.length == 0) {
                    err = new Error('Não foi encontrado');
                }
                if (err) {
                    return reject(err);
                }
                status.remove(body[0], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                })
            })

        })
    }
}