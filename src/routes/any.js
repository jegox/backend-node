'use strict'
const controller = require('../controllers/any.controller')

module.exports = (router) => {
  router.route('/any')
    .all((req, res, next) => {
      next()
    })
    .get((req, res) => {
      let query = req.query? req.query : {}
      controller.read({ ...query, deletedAt: null })
        .then(response => res.status(200).send({ status: true, message: response }))
        .catch(err => res.send({ status: false, message: err.message }))
    })
    .post((req, res) => {
      req.body.deletedAt = null
      controller.create(req.body)
        .then(response => res.status(200).send({ status: true, message: response }))
        .catch(err => {
            if(err) res.send({ status: false, message: err })
          }
        )
    })
    .put((req, res) => {
      controller.update(req.body)
        .then(response => res.status(200).send({ status: true, message: response }))
        .catch(err => res.send({ status: false, message: err }))
    })
    .delete((req, res) => {
      controller.destroy(req.body._id)
        .then(response => res.status(200).send({ status: true, message: response }))
        .catch(err => res.send({ status: false, message: err }))
      
    })
}