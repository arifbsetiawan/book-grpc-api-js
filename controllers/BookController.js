const { response } = require('express');
const client = require('../config/client');

const BookController = {
    Index: (req, res) => {
        try {
            client.index({}, (err, response) => {
                if (err) {
                    throw err;
                }
                let data = {
                    msg: response.message,
                    data: response.books
                };
                res.status(200).send(data);
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    Get: (req, res) => {
        try {
            let request = {
                id: req.params.id
            }
            client.get(request, (err, response) => {
                if (err) {
                    throw err;
                }
                let data = {
                    msg: response.message,
                    data: response.book
                };
                res.status(200).send(data);
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    Add: (req, res) => {
        try {
            let request = {
                title: req.body.title,
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address,
            }
            client.add(request, (err, response) => {
                if (err) {
                    throw err;
                }
                let data = {
                    msg: response.message,
                    data: response.book
                };
                res.status(201).send(data);
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    Update: (req, res) => {
        try {
            let request = {
                id: req.params.id,
                title: req.body.title,
                name: req.body.name,
                phone: req.body.phone,
                address: req.body.address,
            }
            client.update(request, (err, response) => {
                if (err) {
                    throw err;
                }
                let data = {
                    msg: response.message,
                    data: response.book
                };
                res.status(200).send(data);
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },
    Delete: (req, res) => {
        try {
            let request = {
                id: req.params.id,
            }
            client.delete(request, (err, response) => {
                if (err) {
                    throw err;
                }
                let data = {
                    msg: response.message,
                };
                res.status(200).send(data);
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },
}

module.exports = BookController;